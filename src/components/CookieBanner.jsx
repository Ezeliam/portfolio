import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';


const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    // muestra banner solo si no hay decisión previa
    if (localStorage.getItem('cookiesAccepted') === null) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
    // carga GA4 manualmente
    window.gtag?.('consent', 'update', {
      analytics_storage: 'granted'
    });
  };

  const handleReject = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setShowBanner(false);
    window.gtag?.('consent', 'update', {
      analytics_storage: 'denied'
    });
  };

  if (!showBanner) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '0',
      left: '0',
      right: '0',
      padding: '3rem',
      background: '#f5f5f5',
      zIndex: 1000,
      height: '20vh',
      color:'white',
      backgroundColor: 'rgba(5, 5, 5, 0.91)',
      textAlign: 'center'
    }}>
      <p>{t("global.cookies.question")}</p>
      <button style={{
        marginRight:'2rem', 
        padding: '0.5rem 1rem',
        borderRadius: '1rem',
        color:'black',
        backgroundColor: 'rgb(255, 255, 255)',
        fontWeight: 'bold',
        border: 'none'
      }} 
        onClick={handleAccept}>{t("global.cookies.accept")}</button>
      
      <button style={{
        marginLeft: '1rem',
        padding: '0.5rem 1rem', 
        borderRadius: '1rem',
        color:'black',
        backgroundColor: 'rgb(255, 255, 255)',
        fontWeight: 'bold',
        border: 'none'

      }} 
        onClick={handleReject}>{t("global.cookies.reject")}</button>

      <a href="/aviso-legal" style={{ marginLeft: '1rem' }}>{t("global.cookies.info")}</a>
    </div>
  );
};

export default CookieBanner;