import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function useSignupUrl() {
  const { siteConfig } = useDocusaurusContext();
  return (plan = 'starter') =>
    `${siteConfig.customFields.signupFormUrl}?plan=${plan}`;
}
