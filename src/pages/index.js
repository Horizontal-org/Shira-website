import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import global from '../css/custom.module.scss';
import classNames from 'classnames';
import Translate, { translate } from '@docusaurus/Translate';
import ShiraLogo from "@site/static/img/shira-s.png";
import ContextImage from "@site/static/img/context.png";
import FeatureExplanationImage from "@site/static/img/feature-quiz-explanation.png";
import ProductPreviewImage from "@site/static/img/feature-create-new-question.png";
import FishImage from "@site/static/img/fish-bubbles.png";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useSignupUrl from '@site/src/hooks/useSignupUrl';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const getSignupUrl = useSignupUrl();

  return (
    <Layout
      title={translate({
        id: 'homepage.meta.title',
        message: 'Shira',
      })}
      description={translate({
        id: 'homepage.meta.description',
        message: "Use Shira to build your team's ability to identify and defeat phishing attacks.",
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
            <Translate id="homepage.hero.title.line1">Make your team</Translate>
            <br />
            <Translate id="homepage.hero.title.line2">phishing-resistant</Translate>
          </h1>
          <p>
            <Translate id="homepage.hero.subtitle">
              Shira helps mission-driven organizations train their teams to recognize
              and stop phishing across email, SMS, messaging apps, and social media.
            </Translate>
          </p>
          <Link className={classNames(styles.button, global.buttonDark)} to="https://space.shira.app/get-started?plan=starter">
            <Translate id="homepage.hero.cta">Start your organization's training</Translate>
          </Link>
        </section>

        <section className={classNames(global.backgroundDark, styles.whySection, global.row, global.center)}>
          <div className={classNames(global.sectionContainer, global.sectionContainerMobileWrap, global.center)}>
            <img src={ShiraLogo} alt="Shira" width={140} />

            <div className={styles.reasonsWhy}>
              <p>
                <Translate id="homepage.trust.statement.part1">
                  Shira is designed for
                </Translate>{' '}
                <strong>
                  <Translate id="homepage.trust.statement.bold1">mission-driven</Translate>
                </strong>{' '}
                <Translate id="homepage.trust.statement.part2">
                  organizations—education, healthcare, nonprofits, and beyond—
                </Translate>
                <strong>
                  <Translate id="homepage.trust.statement.bold2">
                    with limited resources and a responsibility to protect the people they serve
                  </Translate>
                </strong>.
              </p>
              <p>
                <Translate id="homepage.trust.experience">
                  We have over a decade experience building tools to make people and
                  organizations safer.
                </Translate>
              </p>
            </div>
          </div>
        </section>

        <section className={classNames(global.backgroundLight, global.row, global.center, styles.problemSection)}>
          <div className={global.sectionMaxWidth}>
            <h2>
              <Translate id="homepage.problem.title">
                9 in 10 organizations faced an identity breach in 2024.
              </Translate>
            </h2>

            <div className={styles.problemGrid}>
              <div className={classNames(styles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="homepage.problem.common.title">
                    Phishing is the most common attack 💰
                  </Translate>
                </h3>
                <p>
                  <Translate id="homepage.problem.common.description">
                    Phishing remains one of the most common ways attackers gain access
                    to organizations. Phishing serves as the primary entry point for
                    over 75% of cyberattacks.
                  </Translate>
                </p>
              </div>

              <div className={classNames(styles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="homepage.problem.channels.title">
                    Reaches your team wherever they communicate 💬
                  </Translate>
                </h3>
                <p>
                  <Translate id="homepage.problem.channels.description">
                    Phishing is no longer limited to email. Today, phishing also
                    happens through SMS, messaging apps, social media, and other
                    channels people use every day.
                  </Translate>
                </p>
              </div>

              <div className={classNames(styles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="homepage.problem.skills.title">
                    Click rates don't build lasting skills ⏳
                  </Translate>
                </h3>
                <p>
                  <Translate id="homepage.problem.skills.description">
                    Traditional phishing simulations test a single reaction in a
                    single moment. They don't teach people what to look for the next
                    time, across the channels attackers actually use.
                  </Translate>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={classNames(global.backgroundDark, global.row, global.center, styles.context)}>
          <img
            className={styles.wideImage}
            src={FeatureExplanationImage}
            alt={translate({
              id: 'homepage.withShira.imageAlt',
              message: 'screenshot of a Shira phishing quiz with questions listed',
            })}
          />
          <div className={styles.contextText}>
            <h2>
              <Translate id="homepage.withShira.title">With Shira, you can…</Translate>
            </h2>
            <ol>
              <li>
                <Translate id="homepage.withShira.item1">
                  Create training tailored to your organization
                </Translate>
              </li>
              <li>
                <Translate id="homepage.withShira.item2">Measure progress</Translate>
              </li>
              <li>
                <Translate id="homepage.withShira.item3">
                  Strengthen everyday security habits
                </Translate>
              </li>
            </ol>
            <p>
              <Translate id="homepage.withShira.footer">
                All without coding or specialized IT expertise.
              </Translate>
            </p>
          </div>
        </section>

        <section className={classNames(global.row, global.center, styles.context)}>
          <div className={classNames(styles.contextText, styles.productPreviewText)}>
            <h2>
              <Translate id="homepage.productPreview.title">
                Build a phishing defense program in minutes
              </Translate>
            </h2>
            <p>
              <Translate id="homepage.productPreview.description">
                Start with ready-made quizzes from the Shira library and customize
                them to the needs of your organization, or build quizzes from
                scratch.
              </Translate>
            </p>
            <Link
              className={classNames(styles.button, global.buttonDark, styles.productPreviewCta)}
              to="https://quiz.shira.app/"
            >
              <Translate id="homepage.productPreview.cta">See a sample campaign</Translate>
            </Link>
          </div>
          <img
            className={styles.wideImage}
            src={ProductPreviewImage}
            alt={translate({
              id: 'homepage.productPreview.imageAlt',
              message: 'screenshot of the Create new question dialog in Shira',
            })}
          />
        </section>

        <section className={classNames(global.row, global.center, styles.problemSection)}>
          <div className={global.sectionMaxWidth}>
            <h2>
              <Translate id="homepage.whyChoose.title">Why choose Shira?</Translate>
            </h2>

            <div className={classNames(styles.problemGrid, styles.whyChooseGrid)}>
              <div className={classNames(styles.problemCard, global.backgroundLight)}>
                <h3>
                  <Translate id="homepage.whyChoose.realistic.title">Realistic 📱</Translate>
                </h3>
                <div className={styles.whyChooseItem}>
                  <p className={styles.whyChooseItemTitle}>
                    <Translate id="homepage.whyChoose.realistic.item1.title">
                      Realistic and multichannel
                    </Translate>
                  </p>
                  <p>
                    <Translate id="homepage.whyChoose.realistic.item1.description">
                      Practice with realistic phishing scenarios across email, SMS,
                      messaging apps, and social media
                    </Translate>
                  </p>
                </div>
                <div className={styles.whyChooseItem}>
                  <p className={styles.whyChooseItemTitle}>
                    <Translate id="homepage.whyChoose.realistic.item2.title">
                      Built for how people actually work
                    </Translate>
                  </p>
                  <p>
                    <Translate id="homepage.whyChoose.realistic.item2.description">
                      Train people in the tools, languages, and communication
                      channels they use every day, and reinforce safer decisions
                      with short, practical exercises instead of one-off tests.
                    </Translate>
                  </p>
                </div>
              </div>

              <div className={classNames(styles.problemCard, global.backgroundLight)}>
                <h3>
                  <Translate id="homepage.whyChoose.effective.title">Effective 📈</Translate>
                </h3>
                <div className={styles.whyChooseItem}>
                  <p className={styles.whyChooseItemTitle}>
                    <Translate id="homepage.whyChoose.effective.item1.title">
                      Reinforce learning, not just test it
                    </Translate>
                  </p>
                  <p>
                    <Translate id="homepage.whyChoose.effective.item1.description">
                      Short, practical exercises that reinforce safer decisions
                      over time, instead of one-off simulations.
                    </Translate>
                  </p>
                </div>
                <div className={styles.whyChooseItem}>
                  <p className={styles.whyChooseItemTitle}>
                    <Translate id="homepage.whyChoose.effective.item2.title">
                      Track progress and identify knowledge gaps
                    </Translate>
                  </p>
                  <p>
                    <Translate id="homepage.whyChoose.effective.item2.description">
                      See who's improving and where the knowledge gaps are.
                    </Translate>
                  </p>
                </div>
              </div>

              <div className={classNames(styles.problemCard, global.backgroundLight)}>
                <h3>
                  <Translate id="homepage.whyChoose.easy.title">Easy to use 💨</Translate>
                </h3>
                <div className={styles.whyChooseItem}>
                  <p className={styles.whyChooseItemTitle}>
                    <Translate id="homepage.whyChoose.easy.item1.title">
                      Accessible to every member
                    </Translate>
                  </p>
                  <p>
                    <Translate id="homepage.whyChoose.easy.item1.description">
                      Make phishing education approachable for people with
                      different roles, technical backgrounds, and levels of
                      security experience.
                    </Translate>
                  </p>
                </div>
                <div className={styles.whyChooseItem}>
                  <p className={styles.whyChooseItemTitle}>
                    <Translate id="homepage.whyChoose.easy.item2.title">
                      Easy to deploy
                    </Translate>
                  </p>
                  <p>
                    <Translate id="homepage.whyChoose.easy.item2.description">
                      Build and manage training without coding or specialized IT
                      expertise.
                    </Translate>
                  </p>
                </div>
              </div>

              <div className={classNames(styles.problemCard, global.backgroundLight)}>
                <h3>
                  <Translate id="homepage.whyChoose.safe.title">Safe and secure 🔒</Translate>
                </h3>
                <div className={styles.whyChooseItem}>
                  <p className={styles.whyChooseItemTitle}>
                    <Translate id="homepage.whyChoose.safe.item1.title">
                      Privacy-friendly
                    </Translate>
                  </p>
                  <p>
                    <Translate id="homepage.whyChoose.safe.item1.description">
                      Train your team without collecting or sharing sensitive or
                      personally identifiable information.
                    </Translate>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.audienceCta}>
              <Link
                className={classNames(styles.button, global.buttonDark)}
                to="https://space.shira.app/get-started?plan=starter"
              >
                <Translate id="homepage.whyChoose.cta">
                  Start your organization's training
                </Translate>
              </Link>
            </div>
          </div>
        </section>

        <section className={classNames(global.backgroundLight, global.row, global.center, styles.problemSection)}>
          <div className={global.sectionMaxWidth}>
            <h2>
              <Translate id="homepage.audience.title">
                Designed for mission-driven organizations
              </Translate>
            </h2>
            <p>
              <Translate id="homepage.audience.subtitle">
                We created Shira for organizations with limited resources and a
                responsibility to protect the people they serve.
              </Translate>
            </p>

            <div className={classNames(styles.problemGrid, styles.whyChooseGrid)}>
              <div className={classNames(styles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="homepage.audience.education.title">Education 🎓</Translate>
                </h3>
                <p>
                  <Translate id="homepage.audience.education.description">
                    Help teachers, administrators, staff, and students recognize
                    phishing messages target school accounts, learning platforms,
                    payroll systems, and campus services.
                  </Translate>
                </p>
              </div>

              <div className={classNames(styles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="homepage.audience.healthcare.title">Healthcare 🏥</Translate>
                </h3>
                <p>
                  <Translate id="homepage.audience.healthcare.description">
                    Prepare clinical, administrative, and support teams to identify
                    suspicious messages and help protect patient information and
                    essential services.
                  </Translate>
                </p>
              </div>

              <div className={classNames(styles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="homepage.audience.nonprofits.title">Nonprofits 🌱</Translate>
                </h3>
                <p>
                  <Translate id="homepage.audience.nonprofits.description">
                    Give staff, volunteers, and distributed teams practical tools to
                    recognize phishing, donation fraud, account takeovers, and other
                    targeted attacks—without requiring a dedicated security team.
                  </Translate>
                </p>
              </div>

              <div className={classNames(styles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="homepage.audience.beyond.title">Beyond these sectors 🌍</Translate>
                </h3>
                <p>
                  <Translate id="homepage.audience.beyond.description">
                    Tailor phishing training to your organization's roles, tools,
                    languages, communication channels, and most pressing risks.
                  </Translate>
                </p>
              </div>
            </div>

            <div className={styles.audienceCta}>
              <Link
                className={classNames(styles.button, global.buttonDark)}
                to="https://space.shira.app/get-started?plan=starter"
              >
                <Translate id="homepage.audience.cta">
                  Create a quiz for your organization
                </Translate>
              </Link>
            </div>
          </div>
        </section>

        <section className={classNames(global.row, global.center, styles.context)}>
          <img
            className={classNames(styles.wideImage, styles.closingImage)}
            src={FishImage}
            alt={translate({
              id: 'homepage.closing.imageAlt',
              message: 'decorative illustration of a fish representing phishing',
            })}
          />
          <div className={styles.contextText}>
            <h2 className={styles.closingTitle}>
              <Translate id="homepage.closing.title">
                Security education should be accessible to everyone
              </Translate>
            </h2>
            <p>
              <Translate id="homepage.closing.part1">
                Shira is a product of
              </Translate>{' '}
              <Link to="https://wearehorizontal.org">Horizontal</Link>
              <Translate id="homepage.closing.part2">
                , a technology nonprofit dedicated to making online security accessible to everyone.
              </Translate>
            </p>
            <p>
              <Translate id="homepage.closing.part3">
                We built Shira because organizations—especially those without dedicated security teams—deserve practical, affordable tools to protect their teams and communities
              </Translate>
            </p>
            <Link
              className={classNames(styles.button, global.buttonDark)}
              to="https://space.shira.app/get-started?plan=starter"
            >
              <Translate id="homepage.closing.cta">
                Start your organization's training
              </Translate>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}