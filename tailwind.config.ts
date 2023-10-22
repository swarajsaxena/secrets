import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideLeftAndFade: {
          from: {
            opacity: '0',
            transform: 'translateX(16px) translateY(-8px)',
          },
          to: { opacity: '1', transform: 'translateX(16px) translateY(0px)' },
        },
      },
      animation: {
        slideDownAndFade:
          'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.500'),
            // ...
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
