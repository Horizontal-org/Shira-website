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
      description="Learn about Phishing, what is phishing, what are the most common attacks, what do attackers try to obtain, why and how it works, and what are some of the potential consequences."
    >
      <main className={classNames(global.main, styles.phishing)}>

        <section className={classNames(global.row, global.center, styles.learnPhishingIntro)}>
          <div className={styles.learnPhishingIntroText}>
            <h2>What is phishing?</h2>
            <p>Phishing is a malicious attempt to obtain sensitive information such as usernames, passwords, and credit card details by disguising as a trustworthy entity in electronic communications. Phishing can also tempt you to download and install malware.</p>
            <p>Understanding phishing is the first step in protecting yourself and your organization.</p>
          </div>
          <img src='/img/fish.png'></img>
        </section>

        <section className={classNames(global.row, global.center, global.backgroundDark, styles.learnPhishingCommon)}>
            <h1>The most common attack</h1>
            <div className={styles.learnPhishingCommonText}>
              <p>Phishing is consistently ranked as the most common attack experienced by individuals and organizations.</p>
              <p>While phishing has been traditionally associated with email scams, today it takes place across a wide variety of mediums: email, but also SMS, messaging apps, social media platforms, and phone calls.</p>
          </div>
        </section>


        <section className={classNames(global.row, global.center, styles.attackers)}>
          <img src='/img/fish-bubbles.png'></img>
          <div className={styles.attackersText}>
            <h3>What do attackers try to obtain?</h3>
            <ul>
              <li><span className={global.bold}>Passwords:</span> Attackers seek to steal passwords and login credentials to access victims' online accounts. With this information, they can commit fraud, steal data, or blackmail victims by threatening to expose sensitive information.</li>
              <li><span className={global.bold}>Money:</span> Financial gain is a key motive for phishing. Attackers impersonate legitimate organizations to trick victims into providing credit card details or making payments, often through fake invoices or donation requests.</li>
              <li><span className={global.bold}>Confidential information:</span> Phishing targets confidential information like Social Security numbers and business data. This information can be used for identity theft, sold on the dark web, or exploited for corporate espionage.</li>
              <li><span className={global.bold}>For victims to install malware:</span> Phishers may trick victims into downloading malware through malicious links or attachments. Once installed, malware can steal personal information, monitor activity, or take control of devices, leading to serious data breaches.</li>
            </ul>
          </div>
        </section>



         <section className={classNames(global.row, global.center, styles.whyitworks)}>
          <div className={styles.howitworksText}>
            <h3>Why does phishing work?</h3>
            <p>Phishers capitalize on our: </p>
            <ul>
              <li><span className={global.bold}>Urge to be polite:</span> People often feel compelled to respond to messages from authority figures or trusted sources. Phishers exploit this by using polite language, making recipients more likely to comply with requests for sensitive information without questioning the message's legitimacy. </li>
              <li><span className={global.bold}>Urge to be helpful:</span> Many of us naturally want to assist others. Phishers create scenarios that prompt recipients to help, such as claiming a colleague or relative is in trouble. This manipulation can lead individuals to provide personal information, believing they are being supportive. </li>
              <li><span className={global.bold}>Fear of being embarrassed:</span> Phishers instill fear by suggesting the recipient has made a mistake, like missing a payment. This fear can push individuals to act quickly, often without verifying the message's source, leading to compromised security. </li>
              <li><span className={global.bold}>Panic about urgent messages: </span> Urgency is a strong motivator. Phishers craft messages that create a false sense of urgency, claiming accounts will be suspended or payments are overdue. This panic can cloud judgment, causing individuals to overlook warning signs and act impulsively. </li>
            </ul>
          </div>
        </section>

        <section className={classNames(global.row, global.center, styles.consequences)}>
          <div className={styles.consequencesText}>
            <h3>Phishing attacks can lead to severe consequences</h3>
            <ul>
              <li><span className={global.bold}>Identity Theft:</span> Cybercriminals can use your personal information to impersonate you.</li>
              <li><span className={global.bold}>Financial Loss:</span> Unauthorized transactions can drain your accounts.</li>
              <li><span className={global.bold}>Data Breaches:</span> Sensitive company information can be exposed, leading to reputational damage.</li>
              <li><span className={global.bold}>Operational Disruption:</span> Phishing can result in downtime and loss of productivity.</li>
            </ul>
          </div>
          <img src='/img/worm.png'></img>
        </section>

        <section className={classNames(global.row, global.center, styles.howitworks)}>
          <div className={styles.howitworksText}>
            <h3>How phishing works</h3>
            <p>Phishing attacks often involve the following steps:</p>
            <ul>
              <li><span className={global.bold}>Deceptive Communication:</span> Attackers send messages that appear to come from legitimate sources, such as banks, online services, or even colleagues.</li>
              <li><span className={global.bold}>Urgent Call to Action:</span> The message usually contains a sense of urgency, prompting the recipient to act quickly—such as clicking a link or providing personal information.</li>
              <li><span className={global.bold}>Fake Websites:</span> If the victim clicks on a link, they are often directed to a fraudulent website that looks similar to the legitimate one. Here, they may be asked to enter sensitive information such as their password or banking information. </li>
              <li><span className={global.bold}>Data Theft: </span> Once the victim provides their information, attackers can use it for identity theft, financial fraud, or other malicious purposes. </li>
            </ul>
          </div>
        </section>


      </main>
    </Layout>
  );
}
