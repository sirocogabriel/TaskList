import styled, { keyframes } from 'styled-components';
import { shade, lighten } from 'polished';

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px)
  }
  to {
    opacity: 1
    transform: translateY(0)
  }
`;

export const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  padding-left: 450px;
  padding-right: 450px;
  background-color: #cc7300;
  align-items: center;

  animation: ${appearFromTop} 1s;

  a {
    color: #f4ede8;
    display: flex;
    padding: 24px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }

  button {
    background-color: ${shade(0.2, '#cc7300')};
    display: flex;
    padding: 14px;
    border-radius: 50%;
    text-decoration: none;
    transition: color 0.2s;

    #icon {
      color: black;
    }

    &:hover {
      #icon {
        color: ${shade(0.2, '#cc7300')};
      }
      background-color: ${lighten(0.2, '#cc7300')};
    }
  }
`;
