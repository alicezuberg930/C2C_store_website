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
        'slide-right': {
          '0%': {
            '-webkit-transform': 'translateX(-500px);',
            transform: 'translateX(-500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-left': {
          '0%': {
            '-webkit-transform': 'translateX(500px);',
            transform: 'translateX(500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-left-2': {
          '0%': {
            '-webkit-transform': 'translateX(500px);',
            transform: 'translateX(500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'rotate-center': {
          '0%': {
            '-webkit-transform': 'rotate(0)',
            transform: 'rotate(0);'
          },
          '100%': {
            '-webkit-transform': 'rotate(360deg)',
            transform: 'rotate(360deg);'
          },
        },
        'scale-up-center': {
          '0%': {
            '-webkit-transform': 'scale(0)',
            transform: 'scale(1);',
          },
          '100%': {
            '-webkit-transform': 'scale(1)',
            transform: 'scale(1.1);',
          }
        },
      },
      animation: {
        'slide-right': 'slide-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left': 'slide-left 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left-2': 'slide-left-2 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'rotate-center': 'rotate-center 10s linear infinite;',
        'scale-up-center': 'scale-up-center 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;'
      },
    },
  },
  plugins: [],
}
export default config
