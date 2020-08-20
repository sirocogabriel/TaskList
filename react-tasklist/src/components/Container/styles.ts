import styled from 'styled-components';
import { shade, lighten } from 'polished';

export const Container = styled.div`
  height: 90vh;
  width: 800px;
  margin: auto;
  margin-top: 4vh;

  border-style: solid;
  border-color: #cc7300;
  border-width: 3px;
  border-radius: 25px;

  display: flex;
  align-items: center;
  flex-direction: column;

  overflow: auto;
  position: relative;

  form {
    display: flex;
    align-items: center;

    h1 {
      margin-top: 30px;
      margin-bottom: 20px;
      font-family: Arial;
      color: ${shade(0.2, '#ff9000')};
    }

    input {
      background-color: ${lighten(0.2, '#ff9000')};
      border-radius: 12px;

      width: 350px;
      height: 30px;

      margin-top: 10px;
      margin-left: 10px;
      padding-left: 10px;

      font-family: Arial, Helvetica, sans-serif;
      color: ${lighten(0.2, '#000')};
    }

    button {
      width: 30px;
      height: 30px;
      background-color: #ff9000;
      border-radius: 50%;

      margin-top: 10px;
      margin-left: 10px;
    }
  }
`;
