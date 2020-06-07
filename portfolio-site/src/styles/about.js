import styled from 'styled-components';
import { base1, black } from './colours';

const BGContainer = styled.body`
  position: relative;
  width: 1440px;
  height: 1024px;
  background: #e9ece6;
`;

const Title1 = styled.h1`
  position: absolute;
  width: 182px;
  height: 70px;
  left: 166px;
  top: 266px;

  font-family: Canela;
  font-style: normal;
  font-weight: normal;
  font-size: 70px;
  line-height: 70px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-transform: capitalize;

  color: #000000;
`;

const Text1 = styled.p`
  position: absolute;
  width: 632px;
  height: 493px;
  left: 166px;
  top: 376px;

  font-family: JostBook;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 29px;

  color: #000000;
`;

const Button = styled.button`
  position: absolute;
  width: 177px;
  height: 53px;
  left: 1053px;
  top: 814px;
  background: ${base1};
  color: ${black};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  font-family: 'JostBook';
`;

export { Title1, Text1, Button, BGContainer };
