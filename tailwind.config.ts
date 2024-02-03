import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'very-dark-magenta': 'hsl(300,43%,22%)',
        'soft-pink': 'hsl(333,80%,67%)',
        'dark-grayish-magenta': 'hsl(303,10%,53%)',
        'light-grayish-magenta': 'hsl(300,24%,96%)',
      },
    },
  },
  plugins: [],
}
export default config
