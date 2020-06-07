import styled from 'styled-components';
import { black, white } from './colours';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  postiton: fixed;
  top: 0;
`;

const HomeLink = styled(Link)`
  font-family: 'Canela';
  font-size: 1.375rem;
  color: ${black};
  text-decoraction: none;
`;

const HomeLinkHome = styled(Link)`
  font-family: 'Canela';
  font-size: 2.8125rem;
  color: ${white};
  text-decoraction: none;
`;

const ListItemHome = styled(Link)`
  font-size: 1.375rem;
  color: ${white};
  text-decoraction: none;
`;

const ListItem = styled(Link)`
  font-size: 1.375rem;
  color: ${black};
  text-decoraction: none;
`;

export { Nav, HomeLink, HomeLinkHome, ListItem, ListItemHome };
