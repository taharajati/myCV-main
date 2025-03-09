import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import ErrorBoundary from './components/common/ErrorBoundary';
import Loading from './components/common/Loading';
import Nav from './components/nav/Nav';

import './style.css';
import './responsive.css';

// Lazy load components
const Header = lazy(() => import('./components/header/Header'));
const About = lazy(() => import('./components/about/About'));
const Skill = lazy(() => import('./components/skill/Skill'));
const Experience = lazy(() => import('./components/experience/Experience'));
const Contact = lazy(() => import('./components/contact/Contact'));
const Footer = lazy(() => import('./components/footer/Footer'));

const App = () => {
  return (
    <>
      <Helmet>
        <title>Taha Rajati - Frontend Developer</title>
        <meta name="description" content="Portfolio website of Taha Rajati, Frontend Developer" />
        <meta name="keywords" content="frontend, developer, react, javascript, portfolio" />
      </Helmet>

      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Header />
          <Nav />
          <About />
          <Skill />
          <Experience />
          <Contact />
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;