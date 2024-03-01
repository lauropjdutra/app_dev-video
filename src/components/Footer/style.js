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
    font-weight: 400;
    font-size: 0.9rem;
  }  
  
  a {
    font-weight: bold;
    text-decoration: none;
    color: #5079f2;

    &:hover {
      color: #49f2fa;
    }
  }
`