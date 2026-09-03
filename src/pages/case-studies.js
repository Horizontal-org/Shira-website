import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './case-studies.module.css';
import global from '../css/custom.module.scss';
import classNames from 'classnames';
import Translate, { translate } from '@docusaurus/Translate';
import HeroPlaceholder from "@site/static/img/fish-bubbles.png";
import HuespedLogo from "@site/static/img/huesped-logo.png";
import Nothing2HideLogo from "@site/static/img/nothing2ide-logo.png";
import MiaanGroupLogo from "@site/static/img/miaan-group-logo.png";

export default function CaseStudies() {
  const [huespedExpanded, setHuespedExpanded] = useState(false);
  const [amirExpanded, setAmirExpanded] = useState(false);
  const [nothing2hideExpanded, setNothing2hideExpanded] = useState(false);

  return (
    <Layout
      title={translate({
        id: 'case-studies.meta.title',
        message: 'Case Studies',
      })}
      description={translate({
        id: 'case-studies.meta.description',
        message:
          'Real organizations, real training, real impact — stories from trainers and organizations using Shira around the world.',
      })}
    >
      <main className="main">
        <meta
          name="description"
          content={translate({
            id: 'case-studies.meta.longDescription',
            message:
              'Real organizations, real training, real impact — stories from trainers and organizations using Shira around the world.',
          })}
        />

        <div className={classNames(global.backgroundDark, styles.flexAndCenter)}>
          <section className={classNames(global.row, styles.hero, global.sectionMaxWidth)}>
            <div className={styles.heroText}>
              <h4>
                <Translate id="case-studies.hero.pretitle">Case Studies</Translate>
              </h4>

              <h1>
                <Translate id="case-studies.hero.title.RealOrg">Real organizations.</Translate>
                <br />
                <Translate id="case-studies.hero.title.RealTraining">Real training.</Translate>
                <br />
                <Translate id="case-studies.hero.title.RealImpact">Real impact.</Translate>
              </h1>

              <p>
                <Translate id="case-studies.hero.description">
                  Shira is being used by businesses, nonprofits, and digital security educators across the world in a wide variety of contexts, with one common thread: vulnerability to phishing attacks.
                </Translate>
              </p>
            </div>

            {/* Placeholder image — swap for a final case-studies illustration later */}
            <img
              className={styles.heroImage}
              src={HeroPlaceholder}
              alt={translate({
                id: 'case-studies.hero.imageAlt',
                message: 'Illustration of people celebrating with a book, a checkmark, and security shields',
              })}
            />
          </section>
        </div>

        <section className={classNames(styles.cardsSection, global.sectionMaxWidth)}>

          {/* ---------- Fundación Huésped ---------- */}
          <div id="huesped" className={classNames(styles.card, global.backgroundLight)}>
            <div className={styles.cardBody}>

              <div className={styles.orgMeta}>
                <div className={styles.orgHeader}>
                  <img
                    src={HuespedLogo}
                    alt={translate({
                      id: 'case-studies.huesped.logoAlt',
                      message: 'Fundación Huésped logo',
                    })}
                    className={styles.orgLogo}
                  />
                  <div>
                    <h3>
                      <Translate id="case-studies.huesped.org">Fundación Huésped</Translate>
                    </h3>
                    <a
                      href="https://huesped.org.ar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.orgLink}
                    >
                      huesped.org.ar ↗
                    </a>
                  </div>
                </div>

                <div className={styles.metaRow}>
                  <span className={styles.industryTag}>
                    🏷 <Translate id="case-studies.huesped.industry">Public Health & Human Rights</Translate>
                  </span>
                  <span className={styles.location}>
                    📍 <Translate id="case-studies.huesped.location">Latin America</Translate>
                  </span>
                </div>
              </div>

              <div className={styles.quotePanel}>

                <span className={styles.quoteMark}>“</span>

                <div className={styles.quoteTextWrapper}>

                  <blockquote className={styles.quote}>

                  <Translate id="case-studies.huesped.quote">
                    Our users are more alert and active in identifying threats, and our support department is receiving many more alerts about suspicious emails.
                  </Translate>

                  </blockquote>

                </div>

                <footer className={styles.quoteAuthor}>

                  <Translate id="case-studies.huesped.quoteAuthor.name">
                    Daniela Mibashan
                  </Translate>
                  <br/>
                  <Translate id="case-studies.huesped.quoteAuthor.role">
                    Program Manager, Innovation Lab at Fundación Huésped.
                  </Translate>

                </footer>

              </div>

              <div className={styles.restContent}>
                <p className={styles.summary}>
                  <Translate id="case-studies.huesped.summary">
                    Fundación Huésped, an Argentine nonprofit working at the intersection of public health, 
                    human rights, and access to information, partnered with Shira through its Innovation Lab. 
                    Fundación Huésped built a phishing training program for its 200-person staff using real 
                    phishing attacks their own employees had received in previous months.
                  </Translate>
                </p>

                <p className={styles.highlightsLabel}>
                  <Translate id="case-studies.card.whatTheyValued">What they valued</Translate>
                </p>
                <div className={styles.highlights}>
                  <span className={styles.highlightPill}>
                    <Translate id="case-studies.huesped.highlight1">Personalized content</Translate>
                  </span>
                  <span className={styles.highlightPill}>
                    <Translate id="case-studies.huesped.highlight2">User-friendly</Translate>
                  </span>
                  <span className={styles.highlightPill}>
                    <Translate id="case-studies.huesped.highlight3">Interactive interface</Translate>
                  </span>
                </div>

                <p className={styles.highlightsLabel}>
                  <Translate id="case-studies.huesped.usage.heading">How they used Shira</Translate>
                </p>
                <ul className={styles.detailList}>
                  <li>
                    <strong><Translate id="case-studies.huesped.usage.feature1">Enterprise plan</Translate></strong>: <Translate id="case-studies.huesped.usage.item4">
                      Worked closely with the Shira team to build and deploy a custom training program for their 200-person staff.
                    </Translate>
                  </li>
                  <li>
                    <strong><Translate id="case-studies.huesped.usage.feature2">Real-life attack simulation</Translate></strong>: <Translate id="case-studies.huesped.usage.item1">
                      Built from real phishing emails their staff received.
                    </Translate>
                  </li>
                  <li>
                    <strong><Translate id="case-studies.huesped.usage.feature3">Email phishing simulations</Translate></strong>: <Translate id="case-studies.huesped.usage.item2">
                      Customized Gmail templates to their team's risks.
                    </Translate>
                  </li>
                </ul>

                {huespedExpanded && (
                  <div className={styles.detailsBlock}>
                    <div className={styles.detailSection}>
                      <h4>
                         <Translate id="case-studies.huesped.details.challenge.heading">The Challenge</Translate> 🎯
                      </h4>
                      <p>
                        <Translate id="case-studies.huesped.details.challenge.text">
                          Like many nonprofits, Fundación Huésped handles sensitive information daily, from
                          patient data to research to donor records. Phishing is one of the most
                          common entry points for attacks on organizations like theirs. The team
                          needed a training approach that felt real and relevant to their staff.
                        </Translate>
                      </p>
                    </div>
                    <div className={styles.detailSection}>
                      <h4>
                         <Translate id="case-studies.huesped.details.solution.heading">The Solution</Translate> 🛠️
                      </h4>
                      <p>
                        <Translate id="case-studies.huesped.details.solution.text">
                          Fundación Huésped's Innovation Lab built quizzes using real phishing
                          examples their own employees had actually received. Shira's template
                          library, which replicates everyday tools like Gmail, gave them a
                          realistic starting point that they customized to reflect the specific
                          risks their staff faces.
                        </Translate>
                      </p>
                    </div>
                    <div className={styles.detailSection}>
                      <h4>
                         <Translate id="case-studies.huesped.details.results.heading">The Results</Translate> 📈
                      </h4>
                      <p>
                        <Translate id="case-studies.huesped.details.results.text">
                          Staff vigilance increased noticeably: inquiries to the IT support
                          department about suspicious emails rose significantly, a clear sign that
                          people were more alert and actively applying what they'd learned.
                        </Translate>
                      </p>
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  className={classNames(styles.button, global.buttonDark, styles.readMoreButton)}
                  onClick={() => setHuespedExpanded(!huespedExpanded)}
                >
                  {huespedExpanded ? (
                    <Translate id="case-studies.card.readLess">Show less</Translate>
                  ) : (
                    <Translate id="case-studies.card.readMore">Read more</Translate>
                  )}
                </button>
              </div>

            </div>
          </div>

          {/* ---------- Amir Rashidi / Miaan Group ---------- */}
          <div id="amir-rashidi" className={classNames(styles.card, global.backgroundLight)}>
            <div className={styles.cardBody}>

              <div className={styles.orgMeta}>
                <div className={styles.orgHeader}>
                  <img
                    src={MiaanGroupLogo}
                    alt={translate({
                    id: 'case-studies.amir.logoAlt',
                    message: 'Miaan Group logo',
                    })}
                    className={styles.orgLogo}
                  />
                  <div>
                    <h3>
                      <Translate id="case-studies.amir.org">Miaan Group</Translate>
                    </h3>
                    <a
                      href="https://miaan.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.orgLink}
                    >
                      miaan.org ↗
                    </a>
                  </div>
                </div>

                <div className={styles.metaRow}>
                  <span className={styles.industryTag}>
                    🏷 <Translate id="case-studies.amir.industry">Digital Rights & Security</Translate>
                  </span>
                  <span className={styles.location}>
                    📍 <Translate id="case-studies.amir.location">Middle East</Translate>
                  </span>
                </div>
              </div>

              <div className={styles.quotePanel}>

                <span className={styles.quoteMark}>“</span>

                <div className={styles.quoteTextWrapper}>

                  <blockquote className={styles.quote}>

                  <Translate id="case-studies.amir.quote">
                    The quizzes on Shira are realistic, designed based on real attacks, and create
                    a better experience in terms of training communities.
                  </Translate>

                  </blockquote>

                </div>

                <footer className={styles.quoteAuthor}>

                  <Translate id="case-studies.amir.quoteAuthor.name">
                    Amir Rashidi
                  </Translate>
                  <br/>
                  <Translate id="case-studies.amir.quoteAuthor.role">
                    Director of Digital Rights and Security, Miaan Group
                  </Translate>

                </footer>

              </div>

              <div className={styles.restContent}>
                <p className={styles.summary}>
                  <Translate id="case-studies.amir.summary">
                    Miaan Group works with activists, journalists, and human rights defenders across the Middle East and supports communities operating in some of the region's most high-risk environments. Miaan has used Shira to train these groups and also joined Shira's advisory board, contributing directly to its design.
                  </Translate>
                </p>

                <p className={styles.highlightsLabel}>
                  <Translate id="case-studies.card.whatTheyValued">What they valued</Translate>
                </p>
                <div className={styles.highlights}>
                  <span className={styles.highlightPill}>
                    <Translate id="case-studies.amir.highlight1">Realistic simulations</Translate>
                  </span>
                  <span className={styles.highlightPill}>
                    <Translate id="case-studies.amir.highlight2">Scalable</Translate>
                  </span>
                  <span className={styles.highlightPill}>
                    <Translate id="case-studies.amir.highlight3">Easy to work with</Translate>
                  </span>
                </div>

                <p className={styles.highlightsLabel}>
                  <Translate id="case-studies.amir.usage.heading">How they used Shira</Translate>
                </p>
                <ul className={styles.detailList}>
                  <li>
                    <strong><Translate id="case-studies.amir.usage.feature1">Real-life attack simulation</Translate></strong>: <Translate id="case-studies.amir.usage.item1">
                      Concrete scenarios instead of abstract conversations.
                    </Translate>
                  </li>
                  <li>
                    <strong><Translate id="case-studies.amir.usage.feature2">Training</Translate></strong>: <Translate id="case-studies.amir.usage.item2">
                      Ran 20 training workshops reaching over 150 people.
                    </Translate>
                  </li>
                </ul>

                {amirExpanded && (
                  <div className={styles.detailsBlock}>
                    <div className={styles.detailSection}>
                      <h4>
                         <Translate id="case-studies.amir.details.challenge.heading">The Challenge</Translate> 🎯
                      </h4>
                      <p>
                        <Translate id="case-studies.amir.details.challenge.text">
                          For Amir's community, social engineering conversations tend to happen in
                          the abstract. They were mostly theoretical explanations to people with
                          little to no technical background. Before Shira, he relied on Google's
                          phishing quiz, translated for his audiences through Google Translate. It
                          wasn't built for their context, and it showed.
                        </Translate>
                      </p>
                    </div>
                    <div className={styles.detailSection}>
                      <h4>
                         <Translate id="case-studies.amir.details.solution.heading">The Solution</Translate> 🛠️
                      </h4>
                      <p>
                        <Translate id="case-studies.amir.details.solution.text">
                          Trainings ran mostly online, with careful attention to participant
                          safety: cameras off, pseudonyms instead of real names, and a single
                          trusted contact who knew people's real identities. Where infrastructure
                          was unreliable, Amir recorded materials so participants could access them
                          despite connectivity issues.
                        </Translate>
                      </p>
                    </div>
                    <div className={styles.detailSection}>
                      <h4>
                         <Translate id="case-studies.amir.details.results.heading">The Results</Translate> 📈
                      </h4>
                      <p>
                        <Translate id="case-studies.amir.details.results.text">
                          Over roughly 20 trainings, Amir brought Shira to around 150 people,
                          running close to 150 quizzes in total.
                        </Translate>
                      </p>
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  className={classNames(styles.button, global.buttonDark, styles.readMoreButton)}
                  onClick={() => setAmirExpanded(!amirExpanded)}
                >
                  {amirExpanded ? (
                    <Translate id="case-studies.card.readLess">Show less</Translate>
                  ) : (
                    <Translate id="case-studies.card.readMore">Read more</Translate>
                  )}
                </button>
              </div>

            </div>
          </div>

          {/* ---------- Nothing2Hide ---------- */}
          <div id="nothing2hide" className={classNames(styles.card, global.backgroundLight)}>
            <div className={styles.cardBody}>

              <div className={styles.orgMeta}>
                <div className={styles.orgHeader}>
                  <img
                    src={Nothing2HideLogo}
                    alt={translate({
                    id: 'case-studies.nothing2hide.logoAlt',
                    message: 'Nothing2Hide logo',
                    })}
                    className={styles.orgLogo}
                    />
                  <div>
                    <h3>
                      <Translate id="case-studies.nothing2hide.org">Nothing2Hide</Translate>
                    </h3>
                    <a
                      href="https://nothing2hide.org/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.orgLink}
                    >
                      nothing2hide.org ↗
                    </a>
                  </div>
                </div>

                <div className={styles.metaRow}>
                  <span className={styles.industryTag}>
                    🏷 <Translate id="case-studies.nothing2hide.industry">Digital Security & Journalism</Translate>
                  </span>
                  <span className={styles.location}>
                    📍 <Translate id="case-studies.nothing2hide.location">Europe</Translate>
                  </span>
                </div>
              </div>

              <div className={styles.quotePanel}>

                <span className={styles.quoteMark}>“</span>

                <div className={styles.quoteTextWrapper}>

                  <blockquote className={styles.quote}>

                  <Translate id="case-studies.nothing2hide.quote">
                    Shira allows us to very easily create phishing quizzes with highly realistic
                    views that replicate the interfaces of the tools used by the people we work
                    with.
                  </Translate>

                  </blockquote>

                </div>

                <footer className={styles.quoteAuthor}>

                  <Translate id="case-studies.nothing2hide.quoteAuthor.name">
                    Grégoire Pouget
                  </Translate>
                  <br/>
                  <Translate id="case-studies.nothing2hide.quoteAuthor.role">
                    Co-Founder and Executive Director, Nothing2Hide
                  </Translate>

                </footer>

              </div>

              <div className={styles.restContent}>
                <p className={styles.summary}>
                  <Translate id="case-studies.nothing2hide.summary">
                    Nothing2Hide runs a digital security helpline (Tech4Society) and delivers digital safety training for journalists, activists, and campaigners working in repressive environments.
                  </Translate>
                </p>

                <p className={styles.highlightsLabel}>
                  <Translate id="case-studies.card.whatTheyValued">What they valued</Translate>
                </p>
                <div className={styles.highlights}>
                  <span className={styles.highlightPill}>
                    <Translate id="case-studies.nothing2hide.highlight1">Multi-platform realism</Translate>
                  </span>
                  <span className={styles.highlightPill}>
                    <Translate id="case-studies.nothing2hide.highlight2">Pre-built questions</Translate>
                  </span>
                  <span className={styles.highlightPill}>
                    <Translate id="case-studies.nothing2hide.highlight3">Time-saving</Translate>
                  </span>
                </div>

                <p className={styles.highlightsLabel}>
                  <Translate id="case-studies.nothing2hide.usage.heading">How they used Shira</Translate>
                </p>
                <ul className={styles.detailList}>
                  <li>
                    <strong><Translate id="case-studies.nothing2hide.usage.feature1">Messaging apps & email</Translate></strong>: <Translate id="case-studies.nothing2hide.usage.item1">
                      Quizzes matched the tools their community uses daily.
                    </Translate>
                  </li>
                  <li>
                    <strong><Translate id="case-studies.nothing2hide.usage.feature2">Pre-built questions</Translate></strong>: <Translate id="case-studies.nothing2hide.usage.item2">
                      Worked from ready-made templates.
                    </Translate>
                  </li>
                  <li>
                    <strong><Translate id="case-studies.nothing2hide.usage.feature3">Rollout timeline</Translate></strong>: <Translate id="case-studies.nothing2hide.usage.item3">
                      Rolling out across their organization in mid-2026.
                    </Translate>
                  </li>
                </ul>

                {nothing2hideExpanded && (
                  <div className={styles.detailsBlock}>
                    <div className={styles.detailSection}>
                      <h4>
                         <Translate id="case-studies.nothing2hide.details.solution.heading">The Solution</Translate> 🛠️
                      </h4>
                      <p>
                        <Translate id="case-studies.nothing2hide.details.solution.text">
                          What stood out to Nothing2Hide was Shira's range beyond the inbox: quizzes
                          with highly realistic views that replicate the interfaces people actually
                          use. Not just Gmail, but WhatsApp, Outlook, and other everyday tools. They
                          also valued the question library. Importing existing questions saves time,
                          but more importantly, it means training material doesn't have to start
                          from a blank page.
                        </Translate>
                      </p>
                    </div>
                    <div className={styles.detailSection}>
                      <h4>
                         <Translate id="case-studies.nothing2hide.details.results.heading">Results</Translate> 📈
                      </h4>
                      <p>
                        <Translate id="case-studies.nothing2hide.details.results.text">
                          They are getting ready to roll out Shira across their organization. Check
                          back soon for results.
                        </Translate>
                      </p>
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  className={classNames(styles.button, global.buttonDark, styles.readMoreButton)}
                  onClick={() => setNothing2hideExpanded(!nothing2hideExpanded)}
                >
                  {nothing2hideExpanded ? (
                    <Translate id="case-studies.card.readLess">Show less</Translate>
                  ) : (
                    <Translate id="case-studies.card.readMore">Read more</Translate>
                  )}
                </button>
              </div>

            </div>
          </div>

        </section>

        <section className={classNames(global.center, global.backgroundLight, styles.ctaSection)}>
          <h2>
            <Translate id="case-studies.cta.title">Ready to get started?</Translate>
          </h2>
          <Link className={classNames(styles.button, global.buttonDark)} to="/contact">
            <Translate id="case-studies.cta.button">Get in touch</Translate>
          </Link>
        </section>
      </main>
    </Layout>
  );
}