import { useState } from 'react';
import styled from 'styled-components';
import { Slides } from './Slides';
import Slider from './Slider';

const SliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideArrLen = Slides.length;

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideArrLen - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideArrLen - 1 ? 0 : currentSlide + 1);
  };

  return (
    <StyledSection>
      {Slides.map((slide, index) => {
        return (
          <div className={index === currentSlide ? 'active' : ''}>
            {index === currentSlide && (
              <Slider
                key={index}
                title={slide.title}
                imgLabel={slide.imgLabel}
                imgUrl={slide.imgMobileUrl}
                date={slide.date}
              />
            )}
          </div>
        );
      })}
      <StyledButton onClick={prevSlide}>Prev</StyledButton>
      <StyledButton onClick={nextSlide}>Next</StyledButton>
    </StyledSection>
  );
};

const StyledSection = styled.section``;

const StyledButton = styled.button`
  background: transparent;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid #f94f4f;
`;

export default SliderSection;
