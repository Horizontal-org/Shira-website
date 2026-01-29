import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './phishing.module.css';
import global from '../css/custom.module.scss';
import classNames from 'classnames';
import Translate, { translate } from '@docusaurus/Translate';
import FishImage from "@site/static/img/fish.png"
import BubblesImage from "@site/static/img/fish-bubbles.png"
import WormImage from "@site/static/img/worm.png"

export default function Phishing() {
  return (
    <Layout
      title={translate({
        id: 'phishing.layout.title',
        message: 'Learn about Phishing',
      })}
      description={translate({
        id: 'phishing.layout.description',
        message:
          'Learn what phishing is, how it works, and why it’s effective. Discover the most common phishing attacks, what attackers seek, and the serious consequences for individuals and organizations.',
      })}
    >
      <main className={classNames(global.main, styles.phishing)}>
        <meta
          name="description"
          content={translate({
            id: 'phishing.meta.description',
            message:
              'Learn what phishing is, how it works, and why it’s effective. Discover the most common phishing attacks, what attackers seek, and the serious consequences for individuals and organizations.',
          })}
        />

        <section
          className={classNames(
            global.row,
            global.center,
            global.sectionMaxWidth,
            styles.learnPhishingIntro,
          )}
        >
          <div
            className={classNames(
              global.sectionContainer,
              global.sectionContainerMobileReverseWrap,
              global.center,
            )}
          >
            <div className={styles.learnPhishingIntroText}>
              <h2>
                <Translate id="phishing.intro.title">
                  What is phishing?
                </Translate>
              </h2>
              <span>
                <Translate id="phishing.intro.definition">
                  Phishing is a malicious attempt to obtain sensitive information such as usernames, passwords, and credit card details by disguising as a trustworthy entity in electronic communications. Phishing can also tempt you to download and install malware.
                </Translate>
              </span>
              <span>
                <Translate id="phishing.intro.protection">
                  Understanding phishing is the first step in protecting yourself and your organization.
                </Translate>
              </span>
            </div>
            <img
              src={FishImage}
              alt={translate({
                id: 'phishing.images.fish.alt',
                message: 'Decorative illustration of a fish',
              })}
            />
          </div>
        </section>

        <div
          style={{ width: '100%' }}
          className={classNames(global.row, global.center, global.backgroundDark)}
        >
          <section
            className={classNames(
              global.row,
              global.center,
              global.sectionMaxWidth,
              global.backgroundDark,
              styles.learnPhishingCommon,
            )}
          >
            <div
              className={classNames(
                global.sectionContainer,
                global.sectionContainerMobileWrap,
                global.center,
              )}
            >
              <h1>
                <Translate id="phishing.common.title">
                  The most common attack
                </Translate>
              </h1>
              <div className={styles.learnPhishingCommonText}>
                <span>
                  <Translate id="phishing.common.rank">
                    Phishing is consistently ranked as the most common attack experienced by individuals and organizations.
                  </Translate>
                </span>
                <span>
                  <Translate id="phishing.common.channels">
                    While phishing has been traditionally associated with email scams, today it takes place across a wide variety of mediums: email, but also SMS, messaging apps, social media platforms, and phone calls.
                  </Translate>
                </span>
              </div>
            </div>
          </section>
        </div>

        <section
          className={classNames(
            global.row,
            global.center,
            global.sectionMaxWidth,
            styles.attackers,
          )}
        >
          <div
            className={classNames(
              global.sectionContainer,
              global.sectionContainerMobileWrap,
              global.center,
            )}
          >
            <img
              src={BubblesImage}
              alt={translate({
                id: 'phishing.images.bubbles.alt',
                message: 'Decorative illustration of bubbles',
              })}
            />
            <div className={styles.attackersText}>
              <h3>
                <Translate id="phishing.attackers.title">
                  What do attackers try to obtain?
                </Translate>
              </h3>
              <p className={styles.mobileAlignList}>
                <ul>
                  <li>
                    <span className={global.bold}>
                      <Translate id="phishing.attackers.passwords.label">
                        Passwords:
                      </Translate>
                    </span>{' '}
                    <Translate id="phishing.attackers.passwords.text">
                      Attackers seek to steal passwords and login credentials to access victims' online accounts. With this information, they can commit fraud, steal data, or blackmail victims by threatening to expose sensitive information.
                    </Translate>
                  </li>
                  <li>
                    <span className={global.bold}>
                      <Translate id="phishing.attackers.money.label">
                        Money:
                      </Translate>
                    </span>{' '}
                    <Translate id="phishing.attackers.money.text">
                      Financial gain is a key motive for phishing. Attackers impersonate legitimate organizations to trick victims into providing credit card details or making payments, often through fake invoices or donation requests.
                    </Translate>
                  </li>
                  <li>
                    <span className={global.bold}>
                      <Translate id="phishing.attackers.confidential.label">
                        Confidential information:
                      </Translate>
                    </span>{' '}
                    <Translate id="phishing.attackers.confidential.text">
                      Phishing targets confidential information like Social Security numbers and business data. This information can be used for identity theft, sold on the dark web, or exploited for corporate espionage.
                    </Translate>
                  </li>
                  <li>
                    <span className={global.bold}>
                      <Translate id="phishing.attackers.malware.label">
                        For victims to install malware:
                      </Translate>
                    </span>{' '}
                    <Translate id="phishing.attackers.malware.text">
                      Phishers may trick victims into downloading malware through malicious links or attachments. Once installed, malware can steal personal information, monitor activity, or take control of devices, leading to serious data breaches.
                    </Translate>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </section>

        <section
          className={classNames(
            global.row,
            global.center,
            global.sectionMaxWidth,
            styles.whyitworks,
          )}
        >
          <div className={classNames(global.sectionContainer, global.center)}>
            <div className={styles.howitworksText}>
              <h3>
                <Translate id="phishing.why.title">
                  Why does phishing work?
                </Translate>
              </h3>
              <p className={styles.mobileAlignList}>
                <Translate id="phishing.why.intro">
                  Phishers capitalize on our:
                </Translate>
              </p>
              <p className={styles.mobileAlignList}>
                <ul>
                  <li>
                    <span className={global.bold}>
                      <Translate id="phishing.why.polite.label">
                        Urge to be polite:
                      </Translate>
                    </span>{' '}
                    <Translate id="phishing.why.polite.text">
                      People often feel compelled to respond to messages from authority figures or trusted sources. Phishers exploit this by using polite language, making recipients more likely to comply with requests for sensitive information without questioning the message's legitimacy.
                    </Translate>
                  </li>
                  <li>
                    <span className={global.bold}>
                      <Translate id="phishing.why.helpful.label">
                        Urge to be helpful:
                      </Translate>
                    </span>{' '}
                    <Translate id="phishing.why.helpful.text">
                      Many of us naturally want to assist others. Phishers create scenarios that prompt recipients to help, such as claiming a colleague or relative is in trouble. This manipulation can lead individuals to provide personal information, believing they are being supportive.
                    </Translate>
                  </li>
                  <li>
                    <span className={global.bold}>
                      <Translate id="phishing.why.embarrassed.label">
                        Fear of being embarrassed:
                      </Translate>
                    </span>{' '}
                    <Translate id="phishing.why.embarrassed.text">
                      Phishers instill fear by suggesting the recipient has made a mistake, like missing a payment. This fear can push individuals to act quickly, often without verifying the message's source, leading to compromised security.
                    </Translate>
                  </li>
                  <li>
                    <span className={global.bold}>
                      <Translate id="phishing.why.urgent.label">
                        Panic about urgent messages:
                      </Translate>
                    </span>{' '}
                    <Translate id="phishing.why.urgent.text">
                      Urgency is a strong motivator. Phishers craft messages that create a false sense of urgency, claiming accounts will be suspended or payments are overdue. This panic can cloud judgment, causing individuals to overlook warning signs and act impulsively.
                    </Translate>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </section>

        <section
          className={classNames(
            global.row,
            global.center,
            global.sectionMaxWidth,
            styles.consequences,
          )}
        >
          <div
            className={classNames(
              global.sectionContainer,
              global.sectionContainerMobileReverseWrap,
              global.center,
            )}
          >
            <div className={styles.consequencesText}>
              <h3>
                <Translate id="phishing.consequences.title">
                  Phishing attacks can lead to severe consequences
                </Translate>
              </h3>
              <p className={styles.mobileAlignList}>
                <ul>
                  <li>
                    <span className={global.bold}>
                      <Translate id="phishing.consequences.identity.label">
                        Identity Theft:
                      </Translate>
                    </span>{' '}
                    <Translate id="phishing.consequences.identity.text">
                      Cybercriminals can use your personal information to impersonate you.
                    </Translate>
                  </li>
                  <li>
                    <span className={global.bold}>
                      <Translate id="phishing.consequences.financial.label">
                        Financial Loss:
                      </Translate>
                    </span>{' '}
                    <Translate id="phishing.consequences.financial.text">
                      Unauthorized transactions can drain your accounts.
                    </Translate>
                  </li>
                  <li>
                    <span className={global.bold}>
                      <Translate id="phishing.consequences.data.label">
                        Data Breaches:
                      </Translate>
                    </span>{' '}
                    <Translate id="phishing.consequences.data.text">
                      Sensitive company information can be exposed, leading to reputational damage.
                    </Translate>
                  </li>
                  <li>
                    <span className={global.bold}>
                      <Translate id="phishing.consequences.operational.label">
                        Operational Disruption:
                      </Translate>
                    </span>{' '}
                    <Translate id="phishing.consequences.operational.text">
                      Phishing can result in downtime and loss of productivity.
                    </Translate>
                  </li>
                </ul>
              </p>
            </div>
            <img
              src={WormImage}
              alt={translate({
                id: 'phishing.images.worm.alt',
                message: 'Decorative illustration of a worm',
              })}
            />
          </div>
        </section>

        <section
          className={classNames(
            global.row,
            global.center,
            global.sectionMaxWidth,
            styles.howitworks,
          )}
        >
          <div className={classNames(global.sectionContainer, global.center)}>
            <div className={styles.howitworksText}>
              <h3>
                <Translate id="phishing.how.title">
                  How phishing works
                </Translate>
              </h3>
              <p className={styles.mobileAlignList}>
                <Translate id="phishing.how.intro">
                  Phishing attacks often involve the following steps:
                </Translate>
              </p>
              <p className={styles.mobileAlignList}>
                <ul>
                  <li>
                    <span className={global.bold}>
                      <Translate id="phishing.how.deceptive.label">
                        Deceptive Communication:
                      </Translate>
                    </span>{' '}
                    <Translate id="phishing.how.deceptive.text">
                      Attackers send messages that appear to come from legitimate sources, such as banks, online services, or even colleagues.
                    </Translate>
                  </li>
                  <li>
                    <span className={global.bold}>
                      <Translate id="phishing.how.urgent.label">
                        Urgent Call to Action:
                      </Translate>
                    </span>{' '}
                    <Translate id="phishing.how.urgent.text">
                      The message usually contains a sense of urgency, prompting the recipient to act quickly—such as clicking a link or providing personal information.
                    </Translate>
                  </li>
                  <li>
                    <span className={global.bold}>
                      <Translate id="phishing.how.fake.label">
                        Fake Websites:
                      </Translate>
                    </span>{' '}
                    <Translate id="phishing.how.fake.text">
                      If the victim clicks on a link, they are often directed to a fraudulent website that looks similar to the legitimate one. Here, they may be asked to enter sensitive information such as their password or banking information.
                    </Translate>
                  </li>
                  <li>
                    <span className={global.bold}>
                      <Translate id="phishing.how.data.label">
                        Data Theft:
                      </Translate>
                    </span>{' '}
                    <Translate id="phishing.how.data.text">
                      Once the victim provides their information, attackers can use it for identity theft, financial fraud, or other malicious purposes.
                    </Translate>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
