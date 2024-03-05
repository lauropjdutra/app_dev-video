import { Container, ContainerGradient, ContainerInner } from "./style";

export const Background = ({ imageBanner, children }) => {
  return (
      <Container bgImage={imageBanner}>
        <ContainerGradient>
          <ContainerInner>{children}</ContainerInner>
        </ContainerGradient>
      </Container>
  );
};