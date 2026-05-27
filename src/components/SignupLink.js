import React from 'react';
import useSignupUrl from '@site/src/hooks/useSignupUrl';

export default function SignupLink({ children, plan = 'starter' }) {
  const getSignupUrl = useSignupUrl();

  return (
    <a href={getSignupUrl(plan)}>
      {children}
    </a>
  );
}
