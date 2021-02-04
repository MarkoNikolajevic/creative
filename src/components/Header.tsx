import styled from 'styled-components';
import Button from './Button';

const Header = () => {
  return (
    <StyledHeader>
      <HeaderImg />
      <HeaderText>
        <h1>Branding & website design agency</h1>
        <p>
          We specialize in visual storytelling by creating cohesive brand and
          website design solutions for small businesses, giving lasting
          impressions to audiences in a digital world.
        </p>
        <Button primary label='Learn More' />
      </HeaderText>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  color: #000;
`;

const HeaderImg = styled.div`
  background-image: url('/assets/mobile/image-hero.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 12.5rem;
`;

const HeaderText = styled.div`
  padding: 3.5rem 1.5rem 6rem;
`;

export default Header;
