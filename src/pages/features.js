import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './features.module.css';
import global from '../css/custom.module.scss';
import classNames from 'classnames';
import Translate, { translate } from '@docusaurus/Translate';
import useSignupUrl from '@site/src/hooks/useSignupUrl';
import FishImage from "@site/static/img/fish.png"
import BubblesImage from"@site/static/img/fish-bubbles.png"


export default function Features() {
  const getSignupUrl = useSignupUrl();

  return (
    <Layout
      title={translate({
        id: 'features.meta.title',
        message: 'Shira\'s Features',
      })}
      description={translate({
        id: 'features.meta.description',
        message: 'Explore Shira\'s features for educators and security professionals.',
      })}
    >
      <main className={global.main}>
        <meta
          name="description"
          content={translate({
            id: 'features.meta.longDescription',
            message: 'Explore Shira\'s features for educators and security professionals — create realistic phishing quizzes, simulate real attacks, track team progress, and build lasting phishing awareness.',
          })}
        />

        <section className={classNames(global.row, global.center, global.sectionMaxWidth, styles.feauturesIntro)}>
          <div className={styles.feauturesIntroText}>
            <h4>
              <Translate id="features.intro.audience">
                For educators and security professionals
              </Translate>
            </h4>

            <h2>
              {translate(
                {
                  id: 'features.intro.title',
                  message:
                    'Create {your1} own phishing quizzes for {your2} team to address {your3} threats',
                },
                {
                  your1: <span className={styles.underline}><Translate id="features.intro.your1">your</Translate></span>,
                  your2: <span className={styles.underline}><Translate id="features.intro.your2">your</Translate></span>,
                  your3: <span className={styles.underline}><Translate id="features.intro.your3">your</Translate></span>,
                }
              )}
            </h2>

            <div className={styles.feauturesIntroButtons}>
              <Link className={classNames(styles.button, global.buttonDark)} to="/pricing">
                <Translate id="features.intro.pricing">Pricing</Translate>
              </Link>
              <Link className={classNames(styles.button, global.buttonDark)} to={getSignupUrl()}>
                <Translate id="features.intro.getStarted">Get Started</Translate>
              </Link>
            </div>
          </div>

          <img
            src={FishImage}
            alt={translate({
              id: 'features.images.fishAlt',
              message: 'Illustration of a fish representing phishing',
            })}
          />
        </section>

        <div style={{ width: '100%' }}>
          <section className={classNames(global.row, global.center, global.backgroundDark, styles.feauturesAllInfo)}>
            <img
              src={BubblesImage}
              alt={translate({
                id: 'features.images.bubblesAlt',
                message: 'Fish with bubbles illustration',
              })}
            />

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
            <p><Translate id="features.list.ui.description">Intuitive dashboard for easy navigation and management of quizzes and users.</Translate></p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3><Translate id="features.list.roles.title">Role-based access control 🔒</Translate></h3>
            <p><Translate id="features.list.roles.description">Different access levels for admins and learners.</Translate></p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3><Translate id="features.list.realLife.title">Real-Life Attack Simulation ⚡</Translate></h3>
            <p><Translate id="features.list.realLife.description">Include in your quizzes details from actual phishing attacks the company has experienced to best prepare your team.</Translate></p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3><Translate id="features.list.email.title">Email phishing simulations 📧</Translate></h3>
            <p><Translate id="features.list.email.description">Create quizzes that mimic phishing emails on Gmail and Outlook, including sender information, subject line, email body, links, images and file attachments.</Translate></p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3><Translate id="features.list.sms.title">SMS phishing simulations 💬</Translate></h3>
            <p><Translate id="features.list.sms.description">Create quizzes that simulate SMS phishing attempts with realistic text messages.</Translate></p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3><Translate id="features.list.messaging.title">Messaging app phishing simulations 💬</Translate></h3>
            <p><Translate id="features.list.messaging.description">Create quizzes that replicate phishing through popular messaging apps like WhatsApp or Facebook Messenger.</Translate></p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3><Translate id="features.list.mobile.title">Mobile support 📱</Translate></h3>
            <p><Translate id="features.list.mobile.description">We often face phishing attacks from our mobile devices. In Shira, users can take quizzes from their mobile devices to prepare for attacks they will face in real life.</Translate></p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3><Translate id="features.list.compliance.title">Compliance ✅</Translate></h3>
            <p><Translate id="features.list.compliance.description">Ensure that your team actually completes your quizzes and monitor success rates.</Translate></p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3><Translate id="features.list.analytics.title">Analytics 📈</Translate></h3>
            <p><Translate id="features.list.analytics.description">Track user progress and identify areas for improvement, whether it's the type of apps your users are most vulnerable on or the specific users who need extra support.</Translate></p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3><Translate id="features.list.explanations.title">Explanations 📝</Translate></h3>
            <p><Translate id="features.list.explanations.description">Embed your own explanations to point users to elements that suggest that an email or message looks like phishing.</Translate></p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3><Translate id="features.list.gamification.title">Gamification 🕹️</Translate></h3>
            <p><Translate id="features.list.gamification.description">An engaging learning experience promotes better knowledge retention.</Translate></p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3><Translate id="features.list.multilingual.title">Multilingual 🌐</Translate></h3>
            <p><Translate id="features.list.multilingual.description">Shira is fully available in English, Spanish, French, Mandarin, Arabic and Russian.</Translate></p>
          </div>

          <div className={classNames(styles.featureElement, global.backgroundLight)}>
            <h3><Translate id="features.list.library.title">Question library 📚</Translate></h3>
            <p><Translate id="features.list.library.description">Create your quiz questions from scratch or head to the Shira Library to pull question templates created by digital security trainers.</Translate></p>
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
