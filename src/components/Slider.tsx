import styled from 'styled-components';

const Slider = (props: {
  imgUrl: string;
  imgLabel: string;
  date: string;
  title: string;
}) => {
  const image = props.imgUrl;

  const SliderImg = styled.div`
    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 25.25rem;
    width: 100%;
    position: relative;
  `;

  return (
    <StyledSlider>
      <SliderImg>
        <InnerDiv>
          <h3>{props.imgLabel}</h3>
          <p>{props.date}</p>
        </InnerDiv>
      </SliderImg>
      <SliderTitle>
        <h2>{props.title}</h2>
      </SliderTitle>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  color: #fff;
  background: #191921;
`;

const InnerDiv = styled.div`
  padding: 2.25rem 2rem;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 7rem;
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, #000000 100%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const SliderTitle = styled.div`
  padding: 4rem 1.5rem;
`;

export default Slider;
