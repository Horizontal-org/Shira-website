import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './phishing-quizzes.module.css';
import global from '../css/custom.module.scss';
import classNames from 'classnames';
import Iframe from 'react-iframe';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, { translate } from '@docusaurus/Translate';

export default function PhishingQuizzes() {
  const { siteConfig } = useDocusaurusContext();
  const signupFormUrl = siteConfig.customFields.signupFormUrl;

  return (
    <Layout
      title={translate({
        id: 'phishingQuizzes.meta.title',
        message:  'Learn about Phishing Quizzes'
      })}
      description={translate({
        id: 'phishingQuizzes.meta.description',
        message: 'Learn about Phishing quizzes',
      })}
    >
      <main className={classNames(global.main, styles.phishingQuizzes)}>
        <meta
          name="description"
          content={translate({
            id: 'phishingQuizzes.meta.longDescription',
            message: 'Learn why phishing quizzes are more effective than simulations.'
          })}
        />

        <section
          className={classNames(
            global.backgroundDark,
            global.center,
            styles.phishingQuizzesEducation
          )}
        >
          <div
            className={classNames(
              global.row,
              global.center,
              styles.phishingTextIntro,
              global.sectionMaxWidth
            )}
          >
            <h1>
              <Translate id="phishingQuizzes.education.title">
                Why education beats simulation
              </Translate>
            </h1>

            <div className={styles.phishingQuizzesEducationText}>
              <span>
                <Translate id="phishingQuizzes.education.paragraph1">
                  Phishing simulations have become a standard component of anti-phishing training programs. These simulations involve sending employees emails that mimic the tactics used by cybercriminals to trick individuals into revealing sensitive information or clicking on malicious links. Employees are assessed based on their responses to these simulated emails, particularly whether they clicked on a link or provided any sensitive information.
                </Translate>
              </span>

              <span>
                <Translate id="phishingQuizzes.education.paragraph2">
                  However, this approach has several drawbacks and is not as effective as providing comprehensive anti-phishing education.
                </Translate>
              </span>
            </div>
          </div>

          <div className={classNames(global.center, styles.iframeWrapper)}>
            <a href="https://www.wsj.com/tech/cybersecurity/phishing-tests-the-bane-of-work-life-are-getting-meaner-76f30173">
              <img
                className={styles.phishingQuizzessEducationDesktopImage}
                src="/img/wsj.png"
                alt={translate({
                  id: 'phishingQuizzes.education.wsjAltDesktop',
                  message: 'News article from the wall street journal Phishing Tests, the Bane of Work Life, Are Getting Meaner - Researchers say the ruses, aimed at teaching gullible employees about the dangers lurking online, doesn’t even work'
                })}
              />
              <img
                className={styles.phishingQuizzessEducationMobileImage}
                src="/img/wsj_mobile.jpg"
                alt={translate({
                  id: 'phishingQuizzes.education.wsjAltMobile',
                  message: 'News article from the wall street journal Phishing Tests, the Bane of Work Life, Are Getting Meaner - Researchers say the ruses, aimed at teaching gullible employees about the dangers lurking online, doesn’t even work'
                })}
              />
            </a>
          </div>
        </section>

        <section
          className={classNames(
            global.center,
            styles.phishingProblem,
            global.sectionMaxWidth
          )}
        >
          <h3>
            <Translate id="phishingQuizzes.problem.title">
              The problem with phishing simulations
            </Translate>
          </h3>

          <p>
            <Translate id="phishingQuizzes.problem.intro">
              Phishing simulations, while widely used, come with several issues that organizations should consider:
            </Translate>
          </p>

          <ol>
            <li>
              <span className={global.bold}>
                <Translate id="phishingQuizzes.problem.anxiety.title">
                  Create anxiety and mistrust:
                </Translate>
              </span>{' '}
              <Translate id="phishingQuizzes.problem.anxiety.text">
                Users may become anxious or mistrustful of emails, even legitimate ones, which can lead to decreased productivity and increased stress.
              </Translate>
            </li>

            <li>
              <span className={global.bold}>
                <Translate id="phishingQuizzes.problem.emailFocus.title">
                  Narrow Focus on Email:
                </Translate>
              </span>{' '}
              <Translate id="phishingQuizzes.problem.emailFocus.text">
                Many phishing simulations primarily target email threats, overlooking other channels like SMS, messaging apps, or social media.
              </Translate>
            </li>

            <li>
              <span className={global.bold}>
                <Translate id="phishingQuizzes.problem.falseSecurity.title">
                  False Sense of Security:
                </Translate>
              </span>{' '}
              <Translate id="phishingQuizzes.problem.falseSecurity.text">
                If employees successfully identify simulated phishing attempts, they may develop a false sense of security.
              </Translate>
            </li>

            <li>
              <span className={global.bold}>
                <Translate id="phishingQuizzes.problem.clickRates.title">
                  Overemphasis on Click Rates:
                </Translate>
              </span>{' '}
              <Translate id="phishingQuizzes.problem.clickRates.text">
                Focusing solely on whether employees clicked on a link can overlook other important aspects of phishing awareness.
              </Translate>
            </li>

            <li>
              <span className={global.bold}>
                <Translate id="phishingQuizzes.problem.desensitize.title">
                  Desensitize users:
                </Translate>
              </span>{' '}
              <Translate id="phishingQuizzes.problem.desensitize.text">
                Repeatedly sending fake phishing emails can desensitize users to the threat.
              </Translate>
            </li>

            <li>
              <span className={global.bold}>
                <Translate id="phishingQuizzes.problem.punishment.title">
                  Focus on punishment rather than prevention:
                </Translate>
              </span>{' '}
              <Translate id="phishingQuizzes.problem.punishment.text">
                Simulated phishing emails can create a culture of fear, where users are more focused on avoiding punishment than on learning.
              </Translate>
            </li>
          </ol>

          <p>
            <Translate id="phishingQuizzes.research.text">
              Research finds that phishing simulation campaigns do not effectively train people in identifying phishing attacks.
            </Translate>{' '}
            <Link to="https://arxiv.org/pdf/2112.07498">
              <Translate id="phishingQuizzes.research.link">
                One study with 14,000 participants
              </Translate>
            </Link>{' '}
            <Translate id="phishingQuizzes.research.conclusion">
              actually showed a counterproductive effect of phishing simulations.
            </Translate>
          </p>

          <h3>
            <Translate id="phishingQuizzes.quizzes.title">
              A more effective approach: phishing quizzes
            </Translate>
          </h3>

          <p>
            <Translate id="phishingQuizzes.quizzes.description">
              Phishing quizzes provide a controlled learning environment that is more effective for skill-building than traditional phishing simulations.
            </Translate>
          </p>

          <p>
            <Translate id="phishingQuizzes.quizzes.benefitsIntro">
              Benefits include:
            </Translate>
          </p>

          <ol>
            <li>
              <span className={global.bold}>
                <Translate id="phishingQuizzes.benefits.controlled.title">
                  Controlled Learning Environment:
                </Translate>
              </span>{' '}
              <Translate id="phishingQuizzes.benefits.controlled.text">
                Phishing quizzes create a safe and low-stakes space for employees to practice their skills.
              </Translate>
            </li>

            <li>
              <span className={global.bold}>
                <Translate id="phishingQuizzes.benefits.interactive.title">
                  Interactive Engagement:
                </Translate>
              </span>{' '}
              <Translate id="phishingQuizzes.benefits.interactive.text">
                These quizzes encourage active participation and provide immediate feedback.
              </Translate>
            </li>

            <li>
              <span className={global.bold}>
                <Translate id="phishingQuizzes.benefits.coverage.title">
                  Coverage of Diverse Phishing Tactics:
                </Translate>
              </span>{' '}
              <Translate id="phishingQuizzes.benefits.coverage.text">
                Phishing quizzes can incorporate SMS, social media, and voice phishing scenarios.
              </Translate>
            </li>

            <li>
              <span className={global.bold}>
                <Translate id="phishingQuizzes.benefits.confidence.title">
                  Confidence Building:
                </Translate>
              </span>{' '}
              <Translate id="phishingQuizzes.benefits.confidence.text">
                Employees learn from mistakes in a supportive environment.
              </Translate>
            </li>

            <li>
              <span className={global.bold}>
                <Translate id="phishingQuizzes.benefits.tailored.title">
                  Tailored Learning Objectives:
                </Translate>
              </span>{' '}
              <Translate id="phishingQuizzes.benefits.tailored.text">
                Quizzes can be customized to focus on specific skills and knowledge gaps.
              </Translate>
            </li>
          </ol>

          <div className={styles.alignedCenter}>
            <Link className={global.buttonDark} to={signupFormUrl}>
              <Translate id="phishingQuizzes.cta">
                Get started
              </Translate>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
