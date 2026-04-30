import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './pricing.module.css';
import global from '../css/custom.module.scss';
import classNames from 'classnames';
import Translate, { translate } from '@docusaurus/Translate';
import useSignupUrl from '@site/src/hooks/useSignupUrl';
import { 
  PricingTable,
  defaultTheme,
  styled,
  DatingAppIcon,
  FacebookIcon,
  GmailIcon,
  OutlookIcon,
  SMSIcon,
  WhatsappIcon,
} from '@horizontal-org/shira-ui'

export default function Pricing() {
  const getSignupUrl = useSignupUrl();

  const appsIcons = (
    <AppsIconRow>
      <DatingAppIcon />
      <FacebookIcon />
      <GmailIcon />
      <OutlookIcon />
      <SMSIcon />
      <WhatsappIcon />
    </AppsIconRow>
  );

  const plans = [
    {
      id: "starter",
      title: translate({
        id: 'view_plans.plans.starter.title',
        message: 'Starter',
      }),
      price: translate({
        id: 'view_plans.plans.starter.price',
        message: 'Free',
      }),
      description: translate({
        id: 'view_plans.plans.starter.description',
        message: 'To try things out and get familiar with Shira',
      }),
      buttonText: translate({
        id: 'view_plans.plans.starter.cta',
        message: 'Get started',
      }),
      buttonType: "outline",
      isCurrentPlan: false,
      onClick: () => { window.open(getSignupUrl('starter')) },
    },
    {
      id: "pro",
      title: translate({
        id: 'view_plans.plans.pro.title',
        message: 'Pro',
      }),
      price: translate({
        id: 'view_plans.plans.pro.price',
        message: '$50/month + $1 per quiz taken',
      }),
      description: translate({
        id: 'view_plans.plans.pro.description',
        message: 'Experience the full power of Shira',
      }),
      buttonText: translate({
        id: 'view_plans.plans.pro.cta',
        message: 'Start 14-day free trial',
      }),
      buttonColor: defaultTheme.colors.green7,
      isCurrentPlan: false,
      isHighlighted: true,
      onClick: () => { window.open(getSignupUrl('pro')) },
    },
    {
      id: "enterprise",
      title: translate({
        id: 'view_plans.plans.enterprise.title',
        message: 'Enterprise',
      }),
      price: translate({
        id: 'view_plans.plans.enterprise.price',
        message: 'Custom pricing',
      }),
      description: translate({
        id: 'view_plans.plans.enterprise.description',
        message: 'Tailor Shira for large organizations and service providers',
      }),
      buttonText: translate({
        id: 'view_plans.plans.enterprise.cta',
        message: 'Contact us',
      }),
      buttonType: "outline",
      isCurrentPlan: false,
      onClick: () => {
        window.open("https://shira.app/contact");
      },
    },
  ];

  const sections = [
    {
      title: translate({
        id: 'view_plans.comparison.admin_management',
        message: 'Admin management',
      }),
      rows: [
        {
          label: translate({
            id: 'view_plans.comparison.rows.hosting',
            message: 'Hosting',
          }),
          tooltip: translate({
            id: 'view_plans.comparison.tooltips.hosting',
            message: 'Let the Shira team host and maintain your Shira (cloud) or install it on your servers (on-premise)',
          }),
          values: [
            {type: 'text', value: translate({
              id: 'view_plans.comparison.values.cloud',
              message: 'Cloud',
            })},
            {type: 'text', value: translate({
              id: 'view_plans.comparison.values.cloud',
              message: 'Cloud',
            })},
            {type: 'text', value: translate({
              id: 'view_plans.comparison.values.cloud_on_premise',
              message: 'Cloud & on-premise',
            })},
          ],
        },
        {
          label: translate({
            id: 'view_plans.comparison.rows.admin_dashboard',
            message: 'Admin dashboard',
          }),
          tooltip: translate({
            id: 'view_plans.comparison.tooltips.admin_dashboard',
            message: 'A central place to manage your phishing education campaigns',
          }),
          values: [{type: 'check'}, {type: 'check'}, {type: 'check'}],
        },
        {
          label: translate({
            id: 'view_plans.comparison.rows.number_of_admins',
            message: 'Number of admins',
          }),
          tooltip: translate({
            id: 'view_plans.comparison.tooltips.number_of_admins',
            message: 'Admins are users who can create and manage phishing education campaigns',
          }),
          values: [
            {type: 'text', value: translate({
              id: 'view_plans.comparison.values.one_admin',
              message: '1 admin',
            })},
            {type: 'text', value: translate({
              id: 'view_plans.comparison.values.unlimited',
              message: 'Unlimited',
            })},
            {type: 'text', value: translate({
              id: 'view_plans.comparison.values.unlimited',
              message: 'Unlimited',
            })},
          ],
        },
      ],
    },
    {
      title: translate({
        id: 'view_plans.comparison.customization',
        message: 'Customization',
      }),
      rows: [
        {
          label: translate({
            id: 'view_plans.comparison.rows.customizable_questions',
            message: 'Fully customizable quiz questions',
          }),
          tooltip: translate({
            id: 'view_plans.comparison.tooltips.customizable_questions',
            message: 'Create quiz questions adapted to the needs of your learners',
          }),
          values: [{type: 'check'}, {type: 'check'}, {type: 'check'}],
        },
        {
          label: translate({
            id: 'view_plans.comparison.rows.question_library',
            message: "Access to the question's library",
          }),
          tooltip: translate({
            id: 'view_plans.comparison.tooltips.question_library',
            message: 'Access dozens of ready-made question templates',
          }),
          values: [{type: 'check'}, {type: 'check'}, {type: 'check'}],
        },
        {
          label: translate({
            id: 'view_plans.comparison.rows.custom_quizzes',
            message: 'Number of custom quizzes',
          }),
          tooltip: translate({
            id: 'view_plans.comparison.tooltips.custom_quizzes',
            message: 'The number of quizzes you can create in your Space',
          }),
          values: [
            {type: 'text', value: translate({
              id: 'view_plans.comparison.values.up_to_three_custom_quizzes',
              message: 'Up to 3 custom quizzes',
            })},
            {type: 'text', value: translate({
              id: 'view_plans.comparison.values.unlimited',
              message: 'Unlimited',
            })},
            {type: 'text', value: translate({
              id: 'view_plans.comparison.values.unlimited',
              message: 'Unlimited',
            })},
          ],
        },
        {
          label: translate({
            id: 'view_plans.comparison.rows.apps_available',
            message: 'Apps available',
          }),
          tooltip: translate({
            id: 'view_plans.comparison.tooltips.apps_available',
            message: 'Create quiz questions using interfaces that look exactly like actual apps your learners use',
          }),
          values: [{type: 'custom', value: appsIcons}, {type: 'custom', value: appsIcons}, {type: 'custom', value: appsIcons}],
        },
      ],
    },
    {
      title: translate({
        id: 'view_plans.comparison.access_control',
        message: 'Access control',
      }),
      rows: [
        {
          label: translate({
            id: 'view_plans.comparison.rows.public_quizzes',
            message: 'Public quizzes',
          }),
          tooltip: translate({
            id: 'view_plans.comparison.tooltips.public_quizzes',
            message: 'Anyone can take your quiz through an easy-to-share URL',
          }),
          values: [{type: 'check'}, {type: 'check'}, {type: 'check'}],
        },
        {
          label: translate({
            id: 'view_plans.comparison.rows.private_quizzes',
            message: 'Private quizzes',
          }),
          tooltip: translate({
            id: 'view_plans.comparison.tooltips.private_quizzes',
            message: 'Only learners registered in your space can take your quizzes',
          }),
          values: [{type: 'text', value: '-'}, {type: 'check'}, {type: 'check'}],
        },
      ],
    },
    {
      title: translate({
        id: 'view_plans.comparison.compliance',
        message: 'Compliance',
      }),
      rows: [
        {
          label: translate({
            id: 'view_plans.comparison.rows.basic_analytics',
            message: 'Basic analytics',
          }),
          tooltip: translate({
            id: 'view_plans.comparison.tooltips.basic_analytics',
            message: 'Track results at the quiz level',
          }),
          values: [{type: 'check'}, {type: 'check'}, {type: 'check'}],
        },
        {
          label: translate({
            id: 'view_plans.comparison.rows.detailed_analytics',
            message: 'Detailed analytics',
          }),
          tooltip: translate({
            id: 'view_plans.comparison.tooltips.detailed_analytics',
            message: 'Track results at the learner and question levels',
          }),
          values: [{type: 'text', value: '-'}, {type: 'check'}, {type: 'check'}],
        },
        {
          label: translate({
            id: 'view_plans.comparison.rows.analysis_tools',
            message: 'Analysis and compliance tools',
          }),
          tooltip: translate({
            id: 'view_plans.comparison.tooltips.analysis_tools',
            message: "Export your team's results into CSV or PDF reports",
          }),
          values: [{type: 'text', value: '-'}, {type: 'check'}, {type: 'check'}],
        },
      ],
    },
    {
      title: translate({
        id: 'view_plans.comparison.custom_support',
        message: 'Custom support',
      }),
      rows: [
        {
          label: translate({
            id: 'view_plans.comparison.rows.tailor_made_training',
            message: 'Tailor-made user training',
          }),
          tooltip: translate({
            id: 'view_plans.comparison.tooltips.tailor_made_training',
            message: 'Skill-building workshops customized by the Shira team for your organization',
          }),
          values: [
            {type: 'text', value: '-'},
            {type: 'text', value: '-'},
            {type: 'text', value: translate({
              id: 'view_plans.comparison.values.available_upon_request',
              message: 'Available upon request',
            })}
          ],
        },
        {
          label: translate({
            id: 'view_plans.comparison.rows.priority_support',
            message: 'Priority support',
          }),
          tooltip: translate({
            id: 'view_plans.comparison.tooltips.priority_support',
            message: 'Quick response time to ensure a smooth experience',
          }),
          values: [
            {type: 'text', value: '-'},
            {type: 'text', value: translate({
              id: 'view_plans.comparison.values.three_business_day_response_time',
              message: '3-business-day response time',
            })},
            {type: 'text', value: translate({
              id: 'view_plans.comparison.values.one_business_day_response_time',
              message: 'Up to 1-business day-response time',
            })}
          ],
        },
      ],
    },
  ];

  return (
    <Layout
      title={translate({
        id: 'pricing.layout.title',
        message: "Shira's pricing",
      })}
      description={translate({
        id: 'pricing.layout.description',
        message:
          "Explore Shira's simple and transparent pricing plans for educators, security professionals, and organizations. Choose between Free, Pro, or Enterprise options with customizable phishing quizzes and privacy-friendly management tools.",
      })}
    >
      {/* maybe delete classNAme */}
      <main className={global.main}>
        <meta
          name="description"
          content={translate({
            id: 'pricing.meta.description',
            message:
              "Explore Shira's simple and transparent pricing plans for educators, security professionals, and organizations. Choose between Free, Pro, or Enterprise options with customizable phishing quizzes and privacy-friendly management tools.",
          })}
        />

        <Wrapper>
          <PricingTable 
              learnMoreText={"Learn more"}
              onLearnMoreClick={() => {}}
              plans={plans}
              sections={sections}
          />
        </Wrapper>

       
      </main>
    </Layout>
  );
}

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 24px;
`

const AppsIconRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;