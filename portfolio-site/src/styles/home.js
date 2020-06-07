import styled from 'styled-components';

const BGContainer = styled.body`
  position: relative;
  width: 1440px;
  height: 1024px;
  background: #db8452;
`;

const Title1 = styled.h1`
  position: absolute;
  width: 362px;
  height: 70px;
  left: 166px;
  top: 266px;

  font-family: Canela;
  font-style: normal;
  font-weight: normal;
  font-size: 70px;
  line-height: 70px;

  display: flex;
  align-items: center;
  text-transform: capitalize;

  color: #ffffff;
`;

const Title2 = styled.h1`
  position: absolute;
  width: 278px;
  height: 70px;
  left: 999px;
  top: 761px;

  font-family: Canela;
  font-style: normal;
  font-weight: normal;
  font-size: 70px;
  line-height: 70px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-transform: capitalize;

  color: #f9f3f2;
`;

const Title3 = styled.h1`
  position: absolute;
  width: 254px;
  height: 87px;
  left: 999px;
  top: 811px;

  font-family: JostLight;
  font-style: normal;
  font-weight: 300;
  font-size: 60px;
  line-height: 87px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
`;

const Text1 = styled.p`
  position: absolute;
  width: 231px;
  height: 261px;
  left: 291px;
  top: 364px;

  font-family: JostBook;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 29px;
  text-align: right;

  color: #ffffff;
`;

//FIX MEDIA QUERIES
const LandingImg = styled.img`
  position: absolute;
  width: 365px;
  height: 453px;
  left: 539px;
  top: 370px;
  object-fit: cover;
  object-position: 40% 0;
`;

export { Title1, Title2, Title3, Text1, LandingImg, BGContainer };
