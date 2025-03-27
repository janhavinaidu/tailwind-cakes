module.exports = {
  content: ["./*.html", "./src/**/*.html", "./src/**/*.js"],
   // Ensures all HTML and JS files are scanned
   darkMode: 'class',
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px"
    },
    extend: {
      colors: {
        thecolor: '#2F4156',
        thecolorlight: '#3D5170',
        secondcolor: '#FFCC00',
        paracolor: '#FDDAC5',
        whicolor: '#fff',
        blacolor: "#000",
        greecolor: "#007936",
        recolor: "#FF5733",
        darkre: '#000000',
        darkcolorli: "#171717",
        ancolor: '#C08552',
        bcolor: '#235347'

       
      },
      keyframes: {
        move: {
          "50%": { transform: 'translateY(-1rem)' } // Corrected placement of keyframe properties
        }
      },
      animation: {
        'movingY': 'move 3s linear infinite'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem'
        }
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif']
      }
    }
  },
  plugins: [],
}
