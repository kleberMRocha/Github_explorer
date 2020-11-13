import { createGlobalStyle } from 'styled-components';
import background from '../assests/background.svg';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline:0;
  box-sizing: border-box;
}
body{
  background:#E5E5E5 url(${background}) no-repeat 70% top;
  -webkit-font-smoothing: antialiased;
}

body, input, button{
font: 16px Roboto, sans-serif;
}

#root{
  max-width:940px;
  margin:0 auto;
  padding: 40px 20px;
}

button{
  cursor:pointer;
}
`;
