import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: #ff9000;
  height: 80px;
  width: 600px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #312e38;
  font-weight: 500;
  transition: background-color 0.2s;

  margin-top: 12px;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }

  h2 {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
  }
  p {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
`;
