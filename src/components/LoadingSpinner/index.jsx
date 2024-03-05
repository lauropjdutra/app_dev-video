import React from 'react';
import { LoadingContainer } from "./style"

export const LoadingSpinner = () => (
  <LoadingContainer>
    <div>
      <img src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif" alt="Carregando" title="Carregando" />
      <span className="loading-text">Carregando...</span>
    </div>
  </LoadingContainer>
);