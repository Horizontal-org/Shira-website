import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function SignupLink({ children }) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <a href={siteConfig.customFields.signupFormUrl}>
      {children}
    </a>
  );
}
