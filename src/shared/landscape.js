import React from 'react';
import styled from 'styled-components';
import { Smartphone } from 'react-feather';

export const BackDrop = styled.div`
  display: flex;
  position: absolute;
  z-index: 999;
  background: var(--backdrop-bg);
  color: var(--text-primary);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
`

export default function Landscape() {
  return (
    <BackDrop>
      <Smartphone size="48px" />
      <span style={{fontSize: '2rem'}}>Best viewed in Landscape mode</span>
    </BackDrop>
  )
}