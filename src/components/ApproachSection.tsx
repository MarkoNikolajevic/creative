import styled from 'styled-components';
import Approach from './Approach';

const ApproachSection = () => {
  return (
    <StyledSection>
      <h2>Our approach for creating a winning brand</h2>
      <Approach
        number='01'
        title='Brand strategy'
        description='Brand strategy is critical for long-term success. Outshining competitors and capturing the
          target audience are key.'
      />
      <Approach
        number='02'
        title='Brand design'
        description='Keeping the brand design unique and meaningful helps in communicating the brand’s timeless 
          value effectively.'
      />
      <Approach
        number='03'
        title='Web design'
        description='A beautifully crafted website is the best tool for brand awareness, and ultimately results 
          in increased revenues.'
      />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 6rem 1.5rem;
  background: #f94f4f;
  color: #fff;
`;

export default ApproachSection;
