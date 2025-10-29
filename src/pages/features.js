import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './features.module.css';
import global from '../css/custom.module.scss';
import classNames from 'classnames';

export default function Features() {
  return (
    <Layout
      title="Shira's Features"
      description="Explore Shira’s features for educators and security professionals — create realistic phishing quizzes, simulate real attacks, track team progress, and build lasting phishing awareness."
    >
      <main className={global.main}>

        <meta name="description" content="Explore Shira’s features for educators and security professionals — create realistic phishing quizzes, simulate real attacks, track team progress, and build lasting phishing awareness." />

        <section className={classNames(global.row, global.center, styles.feauturesIntro)}>
          <div className={styles.feauturesIntroText}>
            <p>For educators and security professionals</p>
            <h2>Create <span className={classNames(styles.underline)}>your</span> own phishing quizzes for <span className={classNames(styles.underline)}>your</span> team to address <span className={classNames(styles.underline)}>your</span> threats</h2>

             <div className={styles.feauturesIntroButtons}>
              <Link className={classNames(styles.button, global.buttonDark)} to="/pricing">Pricing</Link>
              <Link className={classNames(styles.button, global.buttonDark)} to="/contact">Get Started</Link>
            </div>
          </div>
          <img src='/img/fish.png'></img>
        </section>

        <section className={classNames(global.row, global.center, global.backgroundDark, styles.feauturesAllInfo)}>
          <img src='/img/fish-bubbles.png'></img>

          <div className={styles.feauturesAllInfoText}>
            <h1>All the features you need to keep your team safe</h1>
            <p>Nobody knows your team’s needs better than you. Shira gives you full control in creating learning experiences that are tailored to your organization’s specific needs, the attacks you receive, and your colleagues’ skill level.</p>
          </div>
        </section>

        <section className={classNames(global.row, styles.feauturesBox)}>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3>🎨 User-friendly interface</h3>
            <p>Intuitive dashboard for easy navigation and management of quizzes and user data.</p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3>🔒 Role-based access control</h3>
            <p>Different access levels for admins, managers, and employees.</p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3>⚡ Real-Life Attack Simulation</h3>
            <p>Ability to input details from actual phishing attacks the company has experienced.</p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3>📧 Email phishing simulations</h3>
            <p>Create quizzes that mimic phishing emails, including headers, body, and attachments.</p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3>💬 SMS phishing simulations</h3>
            <p>Design quizzes that simulate SMS phishing attempts with realistic text messages.</p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3>💬 Messaging app phishing simulations</h3>
            <p>Include quizzes that replicate phishing through WhatsApp, Messenger, etc.</p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3>📱 Mobile support</h3>
            <p>Users can take Shira quizzes on mobile devices to simulate real-life scenarios.</p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3>✅ Compliance</h3>
            <p>Ensure that your team actually completes your quizzes and monitor success rates.</p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3>📈 Analytics</h3>
            <p>Track user progress and identify areas for improvement.</p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3>📝 Explanations</h3>
            <p>Embed your own explanations on why an email or message looks like phishing.</p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3>🕹️ Gamification</h3>
            <p>An entertaining learning experience promotes better knowledge retention.</p>
          </div>

        </section>

        <section className={classNames(global.center, global.backgroundLight)}>

          <div className={styles.feauturesNeedMore}>
            <h2>Missing a feature?</h2>
            <p>Get in touch. We’ll make it happen.</p>
            <Link className={global.buttonDark} to="/contact">Contact us</Link>

          </div>
        </section>

      </main>
    </Layout>
  );
}
