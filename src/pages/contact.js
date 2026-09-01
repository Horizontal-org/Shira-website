import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './contact.module.css';
import global from '../css/custom.module.scss';
import classNames from 'classnames';
import Translate, { translate } from '@docusaurus/Translate';
import FishImage from "@site/static/img/fish.png";

export default function Contact() {
  return (
    <Layout
      title={translate({
        id: 'contact.title',
        message: 'Contact the Shira team'
      })}
      description={translate({
        id: 'contact.description',
        message: 'Learn about how to contact the Shira team'
      })}
    >
      <main className="main">
        <meta
          name="description"
          content={translate({
            id: 'contact.metaDescription',
            message: 'Learn about how to contact the Shira team'
             })}
        />

        <div className={classNames(global.backgroundLight, styles.flexAndCenter)}>
          <section className={classNames(global.row, styles.hero, global.sectionMaxWidth)}>
            <div className={styles.heroText}>
              <h1>
                <Translate id="contact.heading">
                  Let’s talk!
                </Translate>
              </h1>
              <p>
                <Translate id="contact.intro.part1">
                  Do you have questions about Shira that are not answered in our
                </Translate>{' '}
                <Link to="/help">
                  <Translate id="contact.intro.helpCenter">
                    help center
                  </Translate>
                </Link>
                <Translate id="contact.intro.part2">
                  ? Would you like to explore a possible partnership? Are you a non-profit or a grassroots organization and cannot afford the full cost of Shira?
                </Translate>
              </p>
            </div>

            <img
              className={styles.heroImage}
              src={FishImage}
              alt={translate({
                id: 'contact.hero.imageAlt',
                message: 'decorative image of a fish representing phishing',
              })}
            />
          </section>
        </div>

        <div className={classNames(styles.flexAndCenter)}>
          <section className={classNames(styles.getInTouch, global.sectionMaxWidth)}>
            <h2>
              <Translate id="contact.getInTouch">
                Get in touch
              </Translate>
            </h2>

            <div className={styles.touchItems}>
              <div className={classNames(styles.touchItem, global.backgroundLight)}>
                <p>
                  <Translate id="contact.links.githubIntro">
                    Have a feature request?
                  </Translate>
                </p>
                <a href="https://github.com/Horizontal-org/shira/discussions">
                  <Translate id="contact.links.github">
                    Post a feature idea or vote on existing requests
                  </Translate>
                </a>
              </div>

              <div className={classNames(styles.touchItem, global.backgroundLight)}>
                <p>
                  <Translate id="contact.links.demoIntro">
                    Want to see Shira in action?
                  </Translate>
                </p>
                <a href="https://calendly.com/raphael-mimoun/shira-demo">
                  <Translate id="contact.links.demo">
                    Schedule a demo call directly here
                  </Translate>
                </a>
              </div>

              <div className={classNames(styles.touchItem, global.backgroundLight)}>
                <p>
                  <Translate id="contact.links.newsletterIntro">
                    Want to stay in the loop?
                  </Translate>
                </p>
                <a href="https://blog.wearehorizontal.org/tag/shira/">
                  <Translate id="contact.links.newsletter">
                    Subscribe to our newsletter
                  </Translate>
                </a>
              </div>
            </div>

            <p className={styles.emailLine}>
              <Translate id="contact.links.emailIntro">
                Or for any other question, write to us at:
              </Translate>
              <br />
              <a href="mailto:contact@wearehorizontal.org">
                contact@wearehorizontal.org
              </a>
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
}