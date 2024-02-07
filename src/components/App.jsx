import React from 'react';
import NavBar from './ui/NavBar';

export default function App({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
