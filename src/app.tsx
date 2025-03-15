import { Suspense, type Component } from 'solid-js';
import { A, useLocation } from '@solidjs/router';
import { Router } from 'solid-app-router'; 
import ScrollToTop from "../src/pages/ScrollToTop";

const App: Component = (props: { children: Element }) => {

  return (
    <>
      <ScrollToTop />
      <main>
        <Suspense>{props.children}</Suspense>
      </main>
    </>
  );
};

export default App;
