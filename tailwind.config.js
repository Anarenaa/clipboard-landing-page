/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      'strong-cyan': {
        DEFAULT: 'hsl(171, 66%, 44%)',
        0.3: 'hsl(171, 66%, 44%, 0.3)',
        0.8: 'hsl(171, 66%, 44%, 0.8)',
      },
      'light-blue': {
        DEFAULT: 'hsl(233, 100%, 69%)',
        0.3: 'hsl(233, 100%, 69%, 0.3)',
        0.8: 'hsl(233, 100%, 69%, 0.8)',
      },
      'dark-grayish-blue': {
        DEFAULT: 'hsl(210, 10%, 33%)',
        0.3: 'hsl(210, 10%, 33%, 0.3)',
      },
      'grayish-blue': 'hsl(201, 11%, 66%)',
      'white': '#fff',
    },
    fontFamily: {
      'Bai-Jamjuree': ['"Bai Jamjuree"', 'sans-serif'],
    }
  }
}

