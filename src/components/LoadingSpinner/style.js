// import styled from 'styled-components'

// export const LoadingContainer = styled.div`
//   background: #eeeeee;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;

//       img {
//         width: 5rem;
//       }

//       span {
//         font-size: 16px;
//         font-weight: 600;
//         color: #5179f2;
//       }
// `;

import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const zoomAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.5);
  }
`;

const opacityAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    filter: brightness(1.3);
  }
`;

export const LoadingContainer = styled.div`
  background: radial-gradient(#badaff 0%, #73b4ff 100%);
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 100vh;
  animation: ${opacityAnimation} 1s ease-in-out;
  animation-delay: 1.75s;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    animation: ${zoomAnimation} 1s ease-in-out;
    animation-delay: 1.75s;
  }

  img {
    width: 5rem;
    animation: ${spinAnimation} 850ms linear infinite;
  }

  span {
    font-size: 16px;
    font-weight: 600;
    color: #5179f2;
  }
`;
