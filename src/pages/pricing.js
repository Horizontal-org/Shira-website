import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './pricing.module.css';
import global from '../css/custom.module.scss';
import classNames from 'classnames';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, { translate } from '@docusaurus/Translate';

export default function Pricing() {
  const { siteConfig } = useDocusaurusContext();
  const signupFormUrl = siteConfig.customFields.signupFormUrl;

  return (
    <Layout
      title={translate({
        id: 'pricing.layout.title',
        message: "Shira's pricing",
      })}
      description={translate({
        id: 'pricing.layout.description',
        message:
          'Explore Shira’s simple and transparent pricing plans for educators, security professionals, and organizations. Choose between Free, Pro, or Enterprise options with customizable phishing quizzes and privacy-friendly management tools.',
      })}
    >
      <main className={global.main}>
        <meta
          name="description"
          content={translate({
            id: 'pricing.meta.description',
            message:
              'Explore Shira’s simple and transparent pricing plans for educators, security professionals, and organizations. Choose between Free, Pro, or Enterprise options with customizable phishing quizzes and privacy-friendly management tools.',
          })}
        />

        <section
          className={classNames(global.backgroundLight, styles.pricingShira)}
        >
          <div className={classNames(styles.pricingIntro)}>
            <h4>
              <Translate id="pricing.intro.subtitle">
                Custom plans for educators and security professionals
              </Translate>
            </h4>
            <h1>
              <Translate id="pricing.intro.title">
                Simple, transparent, and fair pricing
              </Translate>
            </h1>
          </div>
        </section>

        <section className={classNames(styles.pricingRow, styles.plans)}>
          {/* Starter */}
          <div className={styles.plan}>
            <h2>
              <Translate id="pricing.starter.title">Starter</Translate>
            </h2>
            <p>
              <Translate id="pricing.starter.description">
                To try things out and get familiar with Shira
              </Translate>
            </p>
            <p className={styles.price}>
              <Translate id="pricing.starter.price">$0</Translate>
            </p>
            <p>
              <Translate id="pricing.starter.note">
                Free, no strings attached
              </Translate>
            </p>

            <Link className={global.buttonDark} to={signupFormUrl}>
              <Translate id="pricing.cta.getStarted">Get started</Translate>
            </Link>

            <hr />

            <h3>
              <Translate id="pricing.starter.includes">
                The Starter plan includes:
              </Translate>
            </h3>

            <h4>
              <Translate id="pricing.admin.title">Admin management</Translate>
            </h4>
            <ul>
              <li>
                <Translate id="pricing.admin.cloud">✔️ Cloud</Translate>
              </li>
              <li>
                <Translate id="pricing.admin.dashboard">
                  ✔️ Admin dashboard
                </Translate>
              </li>
              <li>
                <Translate id="pricing.admin.oneAdmin">✔️ 1 admin</Translate>
              </li>
            </ul>

            <h4>
              <Translate id="pricing.customization.title">
                Customization
              </Translate>
            </h4>
            <ul>
              <li>
                <Translate id="pricing.customization.questions">
                  ✔️ Fully customizable quiz questions
                </Translate>
              </li>
              <li>
                <Translate id="pricing.customization.library">
                  ✔️ Access to the question's library
                </Translate>
              </li>
              <li>
                <Translate id="pricing.customization.quizzes">
                  ✔️ Up to 3 custom quizzes
                </Translate>
              </li>
              <li>
                <Translate id="pricing.customization.questionsPerQuiz">
                  ✔️ Up to 5 questions per quiz
                </Translate>
              </li>
              <li>
                <Translate id="pricing.customization.limit">
                  ✔️ Up to 1,500 quizzes taken per year
                </Translate>
              </li>
              <li>
                <Translate id="pricing.customization.apps">
                  ✔️ 2 apps: Gmail, SMS
                </Translate>
              </li>
            </ul>

            <h4>
              <Translate id="pricing.access.title">Access control</Translate>
            </h4>
            <ul>
              <li>
                <Translate id="pricing.access.public">
                  ✔️Public quizzes: anyone can take your quiz through an easy-to-share URL
                </Translate>
              </li>
            </ul>
          </div>

          {/* Pro */}
          <div className={classNames(global.backgroundLight, styles.plan)}>
            <h2>
              <Translate id="pricing.pro.title">Pro</Translate>
            </h2>
            <p>
              <Translate id="pricing.pro.description">
                One flat fee, the full power of Shira
              </Translate>
            </p>
            <p>
              <span className={styles.price}>
                <Translate id="pricing.pro.price">$220</Translate>
              </span>
              <span className={styles.p}>
                <Translate id="pricing.pro.billing">
                  /month billed annually or $275/month billed monthly
                </Translate>
              </span>
            </p>

            <Link className={global.buttonDark} to={signupFormUrl}>
              <Translate id="pricing.cta.getStarted">Get started</Translate>
            </Link>

            <hr />

            <h3>
              <Translate id="pricing.pro.includes">
                The Pro plan includes:
              </Translate>
            </h3>

            <h4>
              <Translate id="pricing.admin.title">Admin management</Translate>
            </h4>
            <ul>
              <li>
                <Translate id="pricing.admin.cloud">✔️ Cloud</Translate>
              </li>
              <li>
                <Translate id="pricing.admin.dashboard">
                  ✔️ Admin dashboard
                </Translate>
              </li>
              <li>
                <Translate id="pricing.admin.unlimitedSoon">
                  ✔️ Unlimited admins [coming soon]
                </Translate>
              </li>
            </ul>

            <h4>
              <Translate id="pricing.customization.title">
                Customization
              </Translate>
            </h4>
            <ul>
              <li>
                <Translate id="pricing.customization.questions">
                  ✔️ Fully customizable quiz questions
                </Translate>
              </li>
              <li>
                <Translate id="pricing.customization.library">
                  ✔️ Access to the question's library
                </Translate>
              </li>
              <li>
                <Translate id="pricing.pro.unlimitedQuizzes">
                  ✔️ Unlimited custom quizzes
                </Translate>
              </li>
              <li>
                <Translate id="pricing.pro.unlimitedQuestions">
                  ✔️ Unlimited quiz questions
                </Translate>
              </li>
              <li>
                <Translate id="pricing.pro.limit">
                  ✔️ Up to 1,500 quizzes taken per year*
                </Translate>
              </li>
              <li>
                <Translate id="pricing.pro.apps">
                  ✔️ 6 apps: Gmail, Outlook, SMS, WhatsApp, Messenger, Dating app
                </Translate>
              </li>
            </ul>

            <h4>
              <Translate id="pricing.access.title">Access control</Translate>
            </h4>
            <ul>
              <li>
                <Translate id="pricing.access.public">
                  ✔️Public quizzes: anyone can take your quiz through an easy-to-share URL
                </Translate>
              </li>
              <li>
                <Translate id="pricing.access.private">
                  ✔️Private quizzes: only your users can take your quizzes
                </Translate>
              </li>
            </ul>

            <h4>
              <Translate id="pricing.compliance.title">Compliance</Translate>
            </h4>
            <ul>
              <li>
                <Translate id="pricing.compliance.track">
                  ✔️Track user progress
                </Translate>
              </li>
              <li>
                <Translate id="pricing.compliance.tools">
                  ✔️Analysis and compliance tools [coming soon]
                </Translate>
              </li>
            </ul>

            <p className={styles.note}>
              <Translate id="pricing.pro.note">
                * Additional quiz packages available if needed
              </Translate>
            </p>
          </div>

          {/* Enterprise */}
          <div className={styles.plan}>
            <h2>
              <Translate id="pricing.enterprise.title">Enterprise</Translate>
            </h2>
            <p>
              <Translate id="pricing.enterprise.description">
                Best for large organizations and service providers
              </Translate>
            </p>

            <p className={styles.price}>
              <Translate id="pricing.enterprise.price">
                Custom pricing
              </Translate>
            </p>
            <p>
              <Translate id="pricing.enterprise.note">
                Rates tailored to your needs
              </Translate>
            </p>

            <Link className={global.buttonDark} to={signupFormUrl}>
              <Translate id="pricing.cta.getStarted">Get started</Translate>
            </Link>

            <hr />

            <h3>
              <Translate id="pricing.enterprise.includes">
                The Enterprise plan includes:
              </Translate>
            </h3>

            <h4>
              <Translate id="pricing.admin.title">Admin management</Translate>
            </h4>
            <ul>
              <li>
                <Translate id="pricing.enterprise.deployment">
                  ✔️ Cloud or on-premise
                </Translate>
              </li>
              <li>
                <Translate id="pricing.admin.dashboard">
                  ✔️ Admin dashboard
                </Translate>
              </li>
              <li>
                <Translate id="pricing.admin.unlimited">
                  ✔️ Unlimited admins
                </Translate>
              </li>
            </ul>

            <h4>
              <Translate id="pricing.customization.title">
                Customization
              </Translate>
            </h4>
            <ul>
              <li>
                <Translate id="pricing.customization.questions">
                  ✔️ Fully customizable quiz questions
                </Translate>
              </li>
              <li>
                <Translate id="pricing.customization.library">
                  ✔️ Access to the question's library
                </Translate>
              </li>
              <li>
                <Translate id="pricing.enterprise.unlimitedQuizzes">
                  ✔️ Unlimited custom quizzes
                </Translate>
              </li>
              <li>
                <Translate id="pricing.enterprise.unlimitedQuestions">
                  ✔️ Unlimited quiz questions
                </Translate>
              </li>
              <li>
                <Translate id="pricing.enterprise.customLimit">
                  ✔️ Custom number of quizzes taken
                </Translate>
              </li>
              <li>
                <Translate id="pricing.pro.apps">
                  ✔️ 6 apps: Gmail, Outlook, SMS, WhatsApp, Messenger, Dating app
                </Translate>
              </li>
            </ul>

            <h4>
              <Translate id="pricing.access.title">Access control</Translate>
            </h4>
            <ul>
              <li>
                <Translate id="pricing.access.public">
                  ✔️Public quizzes: anyone can take your quiz through an easy-to-share URL
                </Translate>
              </li>
              <li>
                <Translate id="pricing.access.private">
                  ✔️Private quizzes: only your users can take your quizzes
                </Translate>
              </li>
            </ul>

            <h4>
              <Translate id="pricing.compliance.title">Compliance</Translate>
            </h4>
            <ul>
              <li>
                <Translate id="pricing.compliance.track">
                  ✔️Track user progress
                </Translate>
              </li>
              <li>
                <Translate id="pricing.compliance.tools">
                  ✔️Analysis and compliance tools [coming soon]
                </Translate>
              </li>
            </ul>

            <h4>
              <Translate id="pricing.enterprise.support">
                Custom support
              </Translate>
            </h4>
            <ul>
              <li>
                <Translate id="pricing.enterprise.training">
                  ✔️Tailor-made user training
                </Translate>
              </li>
              <li>
                <Translate id="pricing.enterprise.priority">
                  ✔️Priority support
                </Translate>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}
