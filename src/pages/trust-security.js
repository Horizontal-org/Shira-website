import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './trust-security.module.css';
import global from '../css/custom.module.scss';
import classNames from 'classnames';
import Translate, { translate } from '@docusaurus/Translate';
import TrustSecurityHero from "@site/static/img/worm.png";
import BlogIntroducingShira from "@site/static/img/blog-introducing-shira.png";
import BlogPrivateQuizzes from "@site/static/img/blog-private-quizzes.png";
import BlogShira20 from "@site/static/img/blog-fish-tail.png";

export default function TrustSecurity() {
  return (
    <Layout
      title={translate({
        id: 'trustSecurity.meta.title',
        message: 'Trust & Security',
      })}
      description={translate({
        id: 'trustSecurity.meta.description',
        message:
          'Independent audits, open-source code, and clear data practices. Learn how Shira protects the people who use it.',
      })}
    >
      <main className="main">
        <meta
          name="description"
          content={translate({
            id: 'trustSecurity.meta.longDescription',
            message:
              'Independent audits, open-source code, and clear data practices. Learn how Shira protects the people who use it.',
          })}
        />

        <div className={classNames(global.backgroundDark, styles.flexAndCenter)}>
          <section className={classNames(global.row, styles.hero, global.sectionMaxWidth)}>
            <div className={styles.heroText}>
              <p className={styles.kicker}>
                <Translate id="trustSecurity.hero.kicker">Trust & Security</Translate>
              </p>
              <h1>
                <Translate id="trustSecurity.hero.title">
                  Shira is built to protect the people who use it.
                </Translate>
              </h1>
              <h4>
                <Translate id="trustSecurity.hero.subtitle">
                  Independent audits, open-source code, and clear data practices, so you can verify it yourself.
                </Translate>
              </h4>
            </div>

            <img
              className={styles.heroImage}
              src={TrustSecurityHero}
              alt={translate({
                id: 'trustSecurity.hero.imageAlt',
                message: 'Illustration of a magnifying glass inspecting a phishing hook, surrounded by circuit lines',
              })}
            />
          </section>
        </div>

        <div className={classNames(styles.flexAndCenter)}>
          <section className={classNames(styles.trustItems, global.sectionMaxWidth)}>

            <div className={classNames(styles.trustItem, global.backgroundLight)}>
              <div className={styles.trustItemBody}>
                <h3>
                  <Translate id="trustSecurity.audits.title">Security audits 🛡️</Translate>
                </h3>
                <p>
                  <Translate id="trustSecurity.audits.description">
                    Independently audited by third-party security firms, including Subgraph and Convocation Design, before major releases. Reports are public.
                  </Translate>
                </p>
              </div>
              <Link
                className={classNames(styles.button, global.buttonDark)}
                to="https://www.shira.app/security"
              >
                <Translate id="trustSecurity.audits.cta">Security Reports</Translate>
              </Link>
            </div>

            <div className={classNames(styles.trustItem, global.backgroundLight)}>
              <div className={styles.trustItemBody}>
                <h3>
                  <Translate id="trustSecurity.data.title">How we handle your data 🔐</Translate>
                </h3>
                <p>
                  <Translate id="trustSecurity.data.description">
                    We design our products to collect as little information as necessary to run Shira: account info, quiz activity, and anonymized usage data. We do our best to anonymize and/or ensure that users give us informed consent to collect this data.
                  </Translate>
                </p>
              </div>
              <Link
                className={classNames(styles.button, global.buttonDark)}
                to="https://www.shira.app/privacy-policy"
              >
                <Translate id="trustSecurity.data.cta">Privacy Policy</Translate>
              </Link>
            </div>

            <div className={classNames(styles.trustItem, global.backgroundLight)}>
              <div className={styles.trustItemBody}>
                <h3>
                  <Translate id="trustSecurity.openSource.title">Open source 💻</Translate>
                </h3>
                <p>
                  <Translate id="trustSecurity.openSource.description">
                    Every line of Shira's code is public on GitHub, under an MIT 2.0 license, so you don't have to take our word for how it works.
                  </Translate>
                </p>
              </div>
              <Link
                className={classNames(styles.button, global.buttonDark)}
                to="https://github.com/Horizontal-org/shira"
              >
                <Translate id="trustSecurity.openSource.cta">See our code</Translate>
              </Link>
            </div>

            <div className={classNames(styles.trustItem, global.backgroundLight)}>
              <div className={styles.trustItemBody}>
                <h3>
                  <Translate id="trustSecurity.selfHosting.title">Self-hosting 🖥️</Translate>
                </h3>
                <p>
                  <Translate id="trustSecurity.selfHosting.description">
                    If your organization needs full control over where data lives, you can host your own instance of Shira, same open-source code, on your own infrastructure.
                  </Translate>
                </p>
              </div>
              <Link
                className={classNames(styles.button, global.buttonDark)}
                to="/contact"
              >
                <Translate id="trustSecurity.selfHosting.cta">Interested? Contact us</Translate>
              </Link>
            </div>

            <div className={classNames(styles.trustItem, global.backgroundLight)}>
              <div className={styles.trustItemBody}>
                <h3>
                  <Translate id="trustSecurity.questions.title">Security questions? 💬</Translate>
                </h3>
                <p>
                  <Translate id="trustSecurity.questions.description">
                    Reach out directly if your team needs a security review, more documentation, or has a question the pages above don't answer.
                  </Translate>
                </p>
              </div>
              <Link
                className={classNames(styles.button, global.buttonDark)}
                to="/contact"
              >
                <Translate id="trustSecurity.questions.cta">I have additional questions</Translate>
              </Link>
            </div>

          </section>
        </div>

        <div className={classNames(global.backgroundLight, styles.flexAndCenter)}>
          <section className={classNames(styles.resources, global.sectionMaxWidth)}>
            <h2>
              <Translate id="trustSecurity.resources.title">Additional Resources</Translate>
            </h2>

            <div className={styles.resourceItems}>
              <Link
                className={styles.resourceCard}
                to="https://blog.wearehorizontal.org/introducing-shira/"
              >
                <img
                  className={styles.resourceImagePlaceholder}
                  src={BlogIntroducingShira}
                  alt={translate({
                    id: 'trustSecurity.resources.placeholder1.alt',
                     message: 'Illustration of fish and hooks with the words "don\'t get phished" and "shira.app"',
                  })}
                />
                <div className={styles.resourceBody}>
                  <span className={styles.resourceTag}>
                    <Translate id="trustSecurity.resources.tag">Blog</Translate>
                  </span>
                  <p className={styles.resourceTitle}>
                    <Translate id="trustSecurity.resources.placeholder1">
                      Introducing Shira: Learn to Identify and Defeat Phishing Attacks
                    </Translate>
                  </p>
                  <span className={styles.resourceLink}>
                    <Translate id="trustSecurity.resources.cta">Learn more</Translate> ↗
                  </span>
                </div>
              </Link>
              <Link
                  className={styles.resourceCard}
                  to="https://blog.wearehorizontal.org/private-quizzes-are-here/"
              >
                <img
                  className={styles.resourceImagePlaceholder}
                  src={BlogPrivateQuizzes}
                  alt={translate({
                    id: 'trustSecurity.resources.placeholder2.alt',
                    message: 'Shira illustrations',
                  })}
                />
                <div className={styles.resourceBody}>
                  <span className={styles.resourceTag}>
                    <Translate id="trustSecurity.resources.tag">Blog</Translate>
                  </span>
                  <p className={styles.resourceTitle}>
                    <Translate id="trustSecurity.resources.placeholder2">
                      Private Quizzes Are Here!
                    </Translate>
                  </p>
                  <span className={styles.resourceLink}>
                    <Translate id="trustSecurity.resources.cta">Learn more</Translate> ↗
                  </span>
                </div>
              </Link>
              <Link
                className={styles.resourceCard}
                to="https://blog.wearehorizontal.org/introducing-shira-2-0-end-to-end-phishing-training/"
              >
                <img
                className={styles.resourceImagePlaceholder}
                src={BlogShira20}
               alt={translate({
                  id: 'trustSecurity.resources.placeholder1.alt',
                  message: 'Illustration of fish and hooks with the words "don\'t get phished" and "shira.app"',
                })}
              />
                <div className={styles.resourceBody}>
                  <span className={styles.resourceTag}>
                    <Translate id="trustSecurity.resources.tag">Blog</Translate>
                  </span>
                  <p className={styles.resourceTitle}>
                    <Translate id="trustSecurity.resources.placeholder3">
                      Introducing Shira 2.0 — End-to-End Phishing Training
                    </Translate>
                  </p>
                  <span className={styles.resourceLink}>
                    <Translate id="trustSecurity.resources.cta">Learn more</Translate> ↗
                  </span>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}