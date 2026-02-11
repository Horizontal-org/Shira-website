import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './about.module.css';
import global from '../css/custom.module.scss';
import classNames from 'classnames';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, { translate } from '@docusaurus/Translate';
import ShiraLogo from "@site/static/img/shira-s.png";
import HorizontalLogo from "@site/static/img/horizontal-logo.png";
import HookImage from "@site/static/img/hook.png";

export default function About() {
  return (
    <Layout
      title={translate({
        id: 'about.meta.title',
        message: 'About Shira',
      })}
      description={translate({
        id: 'about.meta.description',
        message:
          'Learn about Shira and the team behind it — a project by Horizontal, a non-profit creating security and privacy tools that help individuals and organizations defend against phishing attacks.',
      })}
    >
      <main className="main">
        <meta
          name="description"
          content={translate({
            id: 'about.meta.longDescription',
            message:
              'Learn about Shira and the team behind it — a project by Horizontal, a non-profit creating security and privacy tools that help individuals and organizations defend against phishing attacks.',
          })}
        />

        <div className={classNames(global.backgroundDark, styles.flexAndCenter)}>
          <section className={classNames(global.row, styles.aboutShira, global.sectionMaxWidth)}>
            <div className={classNames(global.center, styles.aboutShiraText)}>
              <h1>
                <Translate id="about.hero.title">Shira</Translate>
              </h1>
              <h4>
                <Translate id="about.hero.subtitle">
                  Helping individuals and organizations to build their defense against phishing attacks
                </Translate>
              </h4>
              <Link
                className={classNames(styles.button, global.buttonLight)}
                to="/contact"
              >
                <Translate id="about.hero.cta">Get in touch</Translate>
              </Link>
            </div>

            <img
              src={ShiraLogo}
              alt={translate({
                id: 'about.hero.imageAlt',
                message: 'shira logo: it is an S in blue and light green colors',
              })}
            />
          </section>
        </div>

        <div className={classNames(styles.flexAndCenter)}>
          <section className={classNames(global.row, styles.aboutHorizontal, global.sectionMaxWidth)}>
              <img
              src={HorizontalLogo}
              alt={translate({
                id: 'about.horizontal.imageAlt',
                message: 'Horizontal logo',
              })}
            />

            <div className={styles.aboutHorizontalText}>
              <h2>
                <Translate id="about.horizontal.title">Who makes Shira?</Translate>
              </h2>

              <p>
                <Translate id="about.horizontal.description">
                  Shira is a project by Horizontal, a technology non-profit that builds security and privacy technology to help people be safer online.
                </Translate>
              </p>

              <p>
                <Translate id="about.horizontal.donationText">
                  You can help us improve and sustain Shira by
                </Translate>{' '}
                <Link to="https://donorbox.org/towards-sustainability">
                  <Translate id="about.horizontal.donationLink">
                    making a donation here
                  </Translate>
                </Link>.
              </p>

              <p>
                <Translate id="about.horizontal.translationText">
                  To contribute to the translation of Shira into new languages, email us at
                </Translate>{' '}
                <Link to="mailto:contact@wearehorizontal.org">
                  contact@wearehorizontal.org
                </Link>.
              </p>

              <Link
                className={classNames(styles.button, global.buttonDark)}
                to="https://wearehorizontal.org/index"
              >
                <Translate id="about.horizontal.cta">
                  Learn about Horizontal
                </Translate>
              </Link>
            </div>
          </section>
        </div>

        <div className={classNames(global.backgroundLight, styles.flexAndCenter)}>
          <section className={classNames(styles.whyShira, global.sectionMaxWidth)}>
            <h2>
              <img
                src={HookImage}
                alt={translate({
                  id: 'about.why.imageAlt',
                  message: 'decorative image of a hook',
                })}
              />
              {' '}
              <Translate id="about.why.title">Why Shira?</Translate>
            </h2>

            <div className={classNames(styles.whyShiraText, global.row)}>
              <div className={styles.whyShiraReason}>
                <h3>
                  <Translate id="about.why.easy.title">1. Easy to use</Translate>
                </h3>
                <p>
                  <Translate id="about.why.easy.description">
                    Shira was created considering communities that are the most at-risk of phishing attacks, especially users with limited tech literacy.
                  </Translate>
                </p>
              </div>

              <div className={styles.whyShiraReason}>
                <h3>
                  <Translate id="about.why.customizable.title">2. Customizable</Translate>
                </h3>
                <p>
                  <Translate id="about.why.customizable.description">
                    We try to make phishing messages look as realistic as possible, to simulate what internet users actually face in their daily lives and the phishing attacks they are likely to face.
                  </Translate>
                </p>
              </div>

              <div className={styles.whyShiraReason}>
                <h3>
                  <Translate id="about.why.privacy.title">3. Privacy-friendly</Translate>
                </h3>
                <p>
                  <Translate id="about.why.privacy.description">
                    We do not collect, save, or share any data about users visiting Shira or taking quizzes. To learn more, check out our privacy policy and a recent security audit performed by an independent security firm.
                  </Translate>
                </p>
              </div>
            </div>

            <div className={classNames(styles.whyShiraButtons, global.row, global.center)}>
              <a
                className={classNames(styles.button, global.buttonDark)}
                href={useBaseUrl('assets/shira-final.pdf')}
              >
                <Translate id="about.why.auditCta">Security Audit</Translate>
              </a>

              <Link
                className={classNames(styles.button, global.buttonDark)}
                to="/privacy-policy"
              >
                <Translate id="about.why.privacyCta">Privacy policy</Translate>
              </Link>
            </div>
          </section>
        </div>

        <div className={classNames(styles.flexAndCenter)}>
          <section className={classNames(global.row, styles.howItIsMade, global.sectionMaxWidth)}>
            <h2>
              <Translate id="about.how.title">How is Shira built?</Translate>
            </h2>

            <div className={classNames(global.center, styles.howItIsMadeText)}>
              <ul>
                <li>
                  <Link to="https://github.com/Horizontal-org/shira">
                    <Translate id="about.how.opensource">
                      Shira is Open Source, and licencesed under MIT 2.0.
                    </Translate>
                  </Link>
                </li>

                <li>
                  <Translate id="about.how.design">
                    At Horizontal, we design and develop centering the needs of the community.
                  </Translate>
                </li>

                <ul>
                  <li>
                    <Link to="/contact">
                      <Translate id="about.how.community">
                        Shira is multilingual, co-created with users and centering security and privacy.
                      </Translate>
                    </Link>
                  </li>
                </ul>

                <li>
                  <Translate id="about.how.green">
                    This website runs on green energy.
                  </Translate>
                </li>

                <img
                  src="https://app.greenweb.org/api/v3/greencheckimage/www.shira.app?nocache=true"
                  alt={translate({
                    id: 'about.how.greenAlt',
                    message:
                      'This website runs on green hosting - verified by thegreenwebfoundation.org',
                  })}
                  width="200px"
                  height="95px"
                />
              </ul>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
