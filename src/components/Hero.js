import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  h1 {
    font-size: 3.25rem;
    margin-top: 3.5rem;
  }
  h6 {
    margin-top: 4rem;
    font-size: 1.2rem;
  }
  img {
    padding: 1rem;
    margin-top: 2rem;
    @media only screen and (max-width: 768px) {
      padding: 0;
      margin-top: 1rem;
    }
  }
`;

const P = styled.p`
  margin-top: 1rem;
  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Hero = () => (
  <section className="hero has-text-centered is-medium">
    <div className="hero-body">
      <Container className="container">
        <h1 className="title">
          <p className="has-text-weight-bold">Zeiq Wallet</p>
          <P className="has-text-weight-semibold">
            Decentralised Crypto Wallet
          </P>
        </h1>
        <h6 className="has-text-weight-bold">
          Download the app to get started.
        </h6>
        <div>
          <a className="" href="#">
            <img src="/images/logo/appstore.svg" alt="App Store" />
          </a>
          <a className="" href="#">
            <img src="/images/logo/googleplay.png" alt="Play Store" />
          </a>
        </div>
      </Container>
    </div>
  </section>
);

export default Hero;
