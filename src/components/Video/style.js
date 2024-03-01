import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #15151599;
  backdrop-filter: blur(1rem);
  z-index: 9;

  vm-player {
    width: 150vh;
    max-width: 1800px;
    box-shadow: 0px 0px 25px #000;
  }
`

export const Button = styled.button`
  position: absolute;
  right: 1.5rem; // 10px
  top: 1.5rem; // 10px
  width: 5.625rem; // 90px
  height: 2.625rem; // 42px
  border-radius: 0.75rem; // 12px
  font-size: 1rem;
  line-height: 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3125rem; // 5px
  background: none;
  border: 2px solid #ffffff;
  color: #ffffff;
  opacity: .6;
  cursor: pointer;
  transition: ease-in-out .2s;

  &:hover {
    opacity: 1;
  }
`