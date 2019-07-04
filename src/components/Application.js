import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  h2 {
    margin-top: 1.5rem;
    font-size: 1.25rem;
    /* padding: 0rem 35rem; */
    @media only screen and (max-width: 768px) {
      padding: 0;
    }
  }
`;

const Image = styled.img`
  height: 32rem;
  width: 16rem;
  margin-top: 5rem;
`;

const Application = () => (
  <Section className="section hero is-medium">
    <div className="hero-body">
      <div className="columns">
        <div className="column is-12">
          <h1 className="title has-text-weight-bold has-text-centered mt-5 ">
            Track every transaction
          </h1>
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <h2 className="has-text-weight-semibold has-text-centered">
                Spending summaries, transaction receipts, and instant
                notifications. The Zeiq Wallet app makes it easy to manage your
                spend on the go.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container has-text-centered">
        <Image src="/images/phone.png" alt="Phone" />
      </div>
    </div>
  </Section>
);

export default Application;
