import React from 'react';
import styles from './styles.module.scss';
import Header from '../Header/Header'
import About from '../About/About';
import Reviews from '../Reviews/Reviews';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <About />
      <Reviews />
      <Footer />
    </div>
  );
};

export default App;
