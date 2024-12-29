import React, { Suspense } from 'react';
import Loading from './components/Loading';

const Experience = React.lazy(() => import('./components/Experience'));

export default function App() {
  return (
    <div className="w-screen h-screen bg-slate-950">
      <Suspense fallback={<Loading />}>
        <Experience />
      </Suspense>
    </div>
  );
}
