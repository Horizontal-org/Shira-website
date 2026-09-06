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
import NursePractitionerQuizImage from "@site/static/img/healthcare-nurse-quiz.png";
import ProductPreviewImage from "@site/static/img/feature-create-new-question.png";

export default function ShiraForEducation() {
  const getSignupUrl = useSignupUrl();

  return (
    <Layout
      title={translate({
        id: 'education.meta.title',
        message: 'Shira for Education',
      })}
      description={translate({
        id: 'education.meta.description',
        message: 'Make your education team phishing-resistant.',
      })}
    >
      <meta
        name="description"
        content={translate({
          id: 'education.meta.longDescription',
          message: 'Shira helps clinical, administrative, and support teams recognize and stop phishing across email, SMS, messaging apps, and social media.',
        })}
      />

      <main className={global.main}>
        <section className={styles.hero}>
          <img
            className={styles.heroImage}
            src={FishImage}
            alt={translate({
              id: 'education.hero.imageAlt',
              message: 'Illustration of a fish representing phishing',
            })}
          />

          <div className={styles.heroText}>
            <h2>
              {translate(
                {
                  id: 'education.hero.title',
                  message: 'Make your school or institution {phishingResistant}',
                },
                {
                  phishingResistant: (
                    <span className={styles.underline}>
                      <Translate id="education.hero.title.underline">
                        phishing-resistant
                      </Translate>
                    </span>
                  ),
                }
              )}
            </h2>

            <p>
              <Translate id="education.hero.subtitle">
                Shira helps faculty, administrative staff, and IT teams recognize and stop phishing
                recognize and stop phishing across email, SMS, messaging
                apps, and social media.
              </Translate>
            </p>

            <p>
              <Translate id="education.hero.description">
                Create training tailored to your institution, measure
                progress, and strengthen everyday security habits—without
                coding or specialized IT expertise.
              </Translate>
            </p>

            <Link className={classNames(global.buttonDark, styles.wideCta)} to={getSignupUrl()}>
              <Translate id="education.hero.cta.primary">
                Start your institution's training
              </Translate>
            </Link>
          </div>
        </section>

        <section className={classNames(global.backgroundLight, global.row, global.center, indexStyles.problemSection)}>
          <div className={global.sectionMaxWidth}>
            <h2>
              <Translate id="education.problem.title">
                Phishing can reach your team anywhere
              </Translate>
            </h2>

            <p>
              <Translate id="education.problem.subtitle">
                A suspicious message might arrive in a staff inbox, a department group chat, a text message, 
                or even a social media account. It may look like a student-portal alert, an enrollment or 
                financial-aid notification, or a message from a colleague, a vendor, IT support, or a student.
              </Translate>
            </p>

            <div className={indexStyles.problemGrid}>
              <div className={classNames(indexStyles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="education.problem.identity.title">
                    Educational institutions face persistent identity risks
                  </Translate>
                </h3>
                <p>
                  {translate(
                    {
                      id: 'education.problem.identity.description',
                      message: 'Stolen credentials appear in {statLink} involving hacking actions in the education sector.',
                    },
                    {
                      statLink: (
                        <Link to="https://www.verizon.com/business/resources/reports/2026-dbir-data-breach-investigations-report.pdf">
                          <Translate id="education.problem.identity.description.link">
                            65% of breaches
                          </Translate>
                        </Link>
                      ),
                    }
                  )}
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="education.problem.method.title">
                    The human element is the biggest gap
                  </Translate>
                </h3>
                <p>
                  {translate(
                    {
                      id: 'education.problem.method.description',
                      message: '{statLink} data breaches—more than in almost any other industry.',
                    },
                    {
                      statLink: (
                        <Link to="https://www.verizon.com/business/resources/reports/2026-dbir-data-breach-investigations-report.pdf">
                          <Translate id="education.problem.method.description.link">
                            The human element is involved in 68% of education sector
                          </Translate>
                        </Link>
                      ),
                    }
                  )}
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="education.problem.channels.title">
                    Phishing follows the way people communicate
                  </Translate>
                </h3>
                <p>
                  <Translate id="education.problem.channels.description">
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
          <img
            className={indexStyles.wideImage}
            src={NursePractitionerQuizImage}
            alt={translate({
              id: 'education.withShira.imageAlt',
              message: 'screenshot of a Shira phishing quiz for nurse practitioners',
            })}
          />
          <div className={indexStyles.contextText}>
            <h2>
              <Translate id="education.withShira.title">With Shira, you can…</Translate>
            </h2>
            <ol>
              <li>
                <Translate id="education.withShira.item1">
                  Create training tailored to your institution
                </Translate>
              </li>
              <li>
                <Translate id="education.withShira.item2">Measure progress</Translate>
              </li>
              <li>
                <Translate id="education.withShira.item3">
                  Strengthen everyday security habits
                </Translate>
              </li>
            </ol>
            <p>
              <Translate id="education.withShira.footer">
                All without coding or specialized IT expertise.
              </Translate>
            </p>
          </div>
        </section>

        <section className={classNames(global.backgroundDark, styles.createdForSection)}>
          <div className={classNames(global.row, global.center, styles.createdFor)}>
            <div className={styles.createdForTitle}>
              <h1>
                <Translate id="education.createdFor.title">
                  Built for education institutions
                </Translate>
              </h1>
            </div>
            <div className={styles.createdForText}>
                             <p>
                <Translate id="education.createdFor.description1">
                  Educational institutions protect more than systems and data.
                  They protect students, staff, and the trust of the families
                  and communities that depend on them.
                </Translate>
              </p>
              <p>
                <Translate id="education.createdFor.description2">
                  Education has one of the highest breach rates of any sector,
                  with 79% of reported security incidents resulting in a
                  confirmed breach. Unlike organizations with dedicated
                  security teams, many educational institutions operate with
                  limited IT resources—training your staff is one of the
                  highest-leverage ways to close that gap.
                </Translate>
              </p>
              <p>
                <Translate id="education.createdFor.description3">
                  Shira gives education organizations practical, accessible
                  phishing education designed for the way school and
                  university teams actually work—with limited resources,
                  busy schedules, and communication happening across
                  multiple channels. We have more than a decade of experience 
                  building tools that help make people and organizations safer online.
                </Translate>
              </p>
              <Link
                className={styles.secondaryButton}
                to="https://quiz.shira.app/"
              >
                <Translate id="education.createdFor.cta">
                  Try a sample education campaign
                </Translate>
              </Link>
            </div>
          </div>
        </section>

        <section className={classNames(global.row, global.center, indexStyles.context)}>
          <div className={classNames(indexStyles.contextText, indexStyles.productPreviewText)}>
            <h2>
              <Translate id="education.buildProgram.title">
                Build a phishing defense program in minutes
              </Translate>
            </h2>
            <p>
              <Translate id="education.buildProgram.description1">
                Start with ready-made quizzes from the Shira library and
                customize them for your institution, or build quizzes
                from scratch.
              </Translate>
            </p>
            <p>
              <Translate id="education.buildProgram.description2">
                Create training for the situations your teams encounter every day, including 
                fake student-portal or LMS notifications, phishing financial-aid or tuition messages, 
                fake vendor invoices, urgent messages impersonating administrators, payroll fraud, 
                requests involving student or staff records, and compromised accounts.
              </Translate>
            </p>
            <Link
              className={classNames(global.buttonDark, indexStyles.productPreviewCta, styles.wideCta)}
              to={getSignupUrl()}
            >
              <Translate id="education.buildProgram.cta">
                Start your institution's training
              </Translate>
            </Link>
          </div>
          <img
            className={indexStyles.wideImage}
            src={ProductPreviewImage}
            alt={translate({
              id: 'education.buildProgram.imageAlt',
              message: 'screenshot of the Create new question dialog in Shira',
            })}
          />
        </section>

        <section className={classNames(global.row, global.center, indexStyles.problemSection)}>
          <div className={global.sectionMaxWidth}>
            <h2>
              <Translate id="education.whyChoose.title">Why choose Shira?</Translate>
            </h2>

            <div className={classNames(indexStyles.problemGrid, indexStyles.whyChooseGrid)}>
              <div className={classNames(indexStyles.problemCard, global.backgroundLight)}>
                <h3>
                  <Translate id="education.whyChoose.realistic.title">
                    Realistic and multichannel 📱
                  </Translate>
                </h3>
                <p>
                  <Translate id="education.whyChoose.realistic.description1">
                    Attacks that reach people outside of email, through SMS, 
                    WhatsApp or social media, succeed at higher rates than traditional 
                    email phishing. Training only for the inbox leaves that gap open.
                  </Translate>
                </p>
                <p>
                  <Translate id="education.whyChoose.realistic.description2">
                    Practice with realistic phishing scenarios across email, SMS, 
                    messaging apps, and social media. Train people in the tools, 
                    languages, and communication channels they use every day—not just in a simulated inbox.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLight)}>
                <h3>
                  <Translate id="education.whyChoose.workflows.title">
                    Built for education workflows 👩🏾‍🏫
                  </Translate>
                </h3>
                <p>
                  <Translate id="education.whyChoose.workflows.description1">
                    Create exercises for faculty, administrative staff, IT, contractors, and support teams.
                  </Translate>
                </p>
                <p>
                  <Translate id="education.whyChoose.workflows.description2">
                    Tailor training to the systems, roles, and risks that matter most to your institution. 
                    Write scenarios in your own words, referencing the systems and situations your teams actually deal with.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLight)}>
                <h3>
                  <Translate id="education.whyChoose.reinforce.title">
                    Reinforce learning over time ⏱️
                  </Translate>
                </h3>
                <p>
                  <Translate id="education.whyChoose.reinforce.description1">
                    Short, practical exercises help people recognize
                    warning signs and make safer decisions repeatedly.
                  </Translate>
                </p>
                <p>
                  <Translate id="education.whyChoose.reinforce.description2">
                    Shira supports ongoing education instead of relying on
                    one-off tests that measure only a single moment.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLight)}>
                <h3>
                  <Translate id="education.whyChoose.track.title">
                    Track progress and identify knowledge gaps 📈
                  </Translate>
                </h3>
                <p>
                  <Translate id="education.whyChoose.track.description1">
                    See who is improving, understand which topics need
                    more attention, and identify knowledge gaps across
                    teams and roles.
                  </Translate>
                </p>
                <p>
                  <Translate id="education.whyChoose.track.description2">
                    Use progress insights to focus your training where it
                    can have the greatest impact.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLight)}>
                <h3>
                  <Translate id="education.whyChoose.accessible.title">
                    Accessible to every member of your institution 📖
                  </Translate>
                </h3>
                <p>
                  <Translate id="education.whyChoose.accessible.description1">
                    Make phishing education approachable for people with
                    different roles, technical backgrounds, schedules, and
                    levels of security experience.
                  </Translate>
                </p>
                <p>
                  <Translate id="education.whyChoose.accessible.description2">
                    Clear, practical exercises help everyone participate.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLight)}>
                <h3>
                  <Translate id="education.whyChoose.deploy.title">
                    Easy to deploy 👩🏽‍💻
                  </Translate>
                </h3>
                <p>
                  <Translate id="education.whyChoose.deploy.description1">
                    Build and manage training within minutes and without
                    coding or specialized IT expertise.
                  </Translate>
                </p>
                <p>
                  <Translate id="education.whyChoose.deploy.description2">
                    Shira helps small security teams and
                    resource-constrained organizations create a practical
                    phishing education program quickly.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLight)}>
                <h3>
                  <Translate id="education.whyChoose.privacy.title">
                    Privacy-friendly 🔒
                  </Translate>
                </h3>
                <p>
                  <Translate id="education.whyChoose.privacy.description">
                    Shira doesn't collect, process, or store student or staff records. 
                    Training scenarios use simulated content, not real institutional data, 
                    so you can train your team without adding new exposure.
                  </Translate>
                </p>
                <p>
                  <Link to="/trust-security">
                    <Translate id="education.whyChoose.privacy.cta">
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
              <Translate id="education.training.title">
                Help your team protect the students in your care
              </Translate>
            </h2>

            <div className={classNames(indexStyles.problemGrid, indexStyles.whyChooseGrid)}>
              <div className={classNames(indexStyles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="education.training.clinical.title">
                    Faculty and academic staff 🧑🏻‍🏫
                  </Translate>
                </h3>
                <p>
                  <Translate id="education.training.clinical.description">
                    Help faculty recognize suspicious requests, unusual links—including 
                    fake student-portal or LMS notifications—fake login pages, and messages impersonating 
                    colleagues, administrators, students, or vendors.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="education.training.administrative.title">
                    Administrative teams 👨🏾‍💼
                  </Translate>
                </h3>
                <p>
                  <Translate id="education.training.administrative.description">
                    Prepare administrative staff to identify payroll fraud, 
                    vendor impersonation, account takeover attempts, and 
                    requests involving student or staff records.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="education.training.support.title">
                    Support and operations teams 👷🏻‍♂️
                  </Translate>
                </h3>
                <p>
                  <Translate id="education.training.support.description">
                    Help IT, facilities, and operations staff spot phishing 
                    attempts that could disrupt essential services or expose sensitive information.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="education.training.distributed.title">
                    Distributed and partner teams 🌎
                  </Translate>
                </h3>
                <p>
                  <Translate id="education.training.distributed.description">
                    Give contractors, remote staff, and partner organizations 
                    practical tools to recognize suspicious communication wherever they work.
                  </Translate>
                </p>
              </div>
            </div>

            <div className={indexStyles.audienceCta}>
              <Link
                className={classNames(global.buttonDark, styles.wideCta)}
                to={getSignupUrl()}
              >
                <Translate id="education.training.cta">
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
              id: 'education.closing.imageAlt',
              message: 'decorative illustration of a fish representing phishing',
            })}
          />
          <div className={indexStyles.contextText}>
            <h2 className={indexStyles.closingTitle}>
              <Translate id="education.closing.title">
                Security education should be accessible to everyone
              </Translate>
            </h2>
            <p>
              <Translate id="education.closing.part1">
                Shira is a product of
              </Translate>{' '}
              <Link to="https://wearehorizontal.org">Horizontal</Link>
              <Translate id="education.closing.part2">
                , a technology nonprofit dedicated to making online security accessible to everyone.
              </Translate>
            </p>
            <p>
              <Translate id="education.closing.part3">
                We built Shira because organizations—especially those without dedicated security teams—deserve practical, affordable tools to protect their teams, patients, and communities.
              </Translate>
            </p>
            <Link
              className={classNames(global.buttonDark, styles.wideCta)}
              to={getSignupUrl()}
            >
              <Translate id="education.closing.cta">
                Start your organization's training
              </Translate>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}