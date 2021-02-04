import styled from 'styled-components';
import menu from '../assets/icons/icon-hamburger.svg';
// import close from '../assets/icons/icon-cross.svg';

const HamburgerMenu = () => {
  return (
    <StyledHamburger>
      <img src={menu} alt='hamburger menu icon' />
    </StyledHamburger>
  );
};

const StyledHamburger = styled.div``;

export default HamburgerMenu;
