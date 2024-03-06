import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  background: linear-gradient(90deg, rgba(10, 12, 16, 0.7) 15%, rgba(10, 12, 16, 0) 50%, rgba(10, 12, 16, 0.3) 100%), ${({ bgImage }) => `url(${bgImage}) center/cover no-repeat`};
  
  @media (max-width: 720px) {
    background: linear-gradient(0deg, rgba(10, 12, 16, 0.8) 40%, rgba(10, 12, 16, 0.3) 55%, rgba(10, 12, 16, 0) 70%), ${({ bgImage }) => `url(${bgImage}) center/cover no-repeat`};
  }
  
  @media (min-width: 2000px) {
    background: linear-gradient(0deg, rgba(10, 12, 16, 0.8) 40%, rgba(10, 12, 16, 0.3) 55%, rgba(10, 12, 16, 0) 70%), ${({ bgImage }) => `url(${bgImage}) cover no-repeat`};
    background-position-y: -200px;
  }
  `

export const ContainerGradient = styled.div`
  background: linear-gradient(0deg, #000011ee 30%, #000001 60%, #00000099 68%, transparent 85%, #00000099 100%);

  @media (max-width: 720px) {
    background: linear-gradient(0deg, #000011ee 30%, #000001 55%, #00000099 70%, transparent 85%, #00000099 100%);
  }
`

export const ContainerInner = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`