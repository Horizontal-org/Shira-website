import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './phishing-quizzes.module.css';
import global from '../css/custom.module.scss';
import classNames from 'classnames';
import Iframe from 'react-iframe'


export default function PhishingQuizzes() {
  return (
    <Layout
      title="Learn about Phishing quizzes"
      description="Learn why phishing quizzes are more effective than simulations. Shira offers safe, interactive training to build real phishing detection skills without stress or punishment."
    >
      <main className={classNames(global.main, styles.phishingQuizzes)}>
        <meta name="description" content="Learn why phishing quizzes are more effective than simulations. Shira offers safe, interactive training to build real phishing detection skills without stress or punishment." />


        <section className={classNames(global.backgroundDark, global.center, styles.phishingQuizzesEducation)}>
          <div className={classNames(global.row, styles.phishingTextIntro)}>
            <h1>Why education beats simulation</h1>
            <div className={styles.phishingQuizzesEducationText}>
              <h4>Phishing simulations have become a standard component of anti-phishing training programs. These simulations involve sending employees emails that mimic the tactics used by cybercriminals to trick individuals into revealing sensitive information or clicking on malicious links. Employees are assessed based on their responses to these simulated emails, particularly whether they clicked on a link or provided any sensitive information.</h4>
              <h4>However, this approach has several drawbacks and is not as effective as providing comprehensive anti-phishing education.</h4>
            </div>
          </div>
          <div className={classNames(global.center,styles.iframeWrapper)}>
            <Iframe url="https://www.wsj.com/tech/cybersecurity/phishing-tests-the-bane-of-work-life-are-getting-meaner-76f30173"
              width="80%"
              height="320px"
              > </Iframe>
            </div>
        </section>

        <section className={classNames(global.center, styles.phishingProblem)}>
          <h3>The problem with phishing simulations</h3>
          <p>Phishing simulations, while widely used, come with several issues that organizations should consider:</p>
          <p>
            <ol>
              <li><span className={global.bold}>Create anxiety and mistrust:</span> Users may become anxious or mistrustful of emails, even legitimate ones, which can lead to decreased productivity and increased stress.</li>
              <li><span className={global.bold}>Narrow Focus on Email:</span> Many phishing simulations primarily target email threats, overlooking other channels like SMS, messaging apps, or social media. This limited focus can leave employees unprepared to recognize and respond to phishing attempts outside their email inbox.</li>
              <li><span className={global.bold}>False Sense of Security:</span> If employees successfully identify simulated phishing attempts, they may develop a false sense of security, believing they are fully equipped to handle real threats, which can lead to complacency.</li>
              <li><span className={global.bold}>Overemphasis on Click Rates:</span> Focusing solely on whether employees clicked on a link can overlook other important aspects of phishing awareness, such as recognizing social engineering tactics or reporting suspicious emails.</li>
              <li><span className={global.bold}>Desensitize users:</span> Repeatedly sending fake phishing emails can desensitize users to the threat, making them less likely to take real phishing attempts seriously.</li>
              <li><span className={global.bold}>Focus on punishment rather than prevention:</span> Simulated phishing emails can create a culture of fear, where users are more focused on avoiding punishment than on learning how to prevent phishing attacks.</li>
            </ol>
          </p>
          <p>Research finds that phishing simulation campaigns do not effectively train people in identifying phishing attacks. <Link to="https://arxiv.org/pdf/2112.07498">One study with 14,000 participants</Link> actually showed a <i>counterproductive</i> effect of phishing simulations: users who are continuously exposed to phishing simulations are more likely to click on dangerous links.</p>

          <h3>A more effective approach: phishing quizzes</h3>
          <p>Phishing quizzes provide a controlled learning environment that is more effective for skill-building than traditional phishing simulations. Unlike simulations, which can be stressful and punitive, quizzes offer a safe and interactive space for employees to practice their phishing detection skills. Designed to mimic real-world scenarios without actual risk, these quizzes encourage active learning and allow participants to receive immediate feedback. This helps employees learn from their mistakes, build confidence, and understand why certain emails are phishing attempts.</p>

          <p>Benefits include:</p>
          <p>
            <ol>
              <li><span className={global.bold}>Controlled Learning Environment:</span> Phishing quizzes create a safe and low-stakes space for employees to practice their skills, reducing the stress and anxiety often associated with traditional phishing simulations.</li>

              <li><span className={global.bold}>Interactive Engagement:</span> These quizzes encourage active participation by allowing employees to engage with various phishing scenarios, while also providing immediate feedback on what elements indicate that an email or message may be a phishing attack.</li>

              <li><span className={global.bold}>Coverage of Diverse Phishing Tactics:</span> Phishing quizzes can incorporate questions about various types of phishing attacks, such as SMS (smishing), social media, and voice calls (vishing), broadening employees' awareness and preparedness for threats beyond just email.</li>

              <li><span className={global.bold}>Confidence Building:</span> By allowing employees to learn from their mistakes in a supportive environment, phishing quizzes help build their confidence in identifying and responding to phishing attempts effectively.</li>

              <li><span className={global.bold}>Tailored Learning Objectives:</span> Quizzes can be customized to focus on specific skills and knowledge gaps, ensuring that employees receive targeted training that effectively equips them to prevent phishing attacks in their daily work.</li>
            </ol>
          </p>

          <div className={styles.alignedCenter}>
            <Link className={global.buttonDark} to="/contact">Get started</Link>
          </div>


        </section>
      </main>
    </Layout>
    );
}


