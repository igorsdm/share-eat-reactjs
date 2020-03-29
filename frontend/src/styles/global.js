import { createGlobalStyle } from 'styled-components';
import PoppinsBold from '../assets/fonts/Poppins/Poppins-Bold.ttf';
import NunitoLight from '../assets/fonts/Nunito/NunitoSans-Light.ttf';
import NunitoBold from '../assets/fonts/Nunito/NunitoSans-Bold.ttf';
import NunitoRegular from '../assets/fonts/Nunito/NunitoSans-Regular.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: bold;
    font-display: swap;
    src: local('Poppins Bold'),
    local('Poppins-Bold'),
    url(${PoppinsBold}) format('woff2');
  }
  @font-face {
    font-family: 'NunitoSans';
    font-style: normal;
    font-weight: lighter;
    font-display: swap;
    src: local('NunitoSans Light'),
    local('NunitoSans-Light'),
    url(${NunitoLight}) format('woff2');
  }

  @font-face {
    font-family: 'NunitoSans';
    font-style: normal;
    font-weight: bold;
    font-display: swap;
    src: local('NunitoSans Bold'),
    local('NunitoSans-Bold'),
    url(${NunitoBold}) format('woff2');
  }
  @font-face {
    font-family: 'NunitoSans';
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: local('NunitoSans Regular'),
    local('NunitoSans-Regular'),
    url(${NunitoRegular}) format('woff2');
  }

  h1 {
    color: #f3aa00;
    font-family: 'Poppins';
    font-weight: 'bold'
  }

  span {
    color: #FFFFFF;
    font-family: 'NunitoSans';
    font-weight: 'lighter';
    letter-spacing: 0;
  }

  strong {
    color: #FFFFFF;
    font-family: 'NunitoSans';
    font-weight: 'bold';
    letter-spacing: 0;
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

  }

  body {
    background: #292929;
    -webkit-font-smoothing: antialiased !important;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  #root {
    margin: 0 auto;
    width: 360px;
    height: 640px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
  button{
    cursor: pointer;
  }
`;
