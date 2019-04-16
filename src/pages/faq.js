/* eslint-disable lines-between-class-members */
/* eslint-disable react/button-has-type */
import React from 'react';

import Layout from '../components/Layout';

export default class Faq extends React.Component {
    render() {
    return (
      <Layout>
        <div className="section">
          <div className="dropdown is-active">
            <div className="dropdown-trigger">
              <button
                className="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu2"
              >
                <span>Content</span>
                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true" />
                </span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu2" role="menu">
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <p>
                    You can insert <strong>any type of content</strong> within
                    the dropdown menu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
