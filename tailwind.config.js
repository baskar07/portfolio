/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode:'class',
  theme: {
    extend: {
      screens:{
        'xs': { 'max': '767px'},
        'xxs': { 'max' : '320px'},
      },
      colors: {
				'first-color'    : '#317e76',
        'title-color' : '#f1f2f3',
        'text-color'     : '#9FA1AD',
        'body-color '    : '',
        'container-color': '#21232C',
				
        'menu': 'hsla(0, 0%, 10%, .568)',
        'box-shadow-main' : '0px 10px 28px -6px rgba(0,0,0,0.1)',
        'box-shadow-hover' : '0px 30px 40px -6px rgba(0,0,0,0.1)',
      
			},

    
    


    },
  },
  plugins: [],
}