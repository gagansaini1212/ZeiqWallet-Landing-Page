import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  heigth: 100%;
  width: 35%;
  box-shadow: 5px 10px 12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1);
`;

const Card = () => (
  <Container className="card">
    <div className="card-image">
      {/* <figure className="image"> */}
      {/* <img
          src="https://bulma.io/images/placeholders/1280x960.png" //needed if any top image on the card will be required
          alt="Placeholder image"
        /> */}
      {/* </figure> */}
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-left" />
        <div className="media-content">
          <p className="title is-4">John Smith</p>
          <p className="subtitle is-6">@johnsmith</p>
        </div>
      </div>

      <div className="content">
        <h1>sgdggdhdh</h1>
        <p>fgdhfh ifgwigrig igigewrig ewrg rigriggeieg</p>
      </div>
    </div>
  </Container>
);

export default Card;
