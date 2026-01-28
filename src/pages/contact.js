import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './contact.module.css';
import global from '../css/custom.module.scss';
import classNames from 'classnames';
import Translate, { translate } from '@docusaurus/Translate';

export default function Contact() {
  return (
    <Layout
      title={translate({ id: 'contact.title' })}
      description={translate({ id: 'contact.description' })}
    >
      <main className="main">
        <meta
          name="description"
          content={translate({ id: 'contact.metaDescription' })}
        />

        <section
          className={classNames(
            global.column,
            global.backgroundLight,
            styles.contactShira
          )}
        >
          <div className={classNames(global.center, styles.contactShiraText)}>
            <h1>
              <Translate id="contact.heading">
                Let’s talk!
              </Translate>
            </h1>

            <p>
              <Translate id="contact.intro.part1">
                Do you have questions about Shira (that are not answered in our
              </Translate>{' '}
              <Link to="/help">
                <Translate id="contact.intro.helpCenter">
                  help center
                </Translate>
              </Link>
              <Translate id="contact.intro.part2">
                )? Would you like to explore a possible partnership? Are you a part of a grassroots organization and cannot afford the full cost of Shira?
              </Translate>
            </p>

            <h4>
              <Translate id="contact.getInTouch">
                Get in touch:
              </Translate>
            </h4>

            <ul>
              <li>
                <Translate id="contact.links.emailText">
                  Write to us at
                </Translate>{' '}
                <a href="mailto:contact@wearehorizontal.org">
                  contact@wearehorizontal.org
                </a>.
              </li>
              <li>
                <a href="https://github.com/Horizontal-org/shira/discussions">
                  <Translate id="contact.links.github">
                    Post a feature idea or vote on the community needs
                  </Translate>
                </a>.
              </li>
              <li>
                <a href="https://calendly.com/raphael-mimoun/shira-demo">
                  <Translate id="contact.links.demo">
                    Schedule a demo call directly here
                  </Translate>
                </a>.
              </li>
              <li>
                <a href="https://blog.wearehorizontal.org/tag/shira/">
                  <Translate id="contact.links.newsletter">
                    Subscribe to our newsletter
                  </Translate>
                </a>.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}
