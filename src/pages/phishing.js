import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './phishing.module.css';
import global from '../css/custom.module.scss';
import classNames from 'classnames';

export default function Phishing() {
  return (
    <Layout
      title="Learn about Phishing"
      description="Learn what phishing is, how it works, and why it’s effective. Discover the most common phishing attacks, what attackers seek, and the serious consequences for individuals and organizations."
    >
      <main className={classNames(global.main, styles.phishing)}>
        <meta name="description" content="Learn what phishing is, how it works, and why it’s effective. Discover the most common phishing attacks, what attackers seek, and the serious consequences for individuals and organizations." />


        <section className={classNames(global.row, global.center, global.sectionMaxWidth, styles.learnPhishingIntro)}>
          <div className={classNames(global.sectionContainer, global.sectionContainerMobileReverseWrap, global.center)}>
            <div className={styles.learnPhishingIntroText}>
              <h2>What is phishing?</h2>
              <span>Phishing is a malicious attempt to obtain sensitive information such as usernames, passwords, and credit card details by disguising as a trustworthy entity in electronic communications. Phishing can also tempt you to download and install malware.</span>
              <span>Understanding phishing is the first step in protecting yourself and your organization.</span>
            </div>
            <img src='/img/fish.png' alt="decorative image of a fish"></img>
          </div>
        </section>
        
        <div style={{ width: '100%' }} className={classNames(global.row, global.center, global.backgroundDark)}>
          <section className={classNames(global.row, global.center, global.sectionMaxWidth, global.backgroundDark, styles.learnPhishingCommon)}>
            <div className={classNames(global.sectionContainer, global.sectionContainerMobileWrap, global.center)}>
              <h1>The most common attack</h1>
              <div className={styles.learnPhishingCommonText}>
                <span>Phishing is consistently ranked as the most common attack experienced by individuals and organizations.</span>
                <span>While phishing has been traditionally associated with email scams, today it takes place across a wide variety of mediums: email, but also SMS, messaging apps, social media platforms, and phone calls.</span>
              </div>
            </div>
          </section>
        </div>


        <section className={classNames(global.row, global.center, global.sectionMaxWidth, styles.attackers)}>
          <div className={classNames(global.sectionContainer, global.sectionContainerMobileWrap, global.center)}>
            <img src='/img/fish-bubbles.png' alt="decorative image of bubbles"></img>
            <div className={styles.attackersText}>
              <h3>What do attackers try to obtain?</h3>
              <p className={styles.mobileAlignList}>
                <ul>
                  <li><span className={global.bold}>Passwords:</span> Attackers seek to steal passwords and login credentials to access victims' online accounts. With this information, they can commit fraud, steal data, or blackmail victims by threatening to expose sensitive information.</li>
                  <li><span className={global.bold}>Money:</span> Financial gain is a key motive for phishing. Attackers impersonate legitimate organizations to trick victims into providing credit card details or making payments, often through fake invoices or donation requests.</li>
                  <li><span className={global.bold}>Confidential information:</span> Phishing targets confidential information like Social Security numbers and business data. This information can be used for identity theft, sold on the dark web, or exploited for corporate espionage.</li>
                  <li><span className={global.bold}>For victims to install malware:</span> Phishers may trick victims into downloading malware through malicious links or attachments. Once installed, malware can steal personal information, monitor activity, or take control of devices, leading to serious data breaches.</li>
                </ul>
              </p>
            </div>
          </div>
        </section>



         <section className={classNames(global.row, global.center, global.sectionMaxWidth, styles.whyitworks)}>
          <div className={classNames(global.sectionContainer, global.center)}>
            <div className={styles.howitworksText}>
              <h3>Why does phishing work?</h3>
              <p className={styles.mobileAlignList}>Phishers capitalize on our: </p>
              <p className={styles.mobileAlignList}>
                <ul>
                  <li><span className={global.bold}>Urge to be polite:</span> People often feel compelled to respond to messages from authority figures or trusted sources. Phishers exploit this by using polite language, making recipients more likely to comply with requests for sensitive information without questioning the message's legitimacy.</li>
                  <li><span className={global.bold}>Urge to be helpful:</span> Many of us naturally want to assist others. Phishers create scenarios that prompt recipients to help, such as claiming a colleague or relative is in trouble. This manipulation can lead individuals to provide personal information, believing they are being supportive.</li>
                  <li><span className={global.bold}>Fear of being embarrassed:</span> Phishers instill fear by suggesting the recipient has made a mistake, like missing a payment. This fear can push individuals to act quickly, often without verifying the message's source, leading to compromised security.</li>
                  <li><span className={global.bold}>Panic about urgent messages: </span> Urgency is a strong motivator. Phishers craft messages that create a false sense of urgency, claiming accounts will be suspended or payments are overdue. This panic can cloud judgment, causing individuals to overlook warning signs and act impulsively.</li>
                </ul>
              </p>
            </div>
          </div>
        </section>

        <section className={classNames(global.row, global.center, global.sectionMaxWidth, styles.consequences)}>
          <div className={classNames(global.sectionContainer, global.sectionContainerMobileReverseWrap, global.center)}>
            <div className={styles.consequencesText}>
              <h3>Phishing attacks can lead to severe consequences</h3>
              <p className={styles.mobileAlignList}>
                <ul>
                  <li><span className={global.bold}>Identity Theft:</span> Cybercriminals can use your personal information to impersonate you.</li>
                  <li><span className={global.bold}>Financial Loss:</span> Unauthorized transactions can drain your accounts.</li>
                  <li><span className={global.bold}>Data Breaches:</span> Sensitive company information can be exposed, leading to reputational damage.</li>
                  <li><span className={global.bold}>Operational Disruption:</span> Phishing can result in downtime and loss of productivity.</li>
                </ul>
              </p>
            </div>
            <img src='/img/worm.png' alt="decorative image of a worm"></img>
          </div>
        </section>

        <section className={classNames(global.row, global.center, global.sectionMaxWidth, styles.howitworks)}>
          <div className={classNames(global.sectionContainer, global.center)}>

            <div className={styles.howitworksText}>
              <h3>How phishing works</h3>
              <p className={styles.mobileAlignList}>Phishing attacks often involve the following steps:</p>
              <p className={styles.mobileAlignList}>
                <ul>
                  <li><span className={global.bold}>Deceptive Communication:</span> Attackers send messages that appear to come from legitimate sources, such as banks, online services, or even colleagues.</li>
                  <li><span className={global.bold}>Urgent Call to Action:</span> The message usually contains a sense of urgency, prompting the recipient to act quickly—such as clicking a link or providing personal information.</li>
                  <li><span className={global.bold}>Fake Websites:</span> If the victim clicks on a link, they are often directed to a fraudulent website that looks similar to the legitimate one. Here, they may be asked to enter sensitive information such as their password or banking information.</li>
                  <li><span className={global.bold}>Data Theft: </span> Once the victim provides their information, attackers can use it for identity theft, financial fraud, or other malicious purposes.</li>
                </ul>
              </p>
            </div>
          </div>

        </section>


      </main>
    </Layout>
  );
}
