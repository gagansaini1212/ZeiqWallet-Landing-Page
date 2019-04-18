/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-indent */
/* eslint-disable func-names */
/* eslint-disable lines-between-class-members */
/* eslint-disable react/button-has-type */
import React from 'react';

import Layout from '../components/Layout';

export default class Faq extends React.Component {
  constructor(props) {
    super(props);

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.state = {
      isActive: false,
    };
  }
  toggleMobileMenu() {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive,
    });
  }
  render() {
    const { isActive } = this.state;
    return (
      <Layout>
        <div className="section">
          <h6 className="is-size-2 has-text-weight-bold">FAQs</h6>

          <section className="accordions">
            <article
              className={isActive ? 'is-active accordion' : 'accordion'}
              onClick={this.toggleMobileMenu}
            >
              <div className="accordion-header toggle">
                <p>Your first question goes here?</p>
              </div>
              <div className="accordion-body">
                <div className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                  <strong>Pellentesque risus mi</strong>, tempus quis placerat
                  ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
                  fringilla. Nullam gravida purus diam, et dictum{' '}
                  <a>felis venenatis</a> efficitur. Aenean ac{' '}
                  <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu
                  et sollicitudin porttitor, tortor urna tempor ligula, id
                  porttitor mi magna a neque. Donec dui urna, vehicula et sem
                  eget, facilisis sodales sem.
                </div>
              </div>
            </article>
          </section>
        </div>
      </Layout>
    );
  }
}
