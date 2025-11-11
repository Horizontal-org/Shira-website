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
            <h1>Let’s talk.</h1>
            <h4>Tell us a little bit about your organization and needs, and we’ll get back to you to discuss how Shira can help. We usually respond within 1 business day.</h4>
            <h4>Contact us via email at <a href="mailto:contact@wearehorizontal.org">contact@wearehorizontal.org</a></h4>
          </div>
        </section>

      </main>
    </Layout>
  );
}


