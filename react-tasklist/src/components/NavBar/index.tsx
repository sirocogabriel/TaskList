import React from 'react';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const NavBar: React.FC = () => {
  return (
    <Container>
      <Link to="/home">Home</Link>
      <Link to="/indicators">Indicators</Link>
      <Link to="/transactions">Transactions</Link>
      <Link to="/account">Account</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/">SignIn</Link>
      <Link to="/signup">SignUp</Link>
      <Link to="/signout">SignOut</Link>
      <button name="User">
        <FiUser id="icon" size={20} />
      </button>
    </Container>
  );
};

export default NavBar;
