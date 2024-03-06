import styled from "styled-components";

export const CopyrightFooter = styled.footer`
  color: #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding-bottom: 4rem;
  
  h5 {
    display: flex;
    gap: 7px;
  }

  h4, h5 {
    font-weight: 300;
    font-size: 0.9rem;
    word-spacing: 1px;

    @media (max-width: 720px) {
      font-size: 0.8rem;
    }
  }  
  
  a {
    font-weight: 500;
    text-decoration: none;
    color: #fff;

    &:hover {
      color: #49c2f2cc;
    }

    &:active {
      opacity: .7;
    }
  }
`