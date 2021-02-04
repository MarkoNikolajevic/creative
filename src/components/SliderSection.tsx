import styled from 'styled-components';
import Slider from './Slider';

const SliderSection = () => {
  return (
    <StyledSection>
      <Slider
        imgUrl='/assets/mobile/image-slide-1.jpg'
        imgLabel='Lean Product Roadmap'
        date='2019 project'
        title='Brand naming & guidelines'
      />
    </StyledSection>
  );
};

const StyledSection = styled.section``;

export default SliderSection;
