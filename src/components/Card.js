/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  heigth: 50rem;
  width: 90%;
  box-shadow: 5px 10px 16px rgba(0, 0, 0, 0.1),
    1px 1px 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  @media only screen and (max-width: 768px) {
    width: 100%;
    heigth: 100%;
  }
  .card-image {
    justify-content: center;
    justify-items: center;
    justify-self: center;
    display: flex;
  }
  .card-content {
    padding: 1.5rem 3.5rem;
    @media only screen and (max-width: 768px) {
      padding: 1.5rem;
    }
  }
`;

const Wrapper = styled.p`
  padding: 0 6rem;
  margin-top: 1.5rem;
  line-height: 1.8;
  @media only screen and (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const Card = ({ title, description }) => (
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
        <h1 className="is-size-3 has-text-weight-bold">{title}</h1>
        <Wrapper className="is-size-5 has-text-justified">
          {description}
        </Wrapper>
      </div>
    </div>
  </Container>
);

export default Card;
