import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  padding: 50px;
`;

const Font = styled.i`
  color: lightgreen;
  font-size: 1.2rem;
  /* margin-left: 50px; */
`;

const Text = styled.span`
  line-height: 2.5rem;
`;

// const Line = styled.div`
//     height: 100%;
//     background-color: white;
//     width: 10px;
// `;

const Container = styled.div`
  padding-left: 30px;
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

const Footer = () => (
  <div className="container hero is-medium">
    <div className="columns">
      <div className="column is-5 is-offset-1 has-background-info">
        <List>
          <li>
            <Font className="fas fa-check" /> &nbsp; &nbsp;
            <Text className="is-size-4 has-text-weight-bold has-text-white">
              Easiest way to do crypto transactions.
            </Text>
          </li>
          <li>
            <Font className="fas fa-check" /> &nbsp; &nbsp;
            <Text className="is-size-4 has-text-weight-bold has-text-white">
              Instant payment and transactions.
            </Text>
          </li>
          <li>
            <Font className="fas fa-check" /> &nbsp; &nbsp;
            <Text className="is-size-4 has-text-weight-bold has-text-white">
              Track your spend through zeiq wallet.
            </Text>
          </li>
          <li>
            <Font className="fas fa-check" /> &nbsp; &nbsp;
            <Text className="is-size-4 has-text-weight-bold has-text-white">
              Easiest choose which crypto you spend.
            </Text>
          </li>
          <li>
            <Font className="fas fa-check" /> &nbsp; &nbsp;
            <Text className="is-size-4 has-text-weight-bold has-text-white">
              World class security to keep your crypto safe.
            </Text>
          </li>
        </List>
      </div>
      <div className="column is-5 has-background-info">
        <Container className="container">
          {/* <Line /> */}
          <h1 className="has-text-weight-bold has-text-white">
            Get the app today
          </h1>
          <h5 className="has-text-weight-bold is-size-5 has-text-grey-lighter">
            Download the Zeiq Wallet app to get started.
          </h5>
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
    </div>
  </div>
);

export default Footer;
