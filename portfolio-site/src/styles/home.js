import styled from 'styled-components';

const BGContainer = styled.body`
  width: 100vw;
  height: 100vh;
  background: #db8452;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Container = styled.section`
  display: flex;
  flex-direction: row;
  // margin: 0 10rem 0rem 10rem;
`;

const Title1 = styled.h1`
  font-family: Canela;
  font-style: normal;
  font-weight: normal;
  font-size: 70px;
  line-height: 70px;
  margin-right: 12rem;
  display: flex;
  text-transform: capitalize;
  color: #ffffff;
`;

const Title2 = styled.h1`
  font-family: Canela;
  font-style: normal;
  font-weight: normal;
  font-size: 70px;
  line-height: 70px;
  display: flex;
  align-items: center;
  text-transform: capitalize;

  color: #f9f3f2;
`;

const Title3 = styled.h1`
  font-family: JostLight;
  font-style: normal;
  font-weight: 300;
  font-size: 60px;
  line-height: 87px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
`;

const Text1 = styled.p`
  font-family: JostBook;
  font-style: normal;
  font-weight: normal;
  width: 500px;
  font-size: 20px;
  line-height: 29px;
  text-align: right;
  margin: 0 1rem 0 0;
  color: #ffffff;
`;

//FIX MEDIA QUERIES
const LandingImg = styled.img`
  width: 365px;
  height: 453px;
  margin-right: 30%;
  object-fit: cover;
  object-position: 40% 0;
`;

export { Title1, Title2, Title3, Text1, LandingImg, BGContainer, Container };
