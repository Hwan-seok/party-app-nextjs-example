import { css } from '@emotion/core';

export default css`
  html {
    @font-face {
      font-family: 'NotoSansKR';
      font-weight: 100;
      src: url('/static/fonts/Noto_Sans_KR/NotoSansKR-Thin.otf')
        format('opentype');
    }
    @font-face {
      font-family: 'NotoSansKR';
      font-weight: 300;
      src: url('/static/fonts/Noto_Sans_KR/NotoSansKR-Light.otf')
        format('opentype');
    }
    @font-face {
      font-family: 'NotoSansKR';
      font-weight: 400;
      src: url('/static/fonts/Noto_Sans_KR/NotoSansKR-Regular.otf')
        format('opentype');
    }
    @font-face {
      font-family: 'NotoSansKR';
      font-weight: 500;
      src: url('/static/fonts/Noto_Sans_KR/NotoSansKR-Medium.otf')
        format('opentype');
    }
    @font-face {
      font-family: 'NotoSansKR';
      font-weight: 700;
      src: url('/static/fonts/Noto_Sans_KR/NotoSansKR-Bold.otf')
        format('opentype');
    }
    @font-face {
      font-family: 'NotoSansKR';
      font-weight: 900;
      src: url('/static/fonts/Noto_Sans_KR/NotoSansKR-Black.otf')
        format('opentype');
    }
  }
  body {
    margin: 0px;
    overflow-x: hidden;
    font-family: 'NotoSansKR', sans-serif, Arial, Helvetica;
    font-size: 16px;

    a {
      text-decoration: none;
      color: inherit;
    }
    p {
      margin: 0;
    }

    pre {
      margin: 0;
      font-family: 'NotoSansKR', sans-serif, Arial, Helvetica;
    }
  }
`;
