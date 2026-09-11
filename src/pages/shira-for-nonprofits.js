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
import NonprofitQuizImage from "@site/static/img/quiz-nonprofit.png";
import ProductPreviewImage from "@site/static/img/feature-create-new-question.png";
import ZoomableImage from '@site/src/components/ZoomableImage';

export default function ShiraForNonprofits() {
  const getSignupUrl = useSignupUrl();

  return (
    <Layout
      title={translate({
        id: 'nonprofits.meta.title',
        message: 'Shira for Charities and Nonprofits',
      })}
      description={translate({
        id: 'nonprofits.meta.description',
        message: 'Make your charity organization and nonprofit team phishing-resistant.',
      })}
    >
      <meta
        name="description"
        content={translate({
          id: 'nonprofits.meta.longDescription',
          message: 'How can nonprofits and charities stop phishing? Shira builds fast, no-code security awareness training for program, admin, and volunteer teams.',
        })}
      />

      <main className={global.main}>
        <section className={styles.hero}>
          <img
            className={styles.heroImage}
            src={FishImage}
            alt={translate({
              id: 'nonprofits.hero.imageAlt',
              message: 'Illustration of a fish representing phishing',
            })}
          />

          <div className={styles.heroText}>
            <h2>
              {translate(
                {
                  id: 'nonprofits.hero.title',
                  message: 'Protect your donor trust {fromPshishing}',
                },
                {
                  fromPshishing: (
                    <span className={styles.underline}>
                      <Translate id="nonprofits.hero.title.underline">
                        from phishing
                      </Translate>
                    </span>
                  ),
                }
              )}
            </h2>

            <p>
              <Translate id="nonprofits.hero.subtitle">
                Shira helps fundraising, program, finance, and volunteer teams 
                recognize and stop phishing across email, SMS, messaging apps, and social media.
              </Translate>
            </p>

            <p>
              <Translate id="nonprofits.hero.description">
                Create training tailored to your organization, measure progress, 
                and strengthen everyday security habits, without coding or specialized IT expertise.
              </Translate>
            </p>

            <Link className={classNames(global.buttonDark, styles.wideCta)} to={getSignupUrl()}>
              <Translate id="nonprofits.hero.cta.primary">
                Start your organization's training
              </Translate>
            </Link>
          </div>
        </section>

        <section className={classNames(global.backgroundLight, global.row, global.center, indexStyles.problemSection)}>
          <div className={global.sectionMaxWidth}>
            <h2>
              <Translate id="nonprofits.problem.title">
                Phishing can reach your team anywhere
              </Translate>
            </h2>

            <p>
              <Translate id="nonprofits.problem.subtitle">
                A suspicious message might arrive in a fundraising inbox, a volunteer group chat, 
                a text message, or a social media account. It may look like a donation receipt, 
                a grant approval, or a message from a colleague, a vendor, a board member, or a major donor.
              </Translate>
            </p>

            <div className={indexStyles.problemGrid}>
            <div className={classNames(indexStyles.problemCard, global.backgroundLightest)}>
  <h3>
    <Translate id="nonprofits.problem.identity.title">
      Nonprofits face the highest attack rate of any sector
    </Translate>
  </h3>
  <p>
    {translate(
      {
        id: 'nonprofits.problem.identity.description',
        message: 'Fraudulent login attempts against nonprofits made up {statLink} last year, more than any other industry. Much of that starts with a stolen password, and phishing remains the most common way attackers get one.',
      },
      {
        statLink: (
          <Link to="https://www.okta.com/content/dam/resources/en_us/whitepapers/nonprofits-at-work-2026.pdf">
            <Translate id="nonprofits.problem.identity.description.link">
              78% of the sector's total authentications
            </Translate>
          </Link>
        ),
      }
    )}
  </p>
</div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="nonprofits.problem.method.title">
                    Phishing remains a leading attack method
                  </Translate>
                </h3>
                <p>
                  {translate(
                    {
                      id: 'nonprofits.problem.method.description',
                      message: 'Phishing remains one of the most common ways attackers gain access to organizations. Among charities that experienced any breach or attack, phishing was the {statLink}.',
                    },
                    {
                      statLink: (
                        <Link to="https://www.gov.uk/government/statistics/cyber-security-breaches-survey-2025/cyber-security-breaches-survey-2025">
                          <Translate id="nonprofits.problem.method.description.link">
                            most prevalent type, affecting 86%.
                          </Translate>
                        </Link>
                      ),
                    }
                  )}
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="nonprofits.problem.channels.title">
                    Phishing follows the way people communicate
                  </Translate>
                </h3>
                <p>
                  <Translate id="nonprofits.problem.channels.description">
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
            src={NonprofitQuizImage}
            alt={translate({
              id: 'nonprofits.withShira.imageAlt',
              message: 'screenshot of a Shira phishing quiz for nonprofit staff',
            })}
          />
          <div className={indexStyles.contextText}>
            <h2>
              <Translate id="nonprofits.withShira.title">With Shira, you can…</Translate>
            </h2>
            <ol>
              <li>
                <Translate id="nonprofits.withShira.item1">
                  Create training tailored to your organization
                </Translate>
              </li>
              <li>
                <Translate id="nonprofits.withShira.item2">Measure progress</Translate>
              </li>
              <li>
                <Translate id="nonprofits.withShira.item3">
                  Strengthen everyday security habits
                </Translate>
              </li>
            </ol>
            <p>
              <Translate id="nonprofits.withShira.footer">
                All without coding or specialized IT expertise.
              </Translate>
            </p>
          </div>
        </section>

        <section className={classNames(global.backgroundDark, styles.createdForSection)}>
          <div className={classNames(global.row, global.center, styles.createdFor)}>
            <div className={styles.createdForTitle}>
              <h1>
                <Translate id="nonprofits.createdFor.title">
                  Built for nonprofits and charities
                </Translate>
              </h1>
            </div>
            <div className={styles.createdForText}>
              <p>
                <Translate id="nonprofits.createdFor.description1">
                    Nonprofits protect more than systems and data. They protect the donors, volunteers, 
                    and communities who trust them with their support. With limited resources and high trust, 
                    nonprofits present an ideal target for cybercriminals seeking to exploit vulnerabilities.
                </Translate>
              </p>
              <p>
                <Translate id="nonprofits.createdFor.description2">
                  Shira gives nonprofits practical, accessible phishing education designed 
                  for the way these teams actually work: small staffs, large volunteer networks, 
                    tight budgets, and communication happening across multiple channels.
                </Translate>
              </p>
              <p>
                <Translate id="nonprofits.createdFor.description3">
                  We have more than a decade of experience building tools that help make people and organizations safer online.
                </Translate>
              </p>
              <Link
                className={styles.secondaryButton}
                to="https://quiz.shira.app/"
              >
                <Translate id="nonprofits.createdFor.cta">
                  Try a sample nonprofit campaign
                </Translate>
              </Link>
            </div>
          </div>
        </section>

        <section className={classNames(global.row, global.center, indexStyles.context)}>
          <div className={classNames(indexStyles.contextText, indexStyles.productPreviewText)}>
            <h2>
              <Translate id="nonprofits.buildProgram.title">
                Build a phishing defense program in minutes
              </Translate>
            </h2>
            <p>
              <Translate id="nonprofits.buildProgram.description1">
                Start with ready-made quizzes from the Shira library and
                customize them for your organization, or build quizzes
                from scratch.
              </Translate>
            </p>
            <p>
              <Translate id="nonprofits.buildProgram.description2">
                Create training for the situations your teams encounter
                every day, including fake donor management alerts,
                phishing grant application invites, fake vendor invoices,
                urgent executive messages, payroll fraud,
                donor-information requests, and compromised accounts.
              </Translate>
            </p>
            <Link
              className={classNames(global.buttonDark, indexStyles.productPreviewCta, styles.wideCta)}
              to={getSignupUrl()}
            >
              <Translate id="nonprofits.buildProgram.cta">
                Start your organization's training
              </Translate>
            </Link>
          </div>
          <ZoomableImage
            className={indexStyles.wideImage}
            src={ProductPreviewImage}
            alt={translate({
              id: 'nonprofits.buildProgram.imageAlt',
              message: 'screenshot of the Create new question dialog in Shira',
            })}
          />
        </section>

        <section className={classNames(global.row, global.center, indexStyles.problemSection)}>
          <div className={global.sectionMaxWidth}>
            <h2>
              <Translate id="nonprofits.whyChoose.title">Why choose Shira?</Translate>
            </h2>

            <div className={classNames(indexStyles.problemGrid, indexStyles.whyChooseGrid)}>
              <div className={classNames(indexStyles.problemCard, global.backgroundLight)}>
                <h3>
                  <Translate id="nonprofits.whyChoose.realistic.title">
                    Realistic and multichannel
                  </Translate>{' '}📱
                </h3>
                <p>
                  <Translate id="nonprofits.whyChoose.realistic.description1">
                    Attacks that reach people outside of email, through SMS, 
                    WhatsApp or social media, succeed at higher rates than traditional 
                    email phishing. Training only for the inbox leaves that gap open.
                  </Translate>
                </p>
                <p>
                  <Translate id="nonprofits.whyChoose.realistic.description2">
                    Practice with realistic phishing scenarios across email, SMS, 
                    messaging apps, and social media. Train people in the tools, 
                    languages, and communication channels they use every day—not just in a simulated inbox.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLight)}>
                <h3>
                  <Translate id="nonprofits.whyChoose.workflows.title">
                    Built for nonprofit workflows
                  </Translate>{' '}🫱🏾‍🫲🏼
                </h3>
                <p>
                  <Translate id="nonprofits.whyChoose.workflows.description1">
                    Create exercises for fundraising and development staff, 
                    program teams, finance and operations, volunteers, 
                    board members, and contractors.
                  </Translate>
                </p>
                <p>
                  <Translate id="nonprofits.whyChoose.workflows.description2">
                    Tailor training to the systems, roles, and risks that matter most to your organization.
                    Write scenarios in your own words, referencing the systems and situations your teams actually deal with.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLight)}>
                <h3>
                  <Translate id="nonprofits.whyChoose.reinforce.title">
                    Reinforce learning over time
                  </Translate>{' '}⏱️
                </h3>
                <p>
                  <Translate id="nonprofits.whyChoose.reinforce.description1">
                    Short, practical exercises help people recognize
                    warning signs and make safer decisions repeatedly.
                  </Translate>
                </p>
                <p>
                  <Translate id="nonprofits.whyChoose.reinforce.description2">
                    Shira supports ongoing education instead of relying on
                    one-off tests that measure only a single moment.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLight)}>
                <h3>
                  <Translate id="nonprofits.whyChoose.track.title">
                    Track progress and identify knowledge gaps
                  </Translate>{' '}📈
                </h3>
                <p>
                  <Translate id="nonprofits.whyChoose.track.description1">
                    See who is improving, understand which topics need
                    more attention, and identify knowledge gaps across
                    teams and roles.
                  </Translate>
                </p>
                <p>
                  <Translate id="nonprofits.whyChoose.track.description2">
                    Use progress insights to focus your training where it
                    can have the greatest impact.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLight)}>
                <h3>
                  <Translate id="nonprofits.whyChoose.accessible.title">
                    Accessible to every member of your organization
                  </Translate>{' '}📖
                </h3>
                <p>
                  <Translate id="nonprofits.whyChoose.accessible.description1">
                    Make phishing education approachable for people with
                    different roles, technical backgrounds, schedules, and
                    levels of security experience.
                  </Translate>
                </p>
                <p>
                  <Translate id="nonprofits.whyChoose.accessible.description2">
                    Clear, practical exercises help everyone participate.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLight)}>
                <h3>
                  <Translate id="nonprofits.whyChoose.deploy.title">
                    Easy to deploy
                  </Translate>{' '}👩🏽‍💻
                </h3>
                <p>
                  <Translate id="nonprofits.whyChoose.deploy.description1">
                    Build and manage training within minutes and without
                    coding or specialized IT expertise.
                  </Translate>
                </p>
                <p>
                  <Translate id="nonprofits.whyChoose.deploy.description2">
                    Shira helps small security teams and
                    resource-constrained organizations create a practical
                    phishing education program quickly.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLight)}>
                <h3>
                  <Translate id="nonprofits.whyChoose.privacy.title">
                    Privacy-friendly
                  </Translate>{' '}🔒
                </h3>
                <p>
                  <Translate id="nonprofits.whyChoose.privacy.description">
                    Shira doesn't collect, process, or store any donor or
                    beneficiary data. Training scenarios use simulated
                    content, not real donor or employee data, so you can
                    train your team without adding new data exposure.
                  </Translate>
                </p>
                <p>
                  <Link to="/trust-security">
                    <Translate id="nonprofits.whyChoose.privacy.cta">
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
              <Translate id="nonprofits.training.title">
                Help your team protect the donors and communities who trust you
              </Translate>
            </h2>

            <div className={classNames(indexStyles.problemGrid, indexStyles.whyChooseGrid)}>
              <div className={classNames(indexStyles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="nonprofits.training.program.title">
                    Program teams
                  </Translate>{' '}🌍
                </h3>
                <p>
                  <Translate id="nonprofits.training.program.description">
                    Help program and service staff spot phishing attempts that impersonate beneficiaries, 
                    partner organizations, or case-management systems, and that could disrupt service delivery 
                    or expose sensitive participant information.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="nonprofits.training.administrative.title">
                    Fundraising teams
                  </Translate>{' '}💰
                </h3>
                <p>
                  <Translate id="nonprofits.training.administrative.description">
                    Help fundraising and development staff recognize fake donor portal alerts, 
                    phishing grant-approval requests, donation platform account takeover attempts, 
                    and messages impersonating major donors or funders.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="nonprofits.training.support.title">
                    Finance and operations teams
                  </Translate>{' '}👩🏽‍💼
                </h3>
                <p>
                  <Translate id="nonprofits.training.support.description">
                    Prepare finance and operations staff to identify payroll fraud, 
                    vendor impersonation, wire-transfer fraud, and requests involving 
                    donor or organizational financial information.
                  </Translate>
                </p>
              </div>

              <div className={classNames(indexStyles.problemCard, global.backgroundLightest)}>
                <h3>
                  <Translate id="nonprofits.training.distributed.title">
                    Volunteers and board members
                  </Translate>{' '}🌎
                </h3>
                <p>
                  <Translate id="nonprofits.training.distributed.description">
                    Give volunteers, board members, and distributed teams 
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
                <Translate id="nonprofits.training.cta">
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
              id: 'nonprofits.closing.imageAlt',
              message: 'decorative illustration of a fish representing phishing',
            })}
          />
          <div className={indexStyles.contextText}>
            <h2 className={indexStyles.closingTitle}>
              <Translate id="nonprofits.closing.title">
                Security education should be accessible to everyone
              </Translate>
            </h2>
            <p>
              <Translate id="nonprofits.closing.part1">
                Shira is a product of
              </Translate>{' '}
              <Link to="https://wearehorizontal.org">Horizontal</Link>
              <Translate id="nonprofits.closing.part2">
                , a technology nonprofit dedicated to making online security accessible to everyone.
              </Translate>
            </p>
            <p>
              <Translate id="nonprofits.closing.part3">
                We built Shira because organizations, especially those without dedicated security teams, deserve practical, affordable tools to protect their teams, beneficiaries, and communities.
              </Translate>
            </p>
            <Link
              className={classNames(global.buttonDark, styles.wideCta)}
              to={getSignupUrl()}
            >
              <Translate id="nonprofits.closing.cta">
                Start your organization's training
              </Translate>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}