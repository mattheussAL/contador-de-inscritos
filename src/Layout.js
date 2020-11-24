import React from 'react';
import { withRouter } from 'react-router';

import Header from './components/Header';
import Footer from './components/Footer';

function Body(props) {
  return (
    <>
      <Header />
        <main className="app">
          {props.children}
        </main>
      <Footer />
    </>
  );
};

export default withRouter(Body);