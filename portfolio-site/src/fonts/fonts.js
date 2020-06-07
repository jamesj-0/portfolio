import { createGlobalStyle } from 'styled-components';

import CanelaRegular from './Canela-Regular.woff';
import JostLight from './Jost-300-Light.woff';
import JostBook from './Jost-400-Book.woff';
import JostMedium from './Jost-500-Medium.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'Canela';
        src: local('Canela'), local('Canela'),
        url(${CanelaRegular}) format('woff'),
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'JostLight';
        src: local('JostLight'), local('JostLight'),
        url(${JostLight}) format('woff'),
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'JostBook';
        src: local('JostBook'), local('JostBook'),
        url(${JostBook}) format('woff'),
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'JostMedium';
        src: local('JostMedium'), local('JostMedium'),
        url(${JostMedium}) format('woff'),
        font-weight: 400;
        font-style: normal;
    }
`;
