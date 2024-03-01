import styled from "styled-components"

export const HeaderBox = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 4rem; // 20px 64px

  @media (max-width: 560px) {
   padding: 1.25rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1.3vh; // 20px
    cursor: pointer;

    img {
      width: 5.556vh; // 68px
    }

    h1 {
      background: linear-gradient(109deg, #49c2f2 0%, #5079f2 100%);
      background-clip: text;
      color: transparent;
      font-weight: 800;
      font-size: 2.963vh;
      padding-bottom: 0.35vh;

    @media (max-width: 500px) {
      display: none;
    }
    }

  }
  
  nav {
    display: flex;
    gap: 1.25rem; // 20px
  }

  a {
    position: relative;
    color: #ffffff;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
    transition: ease-in-out .3s;
  }

  a:hover {
    background: linear-gradient(109deg, #5079f2 0%, #49c2f2 100%);
    background-clip: text;
    color: transparent;
  }

  a:active {
    opacity: .7;
  }

  a::after {
    content: "";
    width: 0;
    height: 0.125rem; // 2px
    background: linear-gradient(109deg, #5079f2 0%, #49c2f2 100%);
    position: absolute;
    bottom: 0;
    left: 0;
    transition: width ease-in-out .2s;
  }
  
  a:hover::after {
    width: 100%;
  }
`