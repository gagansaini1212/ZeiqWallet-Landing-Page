import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  padding: 50px;
`;

const Font = styled.i`
  color: yellow;
  font-size: 1.2rem;
`;

const Box = styled.div`
  border-right-style: solid;
  border-right-color: black;
  border-right-width: 3px;
  text-align: left;
  @media only screen and (max-width: 768px){
    text-align: left;
    border-bottom-style: solid;
    border-bottom-color: black;
    border-bottom-width: 3px;
    border-right-style: none;
  }
`;

const Text = styled.span`
  line-height: 2.5rem;
  font-size: 19px;
  @media only screen and (max-width: 768px){
    line-height: 2.5rem;
  }
`;

const Container = styled.div`
  padding-left: 30px;
  h1 {
    font-size: 3.25rem;
    margin-top: 3.5rem;
    @media only screen and (max-width: 768px){
    font-size: 2.5rem;
    text-align: center;
    }
  }
  h5 {
    margin-top: 2rem;
    font-size: 1.2rem;
    @media only screen and (max-width: 768px){
    font-size: 2.5rem;
    text-align: center;
    }
  }
  img {
    padding: 1rem;
    margin-top: 2rem;
    @media only screen and (max-width: 768px) {
      padding: 0;
      margin-top: 2rem;
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
    }
  }
  @media only screen and (max-width: 768px){
    padding-left: 0px;
    }
`;

const Promotion = () => (
  <div className="container">
    <div className="columns">
      <Box className="column is-5 is-offset-1 has-background-info">
        <List>
          <li>
            <Font className="fas fa-check" /> &nbsp; &nbsp;
            <Text className="has-text-weight-bold has-text-black">
              Easiest way to do crypto transactions.
            </Text>
          </li>
          <li>
            <Font className="fas fa-check" /> &nbsp; &nbsp;
            <Text className="has-text-weight-bold has-text-black">
              Instant payment and transactions.
            </Text>
          </li>
          <li>
            <Font className="fas fa-check" /> &nbsp; &nbsp;
            <Text className="has-text-weight-bold has-text-black">
              Track your spend through zeiq wallet.
            </Text>
          </li>
          <li>
            <Font className="fas fa-check" /> &nbsp; &nbsp;
            <Text className="has-text-weight-bold has-text-black">
              Easiest choose which crypto you spend.
            </Text>
          </li>
          <li>
            <Font className="fas fa-check" /> &nbsp; &nbsp;
            <Text className="has-text-weight-bold has-text-black">
              World class security to keep your crypto safe.
            </Text>
          </li>
        </List>
      </Box>
      <div className="column is-5 has-background-info">
        <Container className="container">
          <h1 className="has-text-weight-bold has-text-black">
            Get the app today
          </h1>
          <h5 className="has-text-weight-bold is-size-5 has-text-dark">
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

export default Promotion;
