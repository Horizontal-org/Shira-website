import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function QuizLink({ children, className }) {
  const { siteConfig } = useDocusaurusContext();
  const url = siteConfig.customFields.quizBaseURL;

  return (
    <a href={url} className={className}>
      {children || url}
    </a>
  );
}
