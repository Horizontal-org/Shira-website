import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './about.module.css';
import global from '../css/custom.module.scss';
import classNames from 'classnames';
import Translate, { translate } from '@docusaurus/Translate';
import useSignupUrl from '@site/src/hooks/useSignupUrl';
import HorizontalLogo from "@site/static/img/horizontal-logo.png";
import ShiraLogo from "@site/static/img/shira-s.png";
import FishImage from "@site/static/img/fish.png";
import HookImage from "@site/static/img/hook.png";
import ShiraAboutImage from "@site/static/img/shira-about.png";
import OtfLogo from "@site/static/img/otf-logo.png";

export default function About() {
  const getSignupUrl = useSignupUrl();

  return (
    <Layout
      title={translate({
        id: 'about.meta.title',
        message: 'About Shira',
      })}
      description={translate({
        id: 'about.meta.description',
        message:
          'Learn about Shira and the team behind it, a project by Horizontal, a non-profit creating security and privacy tools that help individuals and organizations defend against phishing attacks.',
      })}
    >
      <main className="main">
        <meta
          name="description"
          content={translate({
            id: 'about.meta.longDescription',
            message:
              'Learn about Shira and the team behind it, a project by Horizontal, a non-profit creating security and privacy tools that help individuals and organizations defend against phishing attacks.',
          })}
        />

        <div className={styles.flexAndCenter}>
          <section className={styles.aboutShira}>
            <div
              className={styles.heroBg}
              style={{ backgroundImage: `url(${ShiraAboutImage})` }}
            />
            <div className={global.sectionMaxWidth}>
              <div className={classNames(global.center, styles.aboutShiraText)}>
                <h1>
                  <Translate id="about.hero.title">Security shouldn't feel like a trap</Translate>
                </h1>
                <h4>
                  <Translate id="about.hero.subtitle">
                    Shira helps individuals and organizations build resilience against phishing, through security training grounded in real threats.
                  </Translate>
                </h4>
              </div>
            </div>
          </section>
        </div>

        <div className={classNames(styles.flexAndCenter)}>
          <section className={classNames(styles.aboutHorizontal, global.sectionMaxWidth)}>
            <div className={styles.aboutHorizontalText}>
              <div className={styles.aboutHorizontalHeader}>
                <img
                  className={styles.horizontalLogo}
                  src={HorizontalLogo}
                  alt={translate({
                    id: 'about.horizontal.imageAlt',
                    message: 'Horizontal logo',
                  })}
                />
                <h2>
                  <Translate id="about.horizontal.title">Who we are</Translate>
                </h2>
              </div>

              <p>
                <Translate id="about.horizontal.description.part1">
                  Shira is built by
                </Translate>{' '}
              <Link to="https://wearehorizontal.org">
                Horizontal
              </Link>
              <Translate id="about.horizontal.description.part2">
                , a non-profit dedicated to digital privacy and security. We are a distributed team of security trainers and technologists who have been on digital security for nearly a decade: we've helped and trained human rights defenders, journalists, and non-profits protect themselves online, in some of the highest-risk contexts in the world.
              </Translate>
              </p>

              <div className={styles.stats}>
                <div className={classNames(styles.statCard, global.backgroundLight)}>
                  <span className={styles.statNumber}>10</span>
                  <span className={styles.statLabel}>
                    <Translate id="about.stats.years.label">
                      years fighting phishing
                    </Translate>
                  </span>
                </div>
                <div className={classNames(styles.statCard, global.backgroundLight)}>
                  <span className={styles.statNumber}>40</span>
                  <span className={styles.statLabel}>
                    <Translate id="about.stats.countries.label">
                      countries reached
                    </Translate>
                  </span>
                </div>
                <div className={classNames(styles.statCard, global.backgroundLight)}>
                  <span className={styles.statNumber}>850+</span>
                  <span className={styles.statLabel}>
                    <Translate id="about.stats.orgsTrained.label">
                      organizations reached
                    </Translate>
                  </span>
                </div>
              </div>

              <p>
                <Translate id="about.horizontal.tellaIntro">
                  Shira is that experience, built into a tool. Shira is made by the same team behind
                </Translate>{' '}
                <Link to="https://tella-app.org/">
                  Tella
                </Link>
                <Translate id="about.horizontal.tellaDescription">
                  , an app used by over 25,000 people worldwide to protect their sensitive files and data on their phone.
                </Translate>
              </p>

              <Link
                className={classNames(styles.button, global.buttonDark)}
                to="https://wearehorizontal.org/index"
              >
                <Translate id="about.horizontal.cta">
                  More about Horizontal
                </Translate>
              </Link>
            </div>
          </section>
        </div>

        <div className={classNames(global.backgroundDark, styles.flexAndCenter)}>
          <div className={global.sectionMaxWidth}>
            <section className={styles.whyHeader}>
              <img
                className={styles.whyHeaderLogo}
                src={ShiraLogo}
                alt={translate({
                  id: 'about.why.logoAlt',
                  message: 'shira logo: it is an S in blue and light green colors',
                })}
              />

              <div className={styles.whyHeaderTitle}>
                <h1>
                  <Translate id="about.why.title">Why we created Shira</Translate>
                </h1>
              </div>

              <div className={styles.whyHeaderText}>
                <p>
                  <Translate id="about.why.mission">
                    Phishing is one of the most common ways attacks exploit people and compromise organizations. 
                  </Translate>
                </p>

                <p>
                  <Translate id="about.why.priorTools">
                    And yet, most tools built to train vulnerable against phishing were punitive by design, generic, and disconnected from the real threats they faced every day.
                  </Translate>
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className={classNames(styles.flexAndCenter)}>
          <section className={classNames(styles.narrativeSection, global.sectionMaxWidth)}>
            <div className={styles.narrativeTextFull}>
              <h2>
                <Translate id="about.started.title">How it started</Translate>
              </h2>

              <p>
                <Translate id="about.started.scene">
                  For most people, falling for a phishing attack means stolen data or money. But for the human rights defenders, 
                  journalists, and activists Horizontal works with, a single message can threaten not just their data, 
                  but their safety, and the
                </Translate>{' '}
                <strong>
                  <Translate id="about.started.sceneBold">safety of the people around them.</Translate>
                </strong>
              </p>

              <p>
                <Translate id="about.started.advisors">
                  In 2022, a Horizontal trainer stood in front of a room of human rights activists. 
                  As part of this digital security training, the trainer aimed to teach participants to 
                  recognize phishing attacks and what to do when faced with one. The trainer was unsatisfied 
                  with the tools available, too generic and lacking in customizability, so they used screenshots 
                  of phishing emails and text messages to teach the audience.
                </Translate>
              </p>

              <p>
                <Translate id="about.started.workshops">
                  Back from the workshop, Horizontal decided to take this on. We gathered an advisory board of a dozen digital safety and cybersecurity experts, educators, and researchers from around the world. We talked to people about what they lacked in existing tools and what they wanted in a phishing education platform: which platforms to simulate, which contexts to leave out.
                </Translate>
              </p>

              <div className={styles.otfRow}>
                <p>
                  <Translate id="about.started.otf">
                    And we built it.
                  </Translate>{' '}
                  <Translate id="about.started.otfMiddle">
                    With support from the
                  </Translate>{' '}
                  <Link to="https://www.opentech.fund/">
                    Open Technology Fund
                  </Link>
                  <Translate id="about.started.otfEnd">
                    , we started with a simple quiz. And we grew it from there. And we grew it from there.
                  </Translate>
                </p>
                <img
                  className={styles.otfLogo}
                  src={OtfLogo}
                  alt={translate({
                    id: 'about.started.otfLogoAlt',
                    message: 'Open Technology Fund logo',
                  })}
                />
              </div>

              <h2>
                <Translate id="about.going.title">How it's going</Translate>
              </h2>

              <div className={styles.goingText}>
                <p>
                  <Translate id="about.going.demand">
                    As digital security trainers began using Shira, demand grew fast.
                  </Translate>{' '}
                  <strong>
                    <Translate id="about.going.demandBold">One trainer alone used it to train over a thousand people</Translate>
                  </strong>
                  <Translate id="about.going.demandEnd">
                    , and requests kept coming in for more contexts, more platforms, more languages than we could ever build ourselves.
                  </Translate>
                </p>

                <p>
                  <Translate id="about.going.partners">
                    So we opened Shira to a small group of partners.
                  </Translate>{' '}
                  <strong>
                    <Translate id="about.going.partnersBold">Over 30 organizations</Translate>
                  </strong>{' '}
                  <Translate id="about.going.partnersEnd">
                    used it in very different ways: one digital security group ran it across a dozen workshops for human rights organizations, a reproductive health nonprofit used it to train 200 staff internally.
                  </Translate>
                </p>

                <p>
                  <Translate id="about.going.today">
                    This diversity of trainers and organizations shaped what Shira is today: a platform that is inherently open and is customizable in every possible way.
                  </Translate>{' '}
                  <strong>
                    <Translate id="about.going.todayBold">Organizations can build their own library of questions</Translate>
                  </strong>
                  <Translate id="about.going.todayEnd">
                    , choose between open campaigns or private spaces only their team can access, invite hundreds of people at once, and see how each learner performed. Shira also grew to cover how people actually receive phishing attempts, not only email, but SMS, WhatsApp, and other messaging apps, on both mobile and desktop.
                  </Translate>
                </p>

                <p>
                  <Translate id="about.going.ctaQuestion">
                    Want to see how organizations use Shira day to day?
                  </Translate>{' '}
                  <Link to="/case-studies">
                    <Translate id="about.going.cta">
                      Read our Case Studies →
                    </Translate>
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className={classNames(global.backgroundLight, styles.flexAndCenter)}>
          <section className={styles.builtSection, global.sectionMaxWidth}>
            <div className={styles.builtHeader}>
              <h2>
                <Translate id="about.built.title">How we built it</Translate>
              </h2>
              <img
                className={styles.builtHeaderImage}
                src={HookImage}
                alt={translate({
                  id: 'about.built.imageAlt',
                  message: 'decorative image of a phishing hook',
                })}
              />
            </div>

            <div className={styles.principlesGrid}>
              <div className={classNames(styles.principleCard, global.backgroundLightest)}>
                <h3><Translate id="about.built.horizontality.title">Horizontality</Translate></h3>
                <p className={styles.principleTagline}>
                  <Translate id="about.built.horizontality.tagline">
                    Collective decision-making is part of our DNA.
                  </Translate>
                </p>
                <p>
                  <Translate id="about.built.horizontality.description">
                    Every time we release something new, we ask the people using Shira the same question: 
                  </Translate>{' '}
                  <Link to="/contact">
                    <Translate id="about.built.horizontality.cta">
                      what do you need us to build next?
                    </Translate>
                  </Link>
                </p>
              </div>

              <div className={classNames(styles.principleCard, global.backgroundLightest)}>
                <h3><Translate id="about.built.community.title">Community</Translate></h3>
                <p className={styles.principleTagline}>
                  <Translate id="about.built.community.tagline">
                    We don't build for users, we build with them.
                  </Translate>
                </p>
                <p>
                  <Translate id="about.built.community.description1">
                    We are a non-profit and we develop Shira not just for the benefits of our users, but with their active involvement at every step of the process.
                  </Translate>
                </p>
              </div>

              <div className={classNames(styles.principleCard, global.backgroundLightest)}>
                <h3><Translate id="about.built.holism.title">Holism</Translate></h3>
                <p className={styles.principleTagline}>
                  <Translate id="about.built.holism.tagline">
                    We think critically about our footprint, in what we build and how we operate.
                  </Translate>
                </p>
                <p>
                  <Translate id="about.built.holism.description">
                    From privacy to open-source and the environment.
                  </Translate>
                </p>
              </div>

              <div className={classNames(styles.principleCard, global.backgroundLightest)}>
                <h3><Translate id="about.built.open.title">Open</Translate></h3>
                <p className={styles.principleTagline}>
                  <Translate id="about.built.open.tagline">
                    We believe sharing and collaboration are how we fulfill our mission.
                  </Translate>
                </p>
                <p>
                  <Translate id="about.built.open.description1">
                    Every line of
                  </Translate>{' '}
                  <Link to="https://github.com/Horizontal-org/shira">Shira code is public</Link>.{' '}
                  <Translate id="about.built.open.description2">
                    Anyone deciding whether to trust us with their team's security can look at it directly.
                  </Translate>
                </p>
              </div>
            </div>

            <div className={styles.trustCta}>
              <p>
                <Translate id="about.built.ctaQuestion">
                  Want the details for your own security review?
                </Translate>
              </p>
              <Link
                className={classNames(styles.button, global.buttonDark)}
                to="/trust-security"
              >
                <Translate id="about.built.cta">Trust &amp; Security</Translate>
              </Link>
            </div>
          </section>
        </div>

        <div className={styles.flexAndCenter}>
          <section className={classNames(global.row, styles.getStartedRow)}>
            <div className={styles.getStartedText}>
              <h2>
                <Translate id="about.getStarted.title">Ready to get started?</Translate>
              </h2>
              <p className={styles.getStartedSubtitle}>
                <Translate id="about.getStarted.subtitle">
                  Try Shira free, no credit card required.
                </Translate>
              </p>
              <div className={styles.getStartedButtons}>
                <Link
                  className={classNames(styles.button, global.buttonDark)}
                  to={getSignupUrl()}
                >
                  <Translate id="about.getStarted.ctaFree">Start for free</Translate>
                </Link>
                <Link
                  className={classNames(styles.button, global.buttonDark)}
                  to="/pricing"
                >
                  <Translate id="about.getStarted.ctaPricing">Explore our plans</Translate>
                </Link>
              </div>
            </div>

            <img
              className={styles.getStartedImage}
              src={FishImage}
              alt={translate({
                id: 'about.getStarted.imageAlt',
                message: 'decorative image of a fish representing phishing',
              })}
            />
          </section>
        </div>
      </main>
    </Layout>
  );
}