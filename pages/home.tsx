import * as React from 'react';
import Body from '../components/body';
import NavBar from '../components/navbar';

export default function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <Body />
    </React.Fragment>
  );
}
