import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Body from './components/body';
import NavBar from './components/navbar';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <NavBar />
    <Body />
  </StrictMode>
);
