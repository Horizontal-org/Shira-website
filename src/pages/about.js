import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './about.module.css';
import global from '../css/custom.module.scss';
import classNames from 'classnames';
import useBaseUrl from '@docusaurus/useBaseUrl';


export default function About() {
  return (
    <Layout
      title="About Shira"
      description="Learn about Shira and the team behind it — a project by Horizontal, a non-profit creating security and privacy tools that help individuals and organizations defend against phishing attacks."
    >
      <main className="main">
        <meta name="description" content="Learn about Shira and the team behind it — a project by Horizontal, a non-profit creating security and privacy tools that help individuals and organizations defend against phishing attacks." />

        <div className={classNames(global.backgroundDark, styles.flexAndCenter)}>
          <section className={classNames(global.row, styles.aboutShira, global.sectionMaxWidth)}>
            <div className={classNames(global.center, styles.aboutShiraText)}>
              <h1>Shira</h1>
              <h4>Helping individuals and organizations to build their defense against phishing attacks</h4>
              <Link className={classNames(styles.button, global.buttonLight)} to="/contact">Get in touch</Link>

            </div>
            <img src='/img/shira-s.svg' alt="shira logo: it is an S in blue and light green colors"></img>
          </section>
        </div>

        <div className={classNames(styles.flexAndCenter)}>
          <section className={classNames(global.row, styles.aboutHorizontal, global.sectionMaxWidth)}>
            <img src='/img/horizontal-logo.svg' alt="Horizontal logo"></img>
            <div className={styles.aboutHorizontalText}>
              <h2>Who makes Shira?</h2>
              <p>Shira is a project by Horizontal, a technology non-profit that builds security and privacy technology to help people be safer online. </p>
              <p>You can help us improve and sustain Shira by <Link to="https://donorbox.org/towards-sustainability">making a donation here</Link>.</p>
              <p>To contribute to the translation of Shira into new languages, email us at <Link to="mailto:contact@wearehorizontal.org">contact@wearehorizontal.org</Link>.</p>
              <Link className={classNames(styles.button, global.buttonDark)} to="https://wearehorizontal.org/index">Learn about Horizontal</Link>

            </div>
          </section>
        </div>

        <div className={classNames(global.backgroundLight, styles.flexAndCenter)}>
          <section className={classNames(styles.whyShira, global.sectionMaxWidth)}>
            <h2>
              <img src='/img/hook.png' alt="decorative image of a hook"></img>
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
              <a className={classNames(styles.button, global.buttonDark)} href={useBaseUrl('assets/shira-final.pdf')}>Security Audit</a>
              <Link className={classNames(styles.button, global.buttonDark)} to="/privacy-policy">Privacy policy </Link>

            </div>
          </section>
        </div>

        <div className={classNames(styles.flexAndCenter)}>
          <section className={classNames(global.row, styles.howItIsMade, global.sectionMaxWidth)}>
            <h2>How Shira is built?</h2>
            <div className={classNames(global.center, styles.howItIsMadeText)}>
              <ul>
                <li>Shira is <Link to="https://github.com/Horizontal-org/shira">Open Source</Link>, and licencesed under MIT 2.0. </li>
                <li>At Horizontal, we design and develop centering the needs of the community.</li>
                <ul>
                  <li>Shira is multilingual, <Link to="/contact">co-created with users</Link> and centering security and privacy.</li>
                </ul>
                <li>This website runs on green energy.</li>
                <img src="https://app.greenweb.org/api/v3/greencheckimage/www.shira.app?nocache=true" alt="This website runs on green hosting - verified by thegreenwebfoundation.org" width="200px" height="95px"></img>

              </ul>
            </div>
          </section>
        </div>

      </main>
    </Layout>
  );
}

