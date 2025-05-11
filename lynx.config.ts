import { defineConfig } from '@lynx-js/rspeedy'

import { pluginQRCode } from '@lynx-js/qrcode-rsbuild-plugin'
import { pluginReactLynx } from '@lynx-js/react-rsbuild-plugin'

export default defineConfig({
  server: {
    host: '192.168.0.189', 
    port: 3000,
  },
  plugins: [
    pluginQRCode({
      schema(url) {
        // ✅ This appends the fullscreen flag to the full URL Lynx uses
        return `${url}?fullscreen=true`
      },
    }),
    pluginReactLynx(),
  ],
})
