import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './shira-for-healthcare.module.css';
import indexStyles from './index.module.css';
import global from '../css/custom.module.scss';
import classNames from 'classnames';
import Translate, { translate } from '@docusaurus/Translate';
import useSignupUrl from '@site/src/hooks/useSignupUrl';
import FishImage from "@site/static/img/fish.png";
import NursePractitionerQuizImage from "@site/static/img/healthcare-nurse-quiz.png";

export default function ShiraForHealthcare() {
  const getSignupUrl = useSignupUrl();

  return (
    <Layout
      title={translate({
        id: 'healthcare.meta.title',
        message: 'Shira for Healthcare',
      })}
      description={translate({
        id: 'healthcare.meta.description',
        message: 'Make your healthcare team phishing-resistant.',
      })}
    >
      <meta
        name="description"
        content={translate({
          id: 'healthcare.meta.longDescription',
          message: 'Shira helps clinical, administrative, and support teams recognize and stop phishing across email, SMS, messaging apps, and social media.',
        })}
      />

      <main className={global.main}>
        <section className={styles.hero}>
          <img
            className={styles.heroImage}
            src={FishImage}
            alt={translate({
              id: 'healthcare.hero.imageAlt',
              message: 'Illustration of a fish representing phishing',
            })}
          />

          <div className={styles.heroText}>
            <h2>
              {translate(
                {
                  id: 'healthcare.hero.title',
                  message: 'Make your healthcare team {phishingResistant}',
                },
                {
                  phishingResistant: (
                    <span className={styles.underline}>
                      <Translate id="healthcare.hero.title.underline">
                        phishing-resistant
                      </Translate>
                    </span>
                  ),
                }
              )}
            </h2>

            <p>
              <Translate id="healthcare.hero.subtitle">
                Shira helps clinical, administrative, and support teams
                recognize and stop phishing across email, SMS, messaging
                apps, and social media.
              </Translate>
            </p>

            <p>
              <Translate id="healthcare.hero.description">
                Create training tailored to your organization, measure
                progress, and strengthen everyday security habits—without
                coding or specialized IT expertise.
              </Translate>
            </p>

            <Link className={classNames(global.buttonDark, styles.cta)} to={getSignupUrl()}>
              <Translate id="healthcare.hero.cta.primary">
                Start your organization's training
              </Translate>
            </Link>
          </div>
        </section>

        <section className={classNames(global.backgroundLight, global.row, global.center, indexStyles.problemSection)}>
          <div className={global.sectionMaxWidth}>
            <h2>
              <Translate id="healthcare.problem.title">
                Phishing can reach your team anywhere
              </Translate>
            </h2>

            <p>
              <Translate id="healthcare.problem.subtitle">
                A suspicious message might arrive in a clinical inbox, a
                staff group chat, a text message, or a social media
                account. It may look like a patient portal alert, a lab
                result notification, or a message from a colleague, a
                vendor, an executive, a patient, or a trusted healthcare
                service.
              </Translate>
            </p>

            <div className={indexStyles.problemGrid}>
              <div className={classNames(indexStyles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="healthcare.problem.identity.title">
                    Healthcare organizations face persistent identity risks
                  </Translate>
                </h3>
                <p>
                  <Translate id="healthcare.problem.identity.description">
                    Nine in ten organizations faced an identity breach last
                    year.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="healthcare.problem.method.title">
                    Phishing remains a leading attack method
                  </Translate>
                </h3>
                <p>
                  <Translate id="healthcare.problem.method.description">
                    Phishing is one of the most common ways attackers gain
                    access to organizations and serves as the primary
                    entry point for more than 75% of cyberattacks.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="healthcare.problem.channels.title">
                    Phishing follows the way people communicate
                  </Translate>
                </h3>
                <p>
                  <Translate id="healthcare.problem.channels.description">
                    Email is only one part of the picture. Today's
                    phishing attempts also appear through SMS, messaging
                    apps, social media, and other tools people use every
                    day.
                  </Translate>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={classNames(global.backgroundDark, global.row, global.center, indexStyles.context)}>
          <img
            className={indexStyles.wideImage}
            src={NursePractitionerQuizImage}
            alt={translate({
              id: 'healthcare.withShira.imageAlt',
              message: 'screenshot of a Shira phishing quiz for nurse practitioners',
            })}
          />
          <div className={indexStyles.contextText}>
            <h2>
              <Translate id="healthcare.withShira.title">With Shira, you can…</Translate>
            </h2>
            <ol>
              <li>
                <Translate id="healthcare.withShira.item1">
                  Create training tailored to your organization
                </Translate>
              </li>
              <li>
                <Translate id="healthcare.withShira.item2">Measure progress</Translate>
              </li>
              <li>
                <Translate id="healthcare.withShira.item3">
                  Strengthen everyday security habits
                </Translate>
              </li>
            </ol>
            <p>
              <Translate id="healthcare.withShira.footer">
                All without coding or specialized IT expertise.
              </Translate>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}