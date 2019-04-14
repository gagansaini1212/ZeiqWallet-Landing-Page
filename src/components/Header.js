import React from 'react';
import styled from 'styled-components';

const Anchor = styled.a`
  padding: 0 2rem;
`;

const Width = '112';
const Height = '28';

const Header = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
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
      <div className="navbar-end">
        <div className="navbar-item">
          <Anchor className="is-size-5 has-text-weight-bold">
            Download the app
          </Anchor>
          <a className="is-size-5 has-text-weight-bold">FAQs</a>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
