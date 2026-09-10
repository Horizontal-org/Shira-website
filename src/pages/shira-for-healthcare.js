import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './shira-for-industries.module.css';
import indexStyles from './index.module.css';
import global from '../css/custom.module.scss';
import classNames from 'classnames';
import Translate, { translate } from '@docusaurus/Translate';
import useSignupUrl from '@site/src/hooks/useSignupUrl';
import FishImage from "@site/static/img/fish.png";
import ClosingFishImage from "@site/static/img/fish-bubbles.png";
import NursePractitionerQuizImage from "@site/static/img/quiz-healthcare.png";
import ProductPreviewImage from "@site/static/img/feature-create-new-question.png";
import ZoomableImage from '@site/src/components/ZoomableImage';

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
          message: 'How can healthcare organizations stop phishing? Shira helps clinical, administrative, and support teams recognize and stop phishing across email, SMS, messaging apps, and social media.',
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

            <Link className={classNames(global.buttonDark, styles.wideCta)} to={getSignupUrl()}>
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
                  {translate(
                    {
                      id: 'healthcare.problem.identity.description',
                      message: '{statLink} faced an identity breach last year.',
                    },
                    {
                      statLink: (
                        <Link to="https://www.paloaltonetworks.com/idira/idira-identity-security-landscape">
                          <Translate id="healthcare.problem.identity.description.link">
                            Nine in ten organizations
                          </Translate>
                        </Link>
                      ),
                    }
                  )}
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="healthcare.problem.method.title">
                    Phishing remains a leading attack method
                  </Translate>
                </h3>
                <p>
                  {translate(
                    {
                      id: 'healthcare.problem.method.description',
                      message: 'Phishing is one of the most common ways attackers gain access to organizations and serves as the primary entry point for {statLink}.',
                    },
                    {
                      statLink: (
                        <Link to="https://www.gov.uk/government/statistics/cyber-security-breaches-survey-2025/cyber-security-breaches-survey-2025">
                          <Translate id="healthcare.problem.method.description.link">
                            more than 75% of cyberattacks
                          </Translate>
                        </Link>
                      ),
                    }
                  )}
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

        <section className={classNames(global.row, global.center, indexStyles.context)}>
          <ZoomableImage
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

        <section className={classNames(global.backgroundDark, styles.createdForSection)}>
          <div className={classNames(global.row, global.center, styles.createdFor)}>
            <div className={styles.createdForTitle}>
              <h1>
                <Translate id="healthcare.createdFor.title">
                  Built for healthcare organizations
                </Translate>
              </h1>
            </div>
            <div className={styles.createdForText}>
              <p>
                {translate(
                  {
                    id: 'healthcare.createdFor.description1',
                    message: 'Healthcare teams protect more than systems and data. They protect patient information, essential services, and people who rely on them every day. The human element is {statLink}, more than in almost any other industry. Training your team is one of the highest-leverage ways to close that gap.',
                  },
                  {
                    statLink: (
                      <Link
                        className={styles.statLinkOnDark}
                        to="https://www.verizon.com/business/resources/reports/dbir/"
                      >
                        <Translate id="healthcare.createdFor.description1.link">
                          involved in 54% of healthcare data breaches
                        </Translate>
                      </Link>
                    ),
                  }
                )}
              </p>
              <p>
                <Translate id="healthcare.createdFor.description2">
                  Shira gives healthcare organizations practical, accessible
                  phishing education designed for the way teams actually
                  work—with limited resources, busy schedules, and
                  communication happening across multiple channels.
                </Translate>
              </p>
              <p>
                <Translate id="healthcare.createdFor.description3">
                  We have more than a decade of experience building tools that help make people and organizations safer online.
                </Translate>
              </p>
              <Link
                className={styles.secondaryButton}
                to="https://quiz.shira.app/"
              >
                <Translate id="healthcare.createdFor.cta">
                  Try a sample healthcare campaign
                </Translate>
              </Link>
            </div>
          </div>
        </section>

        <section className={classNames(global.row, global.center, indexStyles.context)}>
          <div className={classNames(indexStyles.contextText, indexStyles.productPreviewText)}>
            <h2>
              <Translate id="healthcare.buildProgram.title">
                Build a phishing defense program in minutes
              </Translate>
            </h2>
            <p>
              <Translate id="healthcare.buildProgram.description1">
                Start with ready-made quizzes from the Shira library and
                customize them for your organization, or build quizzes
                from scratch.
              </Translate>
            </p>
            <p>
              <Translate id="healthcare.buildProgram.description2">
                Create training for the situations your teams encounter
                every day, including fake EHR or lab-result notifications,
                phishing telehealth invites, fake vendor invoices, urgent
                executive messages, payroll fraud, patient-information
                requests, and compromised accounts.
              </Translate>
            </p>
            <Link
              className={classNames(global.buttonDark, indexStyles.productPreviewCta, styles.wideCta)}
              to={getSignupUrl()}
            >
              <Translate id="healthcare.buildProgram.cta">
                Start your organization's training
              </Translate>
            </Link>
          </div>
          <ZoomableImage
            className={indexStyles.wideImage}
            src={ProductPreviewImage}
            alt={translate({
              id: 'healthcare.buildProgram.imageAlt',
              message: 'screenshot of the Create new question dialog in Shira',
            })}
          />
        </section>

        <section className={classNames(global.row, global.center, indexStyles.problemSection)}>
          <div className={global.sectionMaxWidth}>
            <h2>
              <Translate id="healthcare.whyChoose.title">Why choose Shira?</Translate>
            </h2>

            <div className={classNames(indexStyles.problemGrid, indexStyles.whyChooseGrid)}>
              <div className={classNames(indexStyles.problemCard, global.backgroundLight)}>
                <h3>
                  <Translate id="healthcare.whyChoose.realistic.title">
                    Realistic and multichannel 📱
                  </Translate>
                </h3>
                <p>
                  <Translate id="healthcare.whyChoose.realistic.description1">
                    Attacks that reach people outside of email, through SMS, 
                    WhatsApp or social media, succeed at higher rates than traditional 
                    email phishing. Training only for the inbox leaves that gap open.
                  </Translate>
                </p>
                <p>
                  <Translate id="healthcare.whyChoose.realistic.description2">
                    Practice with realistic phishing scenarios across email, SMS, 
                    messaging apps, and social media. Train people in the tools, 
                    languages, and communication channels they use every day—not just in a simulated inbox.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLight)}>
                <h3>
                  <Translate id="healthcare.whyChoose.workflows.title">
                    Built for healthcare workflows 👩🏾‍⚕️
                  </Translate>
                </h3>
                <p>
                  <Translate id="healthcare.whyChoose.workflows.description1">
                    Create exercises for clinical staff, front-desk teams,
                    billing departments, administrators, support staff,
                    contractors, and volunteers.
                  </Translate>
                </p>
                <p>
                  <Translate id="healthcare.whyChoose.workflows.description2">
                    Tailor training to the systems, roles, and risks that matter most to your organization. 
                    Write scenarios in your own words, referencing the systems and situations your teams actually deal with.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLight)}>
                <h3>
                  <Translate id="healthcare.whyChoose.reinforce.title">
                    Reinforce learning over time ⏱️
                  </Translate>
                </h3>
                <p>
                  <Translate id="healthcare.whyChoose.reinforce.description1">
                    Short, practical exercises help people recognize
                    warning signs and make safer decisions repeatedly.
                  </Translate>
                </p>
                <p>
                  <Translate id="healthcare.whyChoose.reinforce.description2">
                    Shira supports ongoing education instead of relying on
                    one-off tests that measure only a single moment.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLight)}>
                <h3>
                  <Translate id="healthcare.whyChoose.track.title">
                    Track progress and identify knowledge gaps 📈
                  </Translate>
                </h3>
                <p>
                  <Translate id="healthcare.whyChoose.track.description1">
                    See who is improving, understand which topics need
                    more attention, and identify knowledge gaps across
                    teams and roles.
                  </Translate>
                </p>
                <p>
                  <Translate id="healthcare.whyChoose.track.description2">
                    Use progress insights to focus your training where it
                    can have the greatest impact.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLight)}>
                <h3>
                  <Translate id="healthcare.whyChoose.accessible.title">
                    Accessible to every member of your organization 📖
                  </Translate>
                </h3>
                <p>
                  <Translate id="healthcare.whyChoose.accessible.description1">
                    Make phishing education approachable for people with
                    different roles, technical backgrounds, schedules, and
                    levels of security experience.
                  </Translate>
                </p>
                <p>
                  <Translate id="healthcare.whyChoose.accessible.description2">
                    Clear, practical exercises help everyone participate.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLight)}>
                <h3>
                  <Translate id="healthcare.whyChoose.deploy.title">
                    Easy to deploy 👩🏽‍💻
                  </Translate>
                </h3>
                <p>
                  <Translate id="healthcare.whyChoose.deploy.description1">
                    Build and manage training within minutes and without
                    coding or specialized IT expertise.
                  </Translate>
                </p>
                <p>
                  <Translate id="healthcare.whyChoose.deploy.description2">
                    Shira helps small security teams and
                    resource-constrained organizations create a practical
                    phishing education program quickly.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLight)}>
                <h3>
                  <Translate id="healthcare.whyChoose.privacy.title">
                    Privacy-friendly 🔒
                  </Translate>
                </h3>
                <p>
                  <Translate id="healthcare.whyChoose.privacy.description">
                    Shira doesn't collect, process, or store any Protected
                    Health Information (PHI). Training scenarios use
                    simulated content, not real patient or employee data,
                    so you can train your team without adding new PHI
                    exposure.
                  </Translate>
                </p>
                <p>
                  <Link to="/trust-security">
                    <Translate id="healthcare.whyChoose.privacy.cta">
                      Read our trust and security details.
                    </Translate>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={classNames(global.backgroundLight, global.row, global.center, indexStyles.problemSection)}>
          <div className={global.sectionMaxWidth}>
            <h2>
              <Translate id="healthcare.training.title">
                Training for every healthcare team
              </Translate>
            </h2>

            <div className={classNames(indexStyles.problemGrid, indexStyles.whyChooseGrid)}>
              <div className={classNames(indexStyles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="healthcare.training.clinical.title">
                    Clinical teams 🧑🏾‍⚕️
                  </Translate>
                </h3>
                <p>
                  <Translate id="healthcare.training.clinical.description">
                    Help clinicians recognize suspicious requests, unusual
                    links—including EHR notifications, lab results, or
                    telehealth links—fake login pages, and messages
                    impersonating colleagues, patients, vendors, or
                    trusted healthcare services.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="healthcare.training.administrative.title">
                    Administrative teams 🧑🏼‍💼
                  </Translate>
                </h3>
                <p>
                  <Translate id="healthcare.training.administrative.description">
                    Prepare administrative staff to identify payroll
                    fraud, vendor and payer impersonation, account
                    takeover attempts, and requests involving patient or
                    employee information.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="healthcare.training.support.title">
                    Support and operations teams 👷🏻‍♂️
                  </Translate>
                </h3>
                <p>
                  <Translate id="healthcare.training.support.description">
                    Help front-desk, facilities, billing, IT, and
                    operations staff spot phishing attempts that could
                    disrupt essential services or expose sensitive
                    information.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="healthcare.training.distributed.title">
                    Distributed and partner teams 🌎
                  </Translate>
                </h3>
                <p>
                  <Translate id="healthcare.training.distributed.description">
                    Give remote employees, contractors, volunteers, and
                    partner organizations practical tools to recognize
                    suspicious communication wherever they work.
                  </Translate>
                </p>
              </div>
            </div>

            <div className={indexStyles.audienceCta}>
              <Link
                className={classNames(global.buttonDark, styles.wideCta)}
                to={getSignupUrl()}
              >
                <Translate id="healthcare.training.cta">
                  Create a quiz for your team
                </Translate>
              </Link>
            </div>
          </div>
        </section>

        <section className={classNames(global.row, global.center, indexStyles.context)}>
          <img
            className={classNames(indexStyles.wideImage, indexStyles.closingImage)}
            src={ClosingFishImage}
            alt={translate({
              id: 'healthcare.closing.imageAlt',
              message: 'decorative illustration of a fish representing phishing',
            })}
          />
          <div className={indexStyles.contextText}>
            <h2 className={indexStyles.closingTitle}>
              <Translate id="healthcare.closing.title">
                Security education should be accessible to everyone
              </Translate>
            </h2>
            <p>
              <Translate id="healthcare.closing.part1">
                Shira is a product of
              </Translate>{' '}
              <Link to="https://wearehorizontal.org">Horizontal</Link>
              <Translate id="healthcare.closing.part2">
                , a technology nonprofit dedicated to making online security accessible to everyone.
              </Translate>
            </p>
            <p>
              <Translate id="healthcare.closing.part3">
                We built Shira because organizations—especially those without dedicated security teams—deserve practical, affordable tools to protect their teams, patients, and communities.
              </Translate>
            </p>
            <Link
              className={classNames(global.buttonDark, styles.wideCta)}
              to={getSignupUrl()}
            >
              <Translate id="healthcare.closing.cta">
                Start your organization's training
              </Translate>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}