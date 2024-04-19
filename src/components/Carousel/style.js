import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 1.25rem 4rem; // 20px 64px

  .react-multi-carousel-list {
    z-index: 8;
    margin-bottom: 2rem;
    height: 34vh;

    @media (max-width: 720px) {
      height: 22vh;
      margin: 0.5rem 0 2rem;
    }

    & li {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .react-multiple-carousel__arrow {
      background: #00000077;
      border: 1px solid #fff;
    }

    .react-multiple-carousel__arrow--right {
      right: 1.5%;
    }

    .react-multiple-carousel__arrow--left {
      left: 1.5%;
    }
  }

  @media (max-width: 720px) {
    padding: 1.5rem 1rem 1rem;
  }
`;

export const Title = styled.h3`
  width: fit-content;
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1rem 0 0 10px;
  border-bottom: 1px solid #49cafa;
  padding: 0 10px 10px;

  @media (max-width: 720px) {
    font-size: 1rem;
    padding: 0 5px 5px;
    margin: 1rem 0 0 10px;
  }
`;

export const PosterImage = styled.div`
  background: ${({ bgImage }) => `url(${bgImage}) center/cover`};
  width: 12.5rem; // 200px
  height: 18.125rem; // 290px
  border-radius: 1.25rem; // 10px
  cursor: pointer;
  transform: scale(0.95);
  transition: all ease-in-out 0.2s;
  filter: brightness(0.8);

  &:hover {
    transform: scale(1);
    transition: all ease-in-out 0.2s;
  }

  &.selected {
    filter: brightness(1.1);
    transform: scale(1);
    transition: all ease-in-out 0.2s;
    transform: translateY(-20px);
  }

  @media (max-width: 720px) {
    width: 32vw;
    height: 42vw;
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
  font-size: 12px;
  z-index: -1;
`;