import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import global from '../css/custom.module.scss';
import classNames from 'classnames';
import Translate, { translate } from '@docusaurus/Translate';
import ContextImage from "@site/static/img/context.png"

export default function Home() {
  return (
    <Layout
      title={translate({
        id: 'homepage.meta.title',
        message: 'Shira',
      })}
      description={translate({
        id: 'homepage.meta.description',
        message: "Shira builds your team's ability to identify and defeat phishing attacks.",
      })}
    >
      <meta
        name="description"
        content={translate({
          id: 'homepage.meta.longDescription',
          message:
            'Shira helps individuals and organizations learn to spot and defeat phishing attacks through interactive, privacy-friendly quizzes, customizable for real-world apps like Gmail, SMS, and WhatsApp, context and language.',
        })}
      />

      <main className={global.main}>
        <section className={styles.hero}>
          <div className={styles.bg}></div>
          <h1>
            <Translate id="homepage.hero.title">
              Preparedness. Knowledge. Resilience.
            </Translate>
          </h1>
          <p>
            <Translate id="homepage.hero.subtitle">
              Shira builds your team&apos;s ability to identify and defeat phishing attacks
            </Translate>
          </p>
        </section>

        <section className={classNames(global.row, styles.twoColumns)}>
          <div className={classNames(styles.columnLight, styles.centerColumnLight)}>
            <div className={styles.halfColumn}>
              <h2>
                <Translate id="homepage.learners.title">For learners</Translate>
              </h2>
              <p>
                <Translate id="homepage.learners.description">
                  Get started right away with one of our free, ready-made quizzes.
                  Customize the quiz to learn to identify phishing in the apps you use
                  in real life — Gmail, SMS, WhatsApp, etc — with examples tailored to
                  your language and field of work.
                </Translate>
              </p>
              <Link className={global.buttonDark} to="https://quiz.shira.app/">
                <Translate id="homepage.learners.cta">Take a quiz</Translate>
              </Link>
            </div>
          </div>

          <div className={styles.columnGreen}>
            <div className={styles.halfColumn}>
              <h2>
                <Translate id="homepage.educators.title">
                  For educators and security professionals
                </Translate>
              </h2>
              <p>
                <Translate id="homepage.educators.description">
                  Each organization has its own needs and faces its own threats.
                  Build phishing quizzes tailored to your organization’s needs and
                  monitor your team’s success rates — all without technical skills.
                </Translate>
              </p>
              <Link className={global.buttonLight} to="/features">
                <Translate id="homepage.educators.cta">Create your own quiz</Translate>
              </Link>
            </div>
          </div>
        </section>

        <section className={classNames(global.row, global.center, styles.context)}>
          <p>
            <Translate id="homepage.context.description">
              For years, phishing has been one of the most common types of attacks
              facing individuals and organizations. While it has been traditionally
              limited to emails, phishing now also happens via SMS, messaging apps,
              and social media. Building users’ skills to identify and defeat phishing
              attacks is more needed than ever before.
            </Translate>
          </p>
          <img
            src={ContextImage}
            alt={translate({
              id: 'homepage.context.imageAlt',
              message: 'decorative image of a magnifier glass',
            })}
          />
        </section>

        <section
          className={classNames(
            global.backgroundDark,
            styles.whySection,
            global.row,
            global.center,
          )}
        >
          <div
            className={classNames(
              global.sectionContainer,
              global.sectionContainerMobileWrap,
              global.center,
            )}
          >
            <h2>
              <Translate id="homepage.why.title">Why Shira?</Translate>
            </h2>

            <div className={styles.reasonsWhy}>
              <p>
                <Translate id="homepage.why.intro">
                  Whether you’re just taking our ready-made, free quizzes, or you’re
                  taking the time to build your own custom quizzes, Shira is:
                </Translate>
              </p>

              <ul>
                <li>
                  <span>
                    <Translate id="homepage.why.easy.title">Easy to use</Translate>
                  </span>
                  <p>
                    <Translate id="homepage.why.easy.description">
                      Created for communities most at risk of phishing attacks, even
                      with limited tech literacy.
                    </Translate>
                  </p>
                </li>

                <li>
                  <span>
                    <Translate id="homepage.why.customizable.title">Customizable</Translate>
                  </span>
                  <p>
                    <Translate id="homepage.why.customizable.description">
                      Realistic phishing messages to simulate real scenarios users
                      face daily.
                    </Translate>
                  </p>
                </li>

                <li>
                  <span>
                    <Translate id="homepage.why.privacy.title">Privacy-friendly</Translate>
                  </span>
                  <p>
                    <Translate id="homepage.why.privacy.description">
                      We do not collect or share any user data.
                    </Translate>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
