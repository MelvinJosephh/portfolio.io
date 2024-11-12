import React, { lazy, Suspense } from 'react';

const LazyIndustries = lazy(() => import('./Industries'));

const Industries = props => (
  <Suspense fallback={null}>
    <LazyIndustries {...props} />
  </Suspense>
);

export default Industries;
