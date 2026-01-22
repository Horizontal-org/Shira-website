import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './contact.module.css';
import global from '../css/custom.module.scss';
import classNames from 'classnames';
import useBaseUrl from '@docusaurus/useBaseUrl';


export default function Contact() {
  return (
    <Layout
        title="Contact the Shira team"
      description="Learn about how to contact the Shira team"
    >
      <main className="main">
        <meta name="description" content="Learn about how to contact the Shira team" />

        <section className={classNames(global.column, global.backgroundLight, styles.contactShira)}>
          <div className={classNames(global.center,styles.contactShiraText )}>
            <h1>Let’s talk!</h1>

            <p>
              Do you have questions about shira (that's not answered in our <a href="/help">help center</a>)?
              Would you like to explore a possible partnership?
              Are you a part of a grassroot organization and cannot afforrd the full cost of Shira?
            </p>

            <h4>Get in touch:</h4>
              <ul>
                <li>Write to us to <a href="mailto:contact@wearehorizontal.org">contact@wearehorizontal.org</a>.</li>
                <li><a href="https://github.com/Horizontal-org/shira/discussions">Post a feature idea or vote on the community needs</a>.</li>
                <li><a href="https://calendly.com/raphael-mimoun/shira-demo">Schedule a demo call directly here</a>.</li>
              </ul>
          </div>
        </section>

      </main>
    </Layout>
  );
}


