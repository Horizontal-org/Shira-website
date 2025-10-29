import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './pricing.module.css';
import global from '../css/custom.module.scss';
import classNames from 'classnames';

export default function Pricing() {
  return (
    <Layout
      title="Shira's pricing"
      description="Explore Shira’s simple and transparent pricing plans for educators, security professionals, and organizations. Choose between Free, Pro, or Enterprise options with customizable phishing quizzes and privacy-friendly management tools."
    >

      <main className={global.main}>
        <meta name="description" content="Explore Shira’s simple and transparent pricing plans for educators, security professionals, and organizations. Choose between Free, Pro, or Enterprise options with customizable phishing quizzes and privacy-friendly management tools." />


        <section className={classNames(global.backgroundLight, styles.pricingShira)}>
          <div className={styles.princingIntro}>
            <p>Custom plans for educators and security professionals</p>
            <h1>Simple, transparent, and fair pricing</h1>
          </div>
        </section>


        <section className={classNames(global.row, styles.plans)}>
          <div className={styles.plan}>
            <h2>Starter</h2>
            <p className={styles.prize}>Free</p>

            <p>Best to try things out.</p>


            <Link className={global.buttonDark} to="/contact">Get stated</Link>

            <hr></hr>

            <h3>The Starter plan includes: </h3>

            <h4>Admin management </h4>
            <ul>
              <li>✔️ Cloud.</li>
              <li>✔️ Admin dashboard.</li>
              <li>✔️ 1 admin.</li>
            <h4>Customization</h4>
              <li>✔️ Fully customizable quiz questions.</li>
              <li>✔️ Up to 3 custom quizzes.</li>
              <li>✔️ Up to 5 questions per quiz.</li>
              <li>✔️ Up to 1,500 quizzes taken per year.</li>
              <li>✔️ 2 apps: Gmail, SMS.</li>
            <h4>Access control</h4>
              <li>✔️Public quizzes: anyone can take your quiz through an easy-to-share URL.</li>
            </ul>
          </div>


           <div className={classNames(global.backgroundLight,styles.plan)}>
            <h2>Pro</h2>
            <p className={styles.prize}>Flat fee</p>
            <p>Best for organizations looking to level-up.</p>


            <Link className={global.buttonDark} to="/contact">Get stated</Link>

            <hr></hr>

            <h3>The Pro plan includes:</h3>

            <h4>Admin management </h4>
            <ul>
              <li>✔️ Cloud.</li>
              <li>✔️ Admin dashboard.</li>
              <li>✔️ Unlimited admins.</li>
            <h4>Customization</h4>
              <li>✔️ Fully customizable quiz questions.</li>
              <li>✔️ Unlimited custom quizzes.</li>
              <li>✔️ Unlimited quiz questions.</li>
              <li>✔️ Up to 1,500 quizzes taken per year*.</li>
              <li>✔️ 5 app: Gmail, SMS, WhatsApp, Messenger, Dating app.</li>
            <h4>Access control</h4>
              <li>✔️Public quizzes: anyone can take your quiz through an easy-to-share URL.</li>
              <li>✔️Private quizzes: only your users can take your quizzes.</li>
            <h4>Compliance</h4>
              <li>✔️Track user progress.</li>
              <li>✔️Analysis and compliance tools.</li>
            </ul>

            <p className={styles.note}>
              * Additional quiz packages available if needed.
            </p>
          </div>




           <div className={styles.plan}>
            <h2>Enterprise</h2>
            <p className={styles.prize}>Custom</p>
            <p>Best for large organizations and service providers </p>


            <Link className={global.buttonDark} to="/contact">Get stated</Link>

            <hr></hr>

            <h3>The Enterprise plan includes:</h3>

            <h4>Admin management </h4>
            <ul>
              <li>✔️ Cloud or on-premise.</li>
              <li>✔️ Admin dashboard.</li>
              <li>✔️ Unlimited admins.</li>
            <h4>Customization</h4>
              <li>✔️ Fully customizable quiz questions.</li>
              <li>✔️ Unlimited custom quizzes.</li>
              <li>✔️ Unlimited quiz questions.</li>
              <li>✔️ Custom number of quizzes taken</li>
              <li>✔️ 5 app: Gmail, SMS, WhatsApp, Messenger, Dating app.</li>
            <h4>Access control</h4>
              <li>✔️Public quizzes: anyone can take your quiz through an easy-to-share URL.</li>
              <li>✔️Private quizzes: only your users can take your quizzes.</li>
            <h4>Compliance</h4>
              <li>✔️Track user progress.</li>
              <li>✔️Analysis and compliance tools.</li>

            <h4>Custom support</h4>
              <li>✔️Tailor-made user training.</li>
              <li>✔️Priority support.</li>
            </ul>


          </div>

        </section>
      </main>
    </Layout>
  );
}
