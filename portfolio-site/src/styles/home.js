import styled from 'styled-components';
import { base1 } from './colours';

const Title1 = styled.h1`
  font-size: 4.375rem;
  font-family: 'Canela';
  margin: 0;
  colour: '#FFFFFF';
`;

const Img = `
max-width: 50vw;
`;

//FIX MEDIA QUERIES
const LandingImg = styled.img`
  ${Img}
  max-width: 50rem;
  @media (max-width: 414px) {
    max-width: 20rem;
  }
`;

export { Title1, LandingImg };
