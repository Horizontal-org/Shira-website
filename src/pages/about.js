import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './about.module.css';
import global from '../css/custom.module.scss';
import classNames from 'classnames';

export default function About() {
  return (
    <Layout
      title="About Shira"
      description="Learn about Shira and the team behind it — a project by Horizontal, a non-profit creating security and privacy tools that help individuals and organizations defend against phishing attacks."
    >
      <main className="main">
        <meta name="description" content="Learn about Shira and the team behind it — a project by Horizontal, a non-profit creating security and privacy tools that help individuals and organizations defend against phishing attacks." />

        <section className={classNames(global.row, global.backgroundDark, styles.aboutShira)}>
          <div className={classNames(global.center, styles.aboutShiraText)}>
            <h1>Shira</h1>
            <h4>Helping individuals and organizations to build their defense against phishing attacks</h4>
            <Link className={classNames(styles.button, global.buttonLight)} to="/contact">Get in touch</Link>

          </div>
          <img src='/img/shira-s.svg'></img>
        </section>

        <section className={classNames(global.row, styles.aboutHorizontal)}>
          <img src='/img/horizontal-logo.svg'></img>
          <div className={styles.aboutHorizontalText}>
            <h2>Who makes Shira?</h2>
            <p>Shira is a project by Horizontal, a technology non-profit that builds security and privacy technology to help people be safer online. </p>
            <p>You can help us improve and sustain Shira by <Link to="https://donorbox.org/towards-sustainability">making a donation here</Link>.</p>
            <p>To contribute to the translation of Shira into new languages, email us at <Link to="mailto:contact@wearehorizontal.org">contact@wearehorizontal.org</Link>.</p>
            <Link className={classNames(styles.button, global.buttonDark)} to="https://wearehorizontal.org/index">Learn about Horizontal</Link>

          </div>
        </section>

        <section className={classNames(global.backgroundLight, styles.whyShira)}>
          <h2>
            <img src='/img/hook.png'></img>
            Why Shira?
          </h2>

          <div className={classNames(styles.whyShiraText, global.row)}>
            <div className={styles.whyShiraReason}>
              <h3>1. Easy to use</h3>
              <p>Shira was created considering communities that are the most at-risk of phishing attacks, especially users with limited tech literacy.</p>
            </div>
            <div className={styles.whyShiraReason}>
              <h3>2. Customizable</h3>
              <p>We try to make phishing messages look as realistic as possible, to simulate what internet users actually face in their daily lives and the phishing attacks they are likely to face.</p>
            </div>
            <div className={styles.whyShiraReason}>
              <h3>3. Privacy-friendly</h3>
              <p>We do not collect, save, or share any data about users visiting Shira or taking quizzes. To learn more, check out our privacy policy and a recent security audit performed by an independent security firm.</p>
            </div>
          </div>

          <div className={classNames(styles.whyShiraButtons, global.row, global.center)}>
            <Link className={classNames(styles.button, global.buttonDark)} to="/privacy-policy">Privacy policy </Link>

          </div>
        </section>


      </main>
    </Layout>
  );
}

