import React, { lazy, Suspense } from 'react';

const LazyHire-Talent = lazy(() => import('./Hire-Talent'));

const Hire-Talent = props => (
  <Suspense fallback={null}>
    <LazyHire-Talent {...props} />
  </Suspense>
);

export default Hire-Talent;
