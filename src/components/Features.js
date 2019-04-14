import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  h2 {
    margin-top: 1.5rem;
    font-size: 1.25rem;
    padding: 0rem 35rem;
    @media only screen and (max-width: 768px) {
      padding: 0;
    }
  }
`;

const Features = () => (
  <Section className="hero is-medium">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title has-text-weight-bold">
          Introducing Secure Wallet
        </h1>
        <h2 className="has-text-weight-semibold">
          The easiest way store and use crypto around the world with
          Decetralised wallet.
        </h2>
      </div>
    </div>
  </Section>
);

export default Features;
