import styled from 'styled-components'

export const LoadingContainer = styled.div`
  background: #eeeeee;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 100vh;
    
      img {
        width: 5rem;
      }

      span {
        font-size: 16px;
        font-weight: 600;
        color: #5179f2;
      }
`;