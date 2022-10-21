import React from 'react'
import { createGlobalStyle } from 'styled-components'

const StyledGlobal = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;

    } 
    body{

      display: flex;
      //flex-direction: column;
      align-items: center;
      justify-content: center;
      //height:100%;
      background: linear-gradient(to right top, #83e1ad, #78b7bd);
      background-attachment: fixed;
    }



`
export default StyledGlobal

// .color1 {color: #000015;}
// .color2 {color: #2e2b4f;}
// .color3 {color: #625998;}
// .color4 {color: #a38eed;}
// .color5 {color: #f2caff;}
