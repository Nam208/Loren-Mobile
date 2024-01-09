import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landingBackGround': "url('../public/images/BG 2.png')",
        'giftFrame': "url('../public/images/Khung quà 1.png)",
        'giftBox': "url('../public/images/hộp quà 1.png')",
      }
    },
  },
  plugins: [],
}
export default config
