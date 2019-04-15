import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import '../theme/bulma.css';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Application from '../components/Application';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Home"
          description="Welcome to GatsbyJs v1"
          url={`${config.siteUrl}`}
        />
        <Hero />
        <Features />
        <Application />
      </Layout>
    );
  }
}
