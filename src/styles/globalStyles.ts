import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body{
    -webkit-font-smoothing: antialiased;
    background: #1A1A1A;
  }

  button{
    cursor: pointer;
  }

  :root{
    --background-header: #0D0D0D;
    --background-body: #1A1A1A;
    --background-task: #262626;
    --text-conclused: #8284FA;
    --total-tasks: #4EA8DE;
    --text-tasks: #F2F2F2;
    --text:#D9D9D9;
    --background-icons:#808080;
    --button: #1E6F9F;
  }
`

export default GlobalStyle