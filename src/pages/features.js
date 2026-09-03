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
import FeatureGmailSimulation from "@site/static/img/feature-gmail-simulation.png";
import FeatureMobileQuiz from "@site/static/img/feature-mobile-quiz.png";
import FeatureExplanationTooltip from "@site/static/img/feature-explanation-tooltip.png";
import FeatureResultsAnalytics from "@site/static/img/feature-results-analytics.png";
import FeatureUseTemplate from "@site/static/img/feature-use-template.png";


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

        {/* ---------- Feature groups, zigzag layout: screenshot next to a cluster of related features ---------- */}
        <section className={classNames(styles.featureGroups, global.sectionMaxWidth)}>

          {/* Group 1: Real-world simulations */}
          <div className={classNames(styles.featureGroupRow, global.backgroundLight)}>
            <h2 className={styles.featureGroupTitle}>
                <Translate id="features.group.realWorld.title">Real-world simulations</Translate>
              </h2>
            <img
              className={styles.featureGroupImage}
              src={FeatureGmailSimulation}
              alt={translate({
                id: 'features.group.realWorld.imageAlt',
                message: 'Screenshot of a simulated phishing email in Gmail, with buttons to mark it as phishing, unsure, or legitimate',
              })}
            />
            <ul className={styles.featureGroupList}>
                <li>
                  <strong><Translate id="features.list.realLife.title">Real-Life Attack Simulation ⚡</Translate></strong>
                  <p><Translate id="features.list.realLife.description">Include in your quizzes details from actual phishing attacks the organization has experienced to best prepare your team.</Translate></p>
                </li>
                <li>
                  <strong><Translate id="features.list.email.title">Email phishing simulations 📧</Translate></strong>
                  <p><Translate id="features.list.email.description">Create quizzes that mimic phishing emails on Gmail and Outlook, including sender information, subject line, email body, links, images and file attachments.</Translate></p>
                </li>
              </ul>
          </div>

          {/* Group 2: Mobile support */}
          <div className={classNames(styles.featureGroupRow, styles.featureGroupRowReverse, global.backgroundLight)}>
            <h2 className={styles.featureGroupTitle}>
                <Translate id="features.group.mobile.title">Mobile-ready</Translate>
              </h2>
            <img
              className={styles.featureGroupImage}
              src={FeatureMobileQuiz}
              alt={translate({
                id: 'features.group.mobile.imageAlt',
                message: 'Screenshot of a Shira quiz running in a mobile browser, showing a simulated messaging app phishing attempt',
              })}
            />
            <ul className={styles.featureGroupList}>
                <li>
                  <strong><Translate id="features.list.mobile.title">Mobile support 📱</Translate></strong>
                  <p><Translate id="features.list.mobile.description">We often face phishing attacks from our mobile devices. In Shira, users can take quizzes from their mobile devices to prepare for attacks they will face in real life.</Translate></p>
                </li>
                <li>
                  <strong><Translate id="features.list.messaging.title">SMS and Messaging app phishing simulations 💬</Translate></strong>
                  <p><Translate id="features.list.messaging.description">Create quizzes that replicate phishing through SMS and popular messaging apps like WhatsApp or Facebook Messenger.</Translate></p>
                </li>
              </ul>
          </div>

          {/* Group 3: Guided learning */}
          <div className={classNames(styles.featureGroupRow, global.backgroundLight)}>
            <h2 className={styles.featureGroupTitle}>
                <Translate id="features.group.learning.title">Guided learning</Translate>
              </h2>
            <img
              className={styles.featureGroupImage}
              src={FeatureExplanationTooltip}
              alt={translate({
                id: 'features.group.learning.imageAlt',
                message: 'Screenshot of a simulated messaging app showing a tooltip explaining why a message looks like phishing',
              })}
            />
            <ul className={styles.featureGroupList}>
                <li>
                  <strong><Translate id="features.list.explanations.title">Explanations 📝</Translate></strong>
                  <p><Translate id="features.list.explanations.description">Embed your own explanations to point users to elements that suggest that an email or message looks like phishing.</Translate></p>
                </li>
                <li>
                  <strong><Translate id="features.list.gamification.title">Gamification 🕹️</Translate></strong>
                  <p><Translate id="features.list.gamification.description">An engaging learning experience promotes better knowledge retention.</Translate></p>
                </li>
              </ul>
          </div>

          {/* Group 4: Track your team */}
          <div className={classNames(styles.featureGroupRow, styles.featureGroupRowReverse, global.backgroundLight)}>
            <h2 className={styles.featureGroupTitle}>
                <Translate id="features.group.tracking.title">Track your team</Translate>
              </h2>
            <img
              className={styles.featureGroupImage}
              src={FeatureResultsAnalytics}
              alt={translate({
                id: 'features.group.tracking.imageAlt',
                message: 'Screenshot of a Shira results dashboard showing completed quizzes and average scores by question',
              })}
            />
            <ul className={styles.featureGroupList}>
                <li>
                  <strong><Translate id="features.list.analytics.title">Analytics 📈</Translate></strong>
                  <p><Translate id="features.list.analytics.description">Track user progress and identify areas for improvement, whether it's the type of apps your users are most vulnerable on or the specific users who need extra support.</Translate></p>
                </li>
                <li>
                  <strong><Translate id="features.list.compliance.title">Compliance ✅</Translate></strong>
                  <p><Translate id="features.list.compliance.description">Ensure that your team actually completes your quizzes and monitor success rates.</Translate></p>
                </li>
                <li>
                  <strong><Translate id="features.list.roles.title">Role-based access control 🔒</Translate></strong>
                  <p><Translate id="features.list.roles.description">Different access levels for admins and learners.</Translate></p>
                </li>
              </ul>
          </div>

          {/* Group 5: Easy to setup */}
          <div className={classNames(styles.featureGroupRow, global.backgroundLight)}>
            <h2 className={styles.featureGroupTitle}>
                <Translate id="features.group.content.title">Easy to set up</Translate>
              </h2>
            <img
              className={styles.featureGroupImage}
              src={FeatureUseTemplate}
              alt={translate({
                id: 'features.group.content.imageAlt',
                message: 'Screenshot of a ready-made quiz template with a list of questions, ready to use',
              })}
            />
            <ul className={styles.featureGroupList}>
                <li>
                  <strong><Translate id="features.list.library.title">Question library 📚</Translate></strong>
                  <p><Translate id="features.list.library.description">Create your quiz questions from scratch or head to the Shira Library to pull question templates created by digital security trainers.</Translate></p>
                </li>
                <li>
                  <strong><Translate id="features.list.ui.title">User-friendly interface 🎨</Translate></strong>
                  <p><Translate id="features.list.ui.description">Intuitive dashboard for easy navigation and management of quizzes and users.</Translate></p>
                </li>
                <li>
                  <strong><Translate id="features.list.multilingual.title">Multilingual 🌐</Translate></strong>
                  <p><Translate id="features.list.multilingual.description">Shira is fully available in English, Spanish, French, Mandarin, Arabic and Russian.</Translate></p>
                </li>
              </ul>
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