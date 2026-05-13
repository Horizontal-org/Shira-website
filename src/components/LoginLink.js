import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function LoginLink({ children, className }) {
  const { siteConfig } = useDocusaurusContext();
  const url = siteConfig.customFields.quizBaseURL;
  const loginUrl = `${url}/login`;


  return (
    <a href={loginUrl} className={className}>
      {children}
    </a>
  );
}
