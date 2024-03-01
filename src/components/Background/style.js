import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  background: linear-gradient(90deg, rgba(10, 12, 16, 0.7) 15%, rgba(10, 12, 16, 0) 50%, rgba(10, 12, 16, 0.3) 100%), ${({ bgImage }) => `url(${bgImage}) center/cover no-repeat`};
  
  @media (max-width: 720px) {
    background: linear-gradient(0deg, rgba(10, 12, 16, 0.8) 40%, rgba(10, 12, 16, 0.3) 55%, rgba(10, 12, 16, 0) 70%), ${({ bgImage }) => `url(${bgImage}) center/cover no-repeat`};
  }
  `

export const ContainerGradient = styled.div`
  background: linear-gradient(0deg, #111111 60%, #11111199 68%, transparent 85%, #00000099 100%);

  @media (max-width: 720px) {
    background: linear-gradient(0deg, #111111 55%, #11111199 70%, transparent 85%, #00000099 100%);
  }
`

export const ContainerInner = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`