import styled from 'styled-components';

const Button = (props: { label: string; primary: boolean }) => {
  return (
    <StyledButton className={props.primary ? 'primary' : 'secondary'}>
      {props.label}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  min-width: 8.75rem;
  height: 4.5rem;
  padding: 1.5rem;
  color: #fff;
  font-size: 1.125rem;
  border: none;
  font-weight: 800;
  cursor: pointer;
  transition: all 300ms ease-in-out;
`;

export default Button;
