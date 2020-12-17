import {css, Global} from '@emotion/react'
import React, {FC} from 'react'

export const GlobalStyle: FC = () => <Global styles={css`
  @import "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap";
  @import "https://fonts.googleapis.com/icon?family=Material+Icons";

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: unset;
  }

`}/>
