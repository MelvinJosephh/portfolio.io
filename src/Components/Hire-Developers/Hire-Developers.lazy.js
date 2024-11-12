import React, { lazy, Suspense } from 'react';

const LazyHire-Developers = lazy(() => import('./Hire-Developers'));

const Hire-Developers = props => (
  <Suspense fallback={null}>
    <LazyHire-Developers {...props} />
  </Suspense>
);

export default Hire-Developers;
