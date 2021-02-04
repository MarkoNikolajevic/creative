import styled from 'styled-components';
import logo from '../assets/icons/logo.svg';

const Logo = () => {
  return (
    <StyledLogo>
      <img src={logo} alt='Creative studio logo' />
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  margin-right: auto;
`;

export default Logo;
