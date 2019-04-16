import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import '../theme/bulma.css';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Application from '../components/Application';
import Promotion from '../components/Promotion';
import Footer from '../components/Footer';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Home"
          description="Welcome to Zeiq Wallet"
          url={`${config.siteUrl}`}
        />
        <Hero />
        <Features />
        <Application />
        <Promotion />
        <Footer />
      </Layout>
    );
  }
}
