import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 1.25rem 4rem; // 20px 64px

  .react-multi-carousel-list {
    z-index: 8;
    margin-bottom: 2rem;
    height: 34vh;

    & li {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .react-multiple-carousel__arrow {
      background: #00000077;
      border: 1px solid #fff;
    }
  }

  @media (max-width: 720px) {
    padding: 1.25rem;
  }
`;

export const Title = styled.h3`
  width: fit-content;
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 600;
  /* display: flex; */
  margin: 1rem 0 1rem 10px;
  border-bottom: 1px solid #49cafa;
  padding: 0 10px 10px;
`;

export const PosterImage = styled.div`
  background: ${({ bgImage }) => `url(${bgImage}) center/cover`};
  width: 12.5rem; // 200px
  height: 18.125rem; // 290px
  border-radius: 1.25rem; // 10px
  cursor: pointer;
  transform: scale(0.95);
  transition: all ease-in-out 0.4s;
  filter: brightness(0.9);

  &:hover {
    transform: scale(1);
    transition: all ease-in-out 0.4s;
  }

  &.selected {
    filter: brightness(1.1);
    transform: scale(1);
    transition: all ease-in-out 0.4s;
    transform: translateY(-20px);
  }

  @media (max-width: 720px) {
    width: 9rem;
    height: 13rem;
  }
  
  &.selected {
    transform: translateY(-5px);
  }
`;

export const AltImage = styled.img`
  position: absolute;
  text-align: center;
  color: #dddddd;
  padding: 0 30px;
  z-index: -1;
`;
