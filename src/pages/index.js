import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Shira – Preparedness. Knowledge. Resilience."
      description="Learn the skills needed to identify and defeat phishing attacks with Shira."
    >
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.bg}></div>
          <h1>Preparedness. Knowledge. Resilience.</h1>
          <p>Learn the skills needed to identify and defeat phishing attacks</p>
          <Link className={styles.cta} to="/quiz">Get Started</Link>
        </section>

        {/* Learners & Educators */}
        <section className={styles.twoColumns}>
          <div className={styles.columnLight}>
            <h2>For learners</h2>
            <p>
              Get started right away with one of our free, pre-made quizzes. Customize the quiz to learn to identify phishing in the apps you use in real life — Gmail, SMS, WhatsApp, etc.
            </p>
            <Link className={styles.buttonLight} to="/quiz">Take a quiz</Link>
          </div>
          <div className={styles.columnGreen}>
            <h2>For educators and security professionals</h2>
            <p>
              Each organization has its own needs and faces its own threats. Build phishing quizzes tailored to your organization’s needs and monitor your team’s success rates — all without technical skills.
            </p>
            <Link className={styles.buttonDark} to="/features">Create your own quiz</Link>
          </div>
        </section>

        {/* Context */}
        <section className={styles.context}>
          <p>
            For years, phishing is one of the most common types of attacks facing individuals and organizations. While it has been traditionally limited to emails, phishing now also happens via SMS, messaging apps, and social media. Building users’ skills to identify and defeat phishing attacks is more needed than ever before.
          </p>
          <img src='/img/context.png'></img>
        </section>

        {/* Why Shira */}
        <section className={styles.whySection}>
          <h2>Why Shira?</h2>
          <div className={styles.reasonsWhy}>
            <p>Whether you’re just taking our pre-made, free quizzes, or you’re taking the time to build your own custom quizzes, Shira is:</p>
            <ul>
              <li><strong>Easy to use:</strong> Created for communities most at risk of phishing attacks, even with limited tech literacy.</li>
              <li><strong>Customizable:</strong> Realistic phishing messages to simulate real scenarios users face daily.</li>
              <li><strong>Privacy-friendly:</strong> We do not collect or share any user data.</li>
            </ul>
          </div>

        </section>
      </main>
    </Layout>
  );
}
