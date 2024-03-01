import styled from "styled-components"

export const Container = styled.div`
  color: #ffffff;
  height: 21rem;
  width: 30rem; // 480px
  padding-right: 1.25rem; //  20px
  margin: 14vh 0 1.25rem 4rem; // 151px 0 20px 64px
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1.5rem;

  div {
    display: flex;
    gap: 1rem;

    a {
      text-decoration: none;
    }
  }

  @media (max-width: 720px) {
   width: 100%;
   margin: 17rem 0 0 0;
   padding: 0 2rem;
   gap: 0.8rem;
   align-items: center;
  }
`
export const Title = styled.h2`
  img {
    width: 25rem;

    @media (max-width: 560px) {
      width: 15rem;
    }
  }
`

export const Description = styled.p`
  line-height: 1.425rem; // 22.8px
  font-size: 1rem;
  opacity: .8;

  @media (max-width: 720px) {
    opacity: .9;
    font-size: 0.9rem;
    text-align: center;
  }
`

export const Button = styled.button`
  width: 11rem; // 194px
  height: 3.5rem; // 56px
  margin-top: 0.5rem;
  background: linear-gradient(109deg, #5079f2 0%, #49c2f2 100%);
  border-radius: 2.5rem; // 40px
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem; // 8px
  font-size: 1.125rem; // 18px
  font-weight: 600;
  line-height: 1rem;
  color: #ffffff;
  transition: all ease-in-out .3s;
  cursor: pointer;

  &:hover {
    color: #000000;
    filter: brightness(1.5);
    scale: 0.99;
  }

  &:active {
    opacity: .7;
  }

  @media (max-width: 560px) {
   width: 8.5rem;
   height: 3rem;
   font-size: 1rem;
  }
`

export const ButtonTrailer = styled.button`
  width: 11rem; // 194px
  height: 3.5rem; // 56px
  margin-top: 0.5rem;
  background: none;
  border-radius: 2.5rem; // 40px
  /* border: none; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  font-size: 1rem; // 18px
  font-weight: 500;
  line-height: 1rem;
  /* background-clip: text; */
  border: 1px solid #eeeeee;
  color: #eeeeee;
  transition: opacity ease-in-out .2s;
  cursor: pointer;
  opacity: .8;

  &:hover {
    opacity: 1;
  }

  &:active {
    opacity: .7;
  }

  @media (max-width: 560px) {
   width: 8.5rem;
   height: 3rem;
   font-size: 0.9rem;
  }
`