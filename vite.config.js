import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), 
    // Genera metaetiquetas dinámicas para cada ruta
    {
      name: 'html-inject-meta',
      transformIndexHtml(html) {
        return html.replace(
          '</head>',
          `<meta property="og:image" content="https://liamdicerbo.com/images/preview-portfolio.jpg" />
          </head>`
        );
      }
    }
  ],
})
