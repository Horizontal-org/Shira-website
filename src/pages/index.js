import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import global from '../css/custom.module.scss';
import classNames from 'classnames';

export default function Home() {
  return (
    <Layout
      title="Shira"
      description="Learn the skills needed to identify and defeat phishing attacks with Shira."
    >

      <meta name="description" content="Shira helps individuals and organizations learn to spot and defeat phishing attacks through interactive, privacy-friendly quizzes, customizable for real-world apps like Gmail, SMS, and WhatsApp, context and language." />

      <main className={global.main}>

        <section className={styles.hero}>
          <div className={styles.bg}></div>
          <h1>Preparedness. Knowledge. Resilience.</h1>
          <h4>Learn the skills needed to identify and defeat phishing attacks</h4>
        </section>


        <section className={classNames(global.row, styles.twoColumns)}>
          <div className={classNames(styles.columnLight, styles.centerColumnLight)}>
            <div className={styles.halfColumn}>
              <h2>For learners</h2>
              <p>
                Get started right away with one of our free, pre-made quizzes. Customize the quiz to learn to identify phishing in the apps you use in real life — Gmail, SMS, WhatsApp, etc.
              </p>
              <Link className={global.buttonDark} to="https://quiz.shira.app/">Take a quiz</Link>
            </div>
          </div>
          <div className={styles.columnGreen}>
            <div className={styles.halfColumn}>
              <h2>For educators and security professionals</h2>
              <p>
                Each organization has its own needs and faces its own threats. Build phishing quizzes tailored to your organization’s needs and monitor your team’s success rates — all without technical skills.
              </p>
              <Link className={global.buttonLight} to="/features">Create your own quiz</Link>
            </div>
          </div>
        </section>

        <section className={classNames(global.row, global.center,styles.context)}>
          <p>
            For years, phishing has been one of the most common types of attacks facing individuals and organizations. While it has been traditionally limited to emails, phishing now also happens via SMS, messaging apps, and social media. Building users’ skills to identify and defeat phishing attacks is more needed than ever before.
          </p>
          <img src='/img/context.png'></img>
        </section>

        <section className={classNames(global.backgroundDark, styles.whySection, global.row, global.center)}>
          <div className={classNames(global.sectionContainer, global.center)}>
            <h2>Why Shira?</h2>
            <div className={classNames(styles.reasonsWhy)}>
              <h4>Whether you’re just taking our pre-made, free quizzes, or you’re taking the time to build your own custom quizzes, Shira is:</h4>
              <ul>
                <li><span>Easy to use</span> <br/> Created for communities most at risk of phishing attacks, even with limited tech literacy.</li>
                <li><span>Customizable</span> <br/> Realistic phishing messages to simulate real scenarios users face daily.</li>
                <li><span>Privacy-friendly</span> <br/> We do not collect or share any user data.</li>
              </ul>
            </div>
          </div>

        </section>
      </main>
    </Layout>
  );
}
