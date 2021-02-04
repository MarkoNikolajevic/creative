import styled from 'styled-components';
import ButtonUnderline from './ButtonUnderline';

const DesignStrategicSection = () => {
  return (
    <StyledSection>
      <SectionImg />
      <SectionText>
        <h2>
          <span>Design</span> is strategic.
        </h2>
        <p>
          A well-crafted design strategy consistently produces desired outcomes
          and brand awareness. We are firm believers that success lies in
          creative collaboration with our clients.
        </p>
        <ButtonUnderline />
      </SectionText>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  background: #191921;
  color: #fff;
`;

const SectionImg = styled.div`
  background-image: url('/assets/mobile/image-strategic.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 12.5rem;
`;

const SectionText = styled.div`
  padding: 3.5rem 1.5rem 6rem;
  position: relative;

  h2 {
    margin-bottom: 1.5rem;

    span {
      color: #f94f4f;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 1.5rem;
    width: 4rem;
    height: 30px;
    background: url('../assets/icons/bg-pattern-wave-red.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default DesignStrategicSection;
