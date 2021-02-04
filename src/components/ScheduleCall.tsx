import styled from 'styled-components';
import Button from './Button';

const ScheduleCall = () => {
  return (
    <StyledSection>
      <h2>Let's build something great together.</h2>
      <Button label='Schedule a Call' primary />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 6.5rem 1.5rem;

  h2 {
    margin-bottom: 3rem;
  }
`;

export default ScheduleCall;
