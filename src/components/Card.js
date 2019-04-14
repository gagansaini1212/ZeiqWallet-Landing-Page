import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  heigth: 100%;
  width: 30%;
  box-shadow: 5px 10px 16px rgba(0, 0, 0, 0.1),
    1px 1px 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  @media only screen and (max-width: 768px) {
    width: 100%;
    heigth: 100%;
  }
  img {
    margin-left: 5rem;
  }
  .card-content {
    padding: 1.5rem 3.5rem;
    @media only screen and (max-width: 768px) {
      padding: 1.5rem;
    }
  }
`;

const Card = () => (
  <Container>
    <div className="card-image">
      {/* <figure className="image"> */}
      <img
        src="/images/images.png" // needed if any top image on the card will be required
        alt="Placeholder image"
      />
      {/* </figure> */}
    </div>
    <div className="card-content">
      <div className="content has-text-centered">
        <h1 className="is-size-3 has-text-weight-bold">
          Keep your funds secure
        </h1>
        <p className="is-size-5 has-text-justified">
          You have full control of your wallet holding private keys to access
          wallet and with improved fund management and transaction signature you
          have no fear to loose or hack crypto.
        </p>
      </div>
    </div>
  </Container>
);

export default Card;
