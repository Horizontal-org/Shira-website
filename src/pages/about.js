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
                <Translate id="about.horizontal.description">
                  Shira is built by Horizontal, a distributed team of security trainers and technologists. Digital security has been one of our core areas of work for nearly a decade: we've helped and trained frontline defenders, activists, and journalists to protect themselves online, in some of the highest-risk contexts in the world.
                </Translate>
              </p>

              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>10</span>
                  <span className={styles.statLabel}>
                    <Translate id="about.stats.years.label">
                      years of experience in digital security training
                    </Translate>
                  </span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>40</span>
                  <span className={styles.statLabel}>
                    <Translate id="about.stats.countries.label">
                      countries reached
                    </Translate>
                  </span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>1,000+</span>
                  <span className={styles.statLabel}>
                    <Translate id="about.stats.orgsTrained.label">
                      organizations trained
                    </Translate>
                  </span>
                </div>
              </div>

              <p>
                <Translate id="about.horizontal.tellaIntro">
                  Shira is that experience, built into a tool. It's the same team behind
                </Translate>{' '}
                <Link to="https://tella-app.org/">
                  Tella
                </Link>{' '}
                <Translate id="about.horizontal.tellaDescription">
                  our tool for protecting people's physical and digital security, used by over 25,000 people worldwide.
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
                  <strong>
                    <Translate id="about.why.missionLead">
                      Phishing is one of the simplest ways attackers exploit people
                    </Translate>
                  </strong>
                  <Translate id="about.why.mission">
                    , compromising someone's safety, or their community's, with a single message. We care about human rights, and too often, technology becomes part of the threat instead of a shield against it.
                  </Translate>
                </p>

                <p>
                  <Translate id="about.why.priorTools">
                    Before Shira, we taught phishing recognition face to face, workshop by workshop. But most tools built for it were punitive by design, generic, and disconnected from the real threats our partners faced.
                  </Translate>
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className={classNames(styles.flexAndCenter)}>
          <section className={styles.narrativeSection}>
            <div className={styles.narrativeTextFull}>
              <h2>
                <Translate id="about.started.title">How it started</Translate>
              </h2>

              <p>
                <Translate id="about.started.scene">
                  In 2022, a Horizontal trainer stood in front of a room, teaching people about phishing, one workshop at a time. 
                  For most people, falling for phishing means stolen data or money. But for the human rights defenders, journalists, 
                  and activists Horizontal works with, a single message can threaten not just their data, but their safety, and the
                </Translate>{' '}
                <strong>
                  <Translate id="about.started.sceneBold">safety of the people around them.</Translate>
                </strong>
              </p>

              <p>
                <Translate id="about.started.advisors">
                  That trainer kept running into the same problem: most tools to teach phishing recognition were generic, punitive, or built to catch people out, 
                  not to help them learn. So we brought in a dozen advisors, working across different regions, who spent close to a year telling us what 
                  their people actually struggled with, and that shaped everything: which platforms to simulate, which contexts to leave out.
                </Translate>
              </p>

              <div className={styles.otfRow}>
                <p>
                  <Translate id="about.started.otf">
                    So we built our own:
                  </Translate>{' '}
                  <strong>
                    <Translate id="about.started.otfBold">starting as a simple quiz</Translate>
                  </strong>
                  <Translate id="about.started.otfMiddle">
                    , with support from the
                  </Translate>{' '}
                  <Link to="https://www.opentech.fund/">
                    Open Technology Fund
                  </Link>
                  <Translate id="about.started.otfEnd">
                    , and growing from there.
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
                    That range shaped what Shira is today:
                  </Translate>{' '}
                  <strong>
                    <Translate id="about.going.todayBold">organizations build their own library of questions</Translate>
                  </strong>
                  <Translate id="about.going.todayEnd">
                    , choose between an open campaign or a private space only their team can access, invite hundreds of people at once, and see how each learner performed, question by question. Shira also grew to cover how people actually receive phishing attempts, not only email, but SMS, WhatsApp, and other messaging apps, on both mobile and desktop.
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
          <section className={styles.builtSection}>
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
              <div className={styles.principleCard}>
                <h3><Translate id="about.built.horizontality.title">Horizontality</Translate></h3>
                <p className={styles.principleTagline}>
                  <Translate id="about.built.horizontality.tagline">
                    Collective decision making is part of our DNA.
                  </Translate>
                </p>
                <p>
                  <Translate id="about.built.horizontality.description">
                    Every time we release something new, we ask the people using Shira the same question: what do you need us to build next? Private quizzes, the feature more people asked for than any other, exists because enough people wrote back and said so.
                  </Translate>{' '}
                  <Link to="https://github.com/Horizontal-org/shira/discussions">
                    <Translate id="about.built.horizontality.cta">
                      Post a feature idea or vote on existing requests
                    </Translate>
                  </Link>
                </p>
              </div>

              <div className={styles.principleCard}>
                <h3><Translate id="about.built.community.title">Community</Translate></h3>
                <p className={styles.principleTagline}>
                  <Translate id="about.built.community.tagline">
                    We don't build for communities, we build with them.
                  </Translate>
                </p>
                <p>
                  <Translate id="about.built.community.description1">
                    It started with a year of conversations with advisors across different regions, and it's still how the library grows: trainers add their own examples, and volunteers translate Shira into new languages on their own.
                  </Translate>
                </p>
                <p>
                  <Translate id="about.built.community.contribute">
                    Want to contribute adding examples to the library or translating Shira to a new language?
                  </Translate>{' '}
                  <Link to="/contact">
                    <Translate id="about.built.community.contributeCta">Get in touch</Translate>
                  </Link>
                  .
                </p>
              </div>

              <div className={styles.principleCard}>
                <h3><Translate id="about.built.holism.title">Holism</Translate></h3>
                <p className={styles.principleTagline}>
                  <Translate id="about.built.holism.tagline">
                    We think critically about our footprint, in what we build and how we operate.
                  </Translate>
                </p>
                <p>
                  <Translate id="about.built.holism.description">
                    We don't share user data with third-party services. We
                  </Translate>{' '}
                  <Link to="https://docs.postalserver.io/">host our own email</Link>{' '}
                  <Translate id="about.built.holism.and">and</Translate>{' '}
                  <Link to="https://garagehq.deuxfleurs.fr/">images</Link>
                  <Translate id="about.built.holism.rest">
                    , both open source, and part of our infrastructure runs on a
                  </Translate>{' '}
                  <Link to="https://greenhost.net/">sustainable provider</Link>.
                </p>
              </div>

              <div className={styles.principleCard}>
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
                  <Link to="https://github.com/Horizontal-org/shira">Shira's code is public</Link>.{' '}
                  <Translate id="about.built.open.description2">
                    Anyone deciding whether to trust us with their team's security can look at it directly, they don't have to take our word for it.
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