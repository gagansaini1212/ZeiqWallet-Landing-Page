import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.nav`
  .navbar-brand {
    @media only screen and (max-width: 768px) {
      justify-content: center;
    }
  }
`;

const Anchor = styled.a`
  padding: 0 2rem;
  @media only screen and (max-width: 768px) {
    padding: 0 2.7rem;
  }
`;

const Width = '112';
const Height = '28';

const Header = () => (
  <Container className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="#">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width={Width}
          height={Height}
          alt="zeiq wallet"
        />
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-end is-hidden-mobile">
        <div className="navbar-item">
          <Anchor className="is-size-5 has-text-weight-bold">
            Download the app
          </Anchor>
          <a className="is-size-5 has-text-weight-bold">FAQs</a>
        </div>
      </div>
    </div>
    <div className="navbar-end is-hidden-tablet">
      <div className="navbar-item">
        <Anchor className="is-size-5 has-text-weight-bold">
          Download the app
        </Anchor>
        <a className="is-size-5 has-text-weight-bold">
          <Link to="/faq/">Faq</Link>
        </a>
      </div>
    </div>
  </Container>
);

export default Header;
