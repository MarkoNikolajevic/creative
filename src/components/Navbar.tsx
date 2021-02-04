import styled from 'styled-components';
import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
  return (
    <StyledNav>
      <Logo />
      <HamburgerMenu />
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  padding: 2.5rem 1.5rem;
`;

export default Navbar;
