module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    maxWidth: {
      default: "1440px",
      tablet: "768px",
    },
    fontSize: {
      '6xl': '3.75rem',
      '5.5xl': '3.35rem',
      '5xl': '3rem',
      '4.5xl': '2.67rem',
      '3.5xl': '2rem',
      '3xl': '1.875rem',
      '2.5xl': '1.67rem',
      '2xl': '1.335rem',
      'xl': '1.25rem',
      'lg': '1.125rem',
      'base': '1rem',
      'sm': '.890rem',
      'xs': '.7778rem',
    },
    maxWidth: {
      'medium': '16rem',
      'xl': '47rem',
      '2xl': '75rem',
    },
    extend: {
      spacing: {
        'buttonY': '16px',
        'buttonX': '40px',
        '5.5': '1.45rem',
        '2.8': '12px',
        '2.5': '.65rem',
        '1.2': '.32rem',
      },
      width: {
        'imageW': '250px',
        'medium': '15rem',
        'twoThirds': '66%'
      },
      height: {
        'imageH': '332px',
        'imageH_sm': '22rem',
      }
    },
  },
  plugins: [],
}
