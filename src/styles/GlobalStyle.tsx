import { createGlobalStyle } from 'styled-components';

const small = '47.9375rem';
const medium = '48rem';
const large = '75rem';
// const xlarge = '90rem'

// colors
const red = '#f94f4f';
const redHover = '#ff9393';
const bgBlack = '#191921';
const bgBlackHover = '#434356';

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Commissioner', sans-serif;
}

// typography
h1, h2, h3 {
  font-weight: 800;
  letter-spacing: 0;
}

p {
  font-weight: 400;
}

h1 {
  margin-bottom: 0.9375rem;

  @media screen and (max-width: ${small}) {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }

  @media screen and (min-width: ${medium}) {
    font-size: 3.5rem;
    line-height: 3.5rem;
  }

  @media screen and (min-width: ${large}) {
    font-size: 5rem;
    line-height: 5.5rem;
  }
}

h2 {
  font-size: 2rem;
  line-height: 2.5rem;

  @media screen and (min-width: ${large}) {
    font-size: 3.5rem;
    line-height: 4rem;
  }
}

h3 {
  font-size: 0.9375rem;
  line-height: 1.5625rem;

  @media screen and (min-width: ${large}) {
    font-size: 1.25rem;
    line-height: 2rem;
  }
}

p {
  font-size: 0.9375rem;
  line-height: 1.5625rem;
  margin-bottom: 2.5rem;

  @media screen and (min-width: ${large}) {
    font-size: 1.125rem;
    line-height: 2rem;
  }
}

.primary {
  background: ${red};
  
  &:hover {
    background: ${redHover};
  }
}

.secondary {
  background: ${bgBlack};

  &:hover {
    background: ${bgBlackHover}
  }
}
`;

export default GlobalStyle;
