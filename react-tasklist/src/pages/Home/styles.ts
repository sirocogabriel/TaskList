import styled from 'styled-components';
import { shade } from 'polished';

export const NavBar = styled.nav`
  a {
    color: #f4ede8;
    display: flex;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;
export const Container = styled.div``;
