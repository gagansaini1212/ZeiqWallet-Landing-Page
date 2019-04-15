import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Section = styled.section`
  h2 {
    margin-top: 1.5rem;
    font-size: 1.25rem;
    padding: 0rem 35rem;
    @media only screen and (max-width: 768px) {
      padding: 0;
    }
  }
  .column {
    display: flex;
    justify-content: space-evenly;
    margin-top: 2rem;
    @media only screen and (max-width: 768px) {
      display: block;
      justify-content: space-evenly;
      margin-top: 2rem;
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
    <div className="columns">
      <div className="column">
        <Card
          title="Keep your funds secure"
          description="You have full control over your wallet holding private keys to access
          wallet. With improved fund management and transaction signature you
          have no fear to loosing crypto funds."
        />
      </div>
      <div className="column">
        <Card
          title="Multi Chain Wallets"
          description="Create and import multiple chain wallets by using the same private keys or memoric passphrase."
        />
      </div>
    </div>
    <div className="columns">
      <div className="column">
        <Card
          title="Awesome UI Experience"
          description="Smooth flow and easy to understand UI experience helps newcomers to deal in crypto with comfort."
        />
      </div>
      <div className="column">
        <Card
          title="Token Management"
          description="Search or add custom tokens. Get detailed information about your tokens in one step."
        />
      </div>
    </div>
  </Section>
);

export default Features;
