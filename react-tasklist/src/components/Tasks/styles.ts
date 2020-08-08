import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: #ff9000;
  height: 100px;
  width: 600px;
  border-radius: 10px;

  color: #312e38;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
