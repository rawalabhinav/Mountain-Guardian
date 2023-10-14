/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

module.exports = {

  mode :'jit',
  
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {

    

    extend: {

      

      colors:{

        // Web
        primary:'#823598',
        primary_dark:'#4B205A',
        primary_light:'#A154A1',

        // Alerts
        alert_error :'#FF5959',
        alert_success:'#84CC6A',
        alert:'#F3BD30',

        // WebBackground
        background_dark:'#F3F3F3',
        background_light:'#F8F8F8',

        //Monotones for texts
        text_darkGrey:'#333333',
        text_meduimGrey:'#666666',
        text_grey:'#C7C7C7',
        text_lighterGrey:'#ECECEC',
        text_black:'#000000',
        text_white:'#FFFFFF',

        // ACCENT COLOURS (used for status & Priority)
        yellow_primary:'#FEC72E',
        yellow_tertiary:'#FFEFC2',
        orange_primary:'#FF9231',
        orange_tertiary:'#FFE3CA',
        green_primary:'#90C440',
        green_tertiary:'#E5FFBC',
        red_primary:'#E4505A',
        red_tertiary:'#FFE5E7',
        blue_primary:'#1E94D2',
        blue_tertiary:'#D7F1FF',
        pink_primary:'#C93B89',
        pink_tertiary:'#FFE9F5',
        
      },


      // Typograph
      //   Used fontWeight as a values instead of args(bold,semi-bold) 
      //   as stylesheet and tailwind css following different standards
          fontSize:{
            h1:[  '94px'  , {lineHeight: '60px', fontWeight: '300'}],
            h2:[  '58px'  , {lineHeight: '48px', fontWeight: '300'}],
            h3:[  '46px'  , {lineHeight: '32px', fontWeight: '500'}],
            h4:[  '34px'  , {lineHeight: '32px', fontWeight: '500'}],
            h5:[  '24px'  , {lineHeight: '28px', fontWeight: '600'}],
            h6:[  '20px'  , {lineHeight: '28px', fontWeight: '500'}],
            subtitle1:[  '20px'  , {lineHeight: '28px', fontWeight: '400'}],
            subtitle2:[  '14px'  , {lineHeight: '24px', fontWeight: '500'}],
            body1:[  '16px'  , {lineHeight: '24px', fontWeight: '400'}],
            body2:[  '14px'  , {lineHeight: '20px', fontWeight: '400'}],
            button:[  '16px'  , {lineHeight: '24px', fontWeight: '600'}],
            caption:[  '12px'  , {lineHeight: '20px', fontWeight: '400'}],
            overline:[  '10px'  , {lineHeight: '20px', fontWeight: '400'}],
          },
      
  

         
  
  
      screens: {
        tablet : '48px',
        desktop: '1248px',
      },
  
  
  
      boxShadow:{
        bottom : '0px 4px     rgba(90, 90, 90, .08)', 
        top:   '0px -4px   rgba(90, 90, 90, 0.08)',
        center:  '0px 1px   rgba(90, 90, 90, 0.08)',
      },
  
  
  
  //



    },
  },
  plugins: [],

}
