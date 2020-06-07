import styled from 'styled-components';
// import { base1 } from './colours';

const Title1 = styled.h1`
  font-size: 4.375rem;
  font-family: 'Canela';
  margin: 0;
`;

const Title2 = styled.h1`
  font-size: 3.75rem;
  font-family: 'JostLight';
  margin: 0;
`;

const Text1 = styled.p`
  font-size: 1.25rem;
  font-family: 'JostBook';
  margin: 0;
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

export { Title1, Title2, Text1, LandingImg };
