import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './features.module.css';
import global from '../css/custom.module.scss';
import classNames from 'classnames';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, { translate } from '@docusaurus/Translate';

export default function Features() {
  const { siteConfig } = useDocusaurusContext();
  const signupFormUrl = siteConfig.customFields.signupFormUrl;

  return (
    <Layout
      title={translate({ id: 'features.meta.title' })}
      description={translate({ id: 'features.meta.description' })}
    >
      <main className={global.main}>

        <meta
          name="description"
          content={translate({ id: 'features.meta.description' })}
        />

        <section className={classNames(global.row, global.center, global.sectionMaxWidth, styles.feauturesIntro)}>
          <div className={styles.feauturesIntroText}>
            <h4>
              <Translate id="features.intro.audience">
                For educators and security professionals
              </Translate>
            </h4>

            <h2>
              <Translate id="features.intro.title">
                Create <span className={classNames(styles.underline)}>your</span> own phishing quizzes for <span className={classNames(styles.underline)}>your</span> team to address <span className={classNames(styles.underline)}>your</span> threats
              </Translate>
            </h2>

            <div className={styles.feauturesIntroButtons}>
              <Link className={classNames(styles.button, global.buttonDark)} to="/pricing">
                <Translate id="features.intro.pricing">Pricing</Translate>
              </Link>
              <Link className={classNames(styles.button, global.buttonDark)} to={signupFormUrl}>
                <Translate id="features.intro.getStarted">Get Started</Translate>
              </Link>
            </div>
          </div>

          <img src="/img/fish.png" alt={translate({ id: 'features.images.fishAlt' })} />
        </section>

        <div style={{ width: '100%' }}>
          <section className={classNames(global.row, global.center, global.backgroundDark, styles.feauturesAllInfo)}>
            <img src="/img/fish-bubbles.png" alt={translate({ id: 'features.images.bubblesAlt' })} />

            <div className={styles.feauturesAllInfoText}>
              <h1>
                <Translate id="features.allFeatures.title">
                  All the features you need to keep your team safe
                </Translate>
              </h1>
              <span>
                <Translate id="features.allFeatures.description">
                  Nobody knows your team’s needs better than you. Shira gives you full control in creating learning experiences that are tailored to your organization’s specific needs, the attacks you receive, and your colleagues’ skill level.
                </Translate>
              </span>
            </div>
          </section>
        </div>

        <section className={classNames(styles.feauturesBox)}>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3><Translate id="features.list.ui.title">User-friendly interface 🎨</Translate></h3>
            <p><Translate id="features.list.ui.description">Intuitive dashboard for easy navigation and management of quizzes and user data.</Translate></p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3><Translate id="features.list.roles.title">Role-based access control 🔒</Translate></h3>
            <p><Translate id="features.list.roles.description">Different access levels for admins, managers, and employees.</Translate></p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3><Translate id="features.list.realLife.title">Real-Life Attack Simulation ⚡</Translate></h3>
            <p><Translate id="features.list.realLife.description">Ability to input details from actual phishing attacks the company has experienced.</Translate></p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3><Translate id="features.list.email.title">Email phishing simulations 📧</Translate></h3>
            <p><Translate id="features.list.email.description">Create quizzes that mimic phishing emails on Gmail and Outlook, including headers, body, images and attachments.</Translate></p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3><Translate id="features.list.sms.title">SMS phishing simulations 💬</Translate></h3>
            <p><Translate id="features.list.sms.description">Design quizzes that simulate SMS phishing attempts with realistic text messages.</Translate></p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3><Translate id="features.list.messaging.title">Messaging app phishing simulations 💬</Translate></h3>
            <p><Translate id="features.list.messaging.description">Include quizzes that replicate phishing through WhatsApp, Messenger, etc.</Translate></p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3><Translate id="features.list.mobile.title">Mobile support 📱</Translate></h3>
            <p><Translate id="features.list.mobile.description">Users can take Shira quizzes on mobile devices to simulate real-life scenarios.</Translate></p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3><Translate id="features.list.compliance.title">Compliance ✅</Translate></h3>
            <p><Translate id="features.list.compliance.description">Ensure that your team actually completes your quizzes and monitor success rates.</Translate></p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3><Translate id="features.list.analytics.title">Analytics 📈</Translate></h3>
            <p><Translate id="features.list.analytics.description">Track user progress and identify areas for improvement.</Translate></p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3><Translate id="features.list.explanations.title">Explanations 📝</Translate></h3>
            <p><Translate id="features.list.explanations.description">Embed your own explanations on why an email or message looks like phishing.</Translate></p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3><Translate id="features.list.gamification.title">Gamification 🕹️</Translate></h3>
            <p><Translate id="features.list.gamification.description">An entertaining learning experience promotes better knowledge retention.</Translate></p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3><Translate id="features.list.multilingual.title">Multilingual 🌐</Translate></h3>
            <p><Translate id="features.list.multilingual.description">Shira is fully available in English, Spanish, French, Mandarin, Arabic and Russian.</Translate></p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3><Translate id="features.list.library.title">Question library 📚</Translate></h3>
            <p><Translate id="features.list.library.description">Pull from Shira's question library to start your trainings from templates created by digital security trainers.</Translate></p>
          </div>

        </section>

        <section className={classNames(global.center, global.backgroundLight)}>
          <div className={styles.feauturesNeedMore}>
            <h2><Translate id="features.needMore.title">Missing a feature?</Translate></h2>
            <span><Translate id="features.needMore.subtitle">Get in touch. We’ll make it happen.</Translate></span>
            <Link className={global.buttonDark} to="/contact">
              <Translate id="features.needMore.cta">Contact us</Translate>
            </Link>
          </div>
        </section>

      </main>
    </Layout>
  );
}
