import styled from 'styled-components';

const ButtonUnderline = () => {
  return <StyleBtnUnderline>Schedule a Call</StyleBtnUnderline>;
};

const StyleBtnUnderline = styled.a`
  text-decoration: none;
  color: #f94f4f;
  font-size: 1.125rem;
  font-weight: 800;
  position: relative;

  &::after {
    content: '';
    height: 2px;
    width: 100%;
    background: #f94f4f;
    bottom: -0.5rem;
    left: 0;
    position: absolute;
  }
`;

export default ButtonUnderline;
