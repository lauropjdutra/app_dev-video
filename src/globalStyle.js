import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Plus Jakarta Sans", sans-serif;
    scroll-behavior: smooth;
    
    ::-webkit-scrollbar {
      width: 0.4rem;
    }
    
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(0deg, #5079f2 0%, #49c2f2 100%);
      border-radius: 0.5rem;
    }
    
    ::-webkit-scrollbar-track {
      background: #111111; 
    }

    body {
      background: #111111;
    }
}
`
