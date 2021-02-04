import React from 'react';
import styled from 'styled-components';

const Approach = (props: {
  title: string;
  number: string;
  description: string;
}) => {
  return (
    <StyledApproach>
      <ApproachNumber>{props.number}</ApproachNumber>
      <ApproachInfo>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </ApproachInfo>
    </StyledApproach>
  );
};

const StyledApproach = styled.div`
  position: relative;
  margin-top: 3rem;
  margin-bottom: 2.5rem;
  padding-top: calc(50% - 88px - 35.5px);
`;

const ApproachNumber = styled.div`
  left: 0%;
  right: 71.87%;
  top: calc(50% - 88px / 2 - 35.5px);
  position: absolute;
  font-size: 5rem;
  line-height: 5.5rem;
  font-weight: 800;
  opacity: 0.25;
`;

const ApproachInfo = styled.div`
  margin-left: 1rem;

  p {
    margin-top: 1.25rem;
  }
`;

export default Approach;
