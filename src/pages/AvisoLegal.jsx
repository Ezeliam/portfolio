import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/legal.css';
import Header from '../components/Header';

const AvisoLegal = () => {
  const { t } = useTranslation('global');
  
  return (
    <>
    <Header></Header>
    <div className="legal-container pt-5">

      <h1 className='pt-3'>{t('global.legal.title', { defaultValue: 'Aviso Legal' })}</h1>
      
      <div>
        <h2>{t('global.legal.sections.intellectualProperty.title', { defaultValue: '1. Propiedad Intelectual' })}</h2>
        <p>{t('global.legal.sections.intellectualProperty.content1', { 
          defaultValue: 'Los contenidos originales de este sitio web, incluyendo textos, diseños y combinación de elementos, son propiedad exclusiva de Liam Di Cerbo.' 
        })}</p>
        
        <p>{t('global.legal.sections.intellectualProperty.content2', {
          defaultValue: 'Este sitio utiliza los siguientes recursos de terceros bajo sus respectivas licencias:'
        })}</p>
        
        <ul className="third-party-resources">
          <li>
            {t('global.legal.sections.intellectualProperty.resources.reactIcons', {
              defaultValue: 'Iconos de {reactIconsLink} (Licencia MIT)',
              reactIconsLink: <a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noopener noreferrer">React Icons</a>
            }, { interpolation: { escapeValue: false } })}
          </li>
          <li>
            {t('global.legal.sections.intellectualProperty.resources.libraries', {
              defaultValue: 'Bibliotecas de código abierto como React (Licencia MIT)'
            })}
          </li>
          <li>
            {t('global.legal.sections.intellectualProperty.resources.logos', {
              defaultValue: 'Logotipos de tecnologías (uso nominativo según políticas de cada marca)'
            })}
          </li>
        </ul>
        
        <p>{t('global.legal.sections.intellectualProperty.content3', {
          defaultValue: 'Los iconos de redes sociales (LinkedIn, GitHub, Gmail) son marcas registradas de sus respectivas empresas, utilizados aquí según sus políticas de uso de marca para enlaces de perfil personal.'
        })}</p>
      </div>
      
      <div>
        <h2>{t('global.legal.sections.privacy.title', { defaultValue: '2. Privacidad' })}</h2>
        <p>{t('global.legal.sections.privacy.content', {
          defaultValue: 'Este sitio web no recolecta datos personales de los visitantes de manera automática. Cualquier información que usted proporcione voluntariamente a través de correo electrónico será utilizada exclusivamente para responder a su consulta y no será compartida con terceros.'
        })}</p>
      </div>
      
      <div>
        <h2>{t('global.legal.sections.cookies.title', { defaultValue: '3. Cookies' })}</h2>
        <p>{t('global.legal.sections.cookies.content', {
          defaultValue: 'Este portafolio no utiliza cookies de seguimiento ni almacena información en el dispositivo del usuario. Solo se emplean cookies técnicas necesarias para el funcionamiento básico del sitio.'
        })}</p>
      </div>
      
      <div>
        <h2>{t('global.legal.sections.disclaimer.title', { defaultValue: '4. Exención de Responsabilidad' })}</h2>
        <p>{t('global.legal.sections.disclaimer.content', {
          defaultValue: 'Liam Di Cerbo no se hace responsable del uso ilegal o indebido que terceros puedan hacer de la información y contenidos publicados en este sitio web.'
        })}</p>
      </div>
      
      <div>
        <h2>{t('global.legal.sections.contact.title', { defaultValue: '5. Contacto' })}</h2>
        <p>
          {t('global.legal.sections.contact.content', {
            defaultValue: 'Para cualquier cuestión relacionada con este aviso legal, puede contactarme a través de mi dirección de correo electrónico: {email}',
            email: <a href="mailto:liamdicerbo@gmail.com">liamdicerbo@gmail.com</a>
          }, { interpolation: { escapeValue: false } })}
        </p>
      </div>
    </div>
    </>
  );
};

export default AvisoLegal;