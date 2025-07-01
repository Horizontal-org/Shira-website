import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './about.module.css';

export default function About() {
  return (
    <Layout
      title="About Shira"
      description="Information about the Shira team and the parent organization: Horizontal."
    >
      <main className="main">
        <section className={`backgroundDark ${styles.aboutShira}`}>
          <div className={styles.aboutShiraText}>
            <h1>Shira</h1>
            <p>Helping individuals and organizations to build their defense against phishing attacks</p>
          </div>
          <img src='/img/shira-s.svg'></img>
        </section>

        <section className={`${styles.aboutHorizontal}`}>
          <img src='/img/horizontal-logo.svg'></img>
          <div className={styles.aboutHorizontalText}>
            <h2>Who makes Shira?</h2>
            <p>Shira is a project by Horizontal, a technology non-profit that builds security and privacy technology to help people be safer online. </p>
            <p>You can help us improve and sustain Shira by <Link to="https://donorbox.org/towards-sustainability">making a donation here. </Link></p>
            <p>To contribute to the translation of Shira into new languages, email us at contact@wearehorizontal.org.</p>
            <Link className={`${styles.button} button buttonDark`} to="https://wearehorizontal.org/index">Learn about Horizontal</Link>

          </div>
        </section>





      </main>
    </Layout>
  );
}

