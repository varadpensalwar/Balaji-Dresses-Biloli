import "locomotive-scroll/dist/locomotive-scroll.css";

import { Suspense, lazy, useEffect, useRef, useState } from "react";
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from "react-locomotive-scroll";
import { ThemeProvider } from "styled-components";

import Loader from "./components/Loader";
import Home from "./sections/Home";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";

const ScrollTriggerProxy = lazy(() => import("./components/ScrollTriggerProxy"));
const About = lazy(() => import("./sections/About"));
const Shop = lazy(() => import("./sections/Shop"));
const Marquee = lazy(() => import("./sections/Marquee"));
const NewArrival = lazy(() => import("./sections/NewArrival"));
const Footer = lazy(() => import("./sections/Footer"));

const DeferredFallback = () => (
  <>
    <section aria-hidden="true" style={{ minHeight: "100vh" }} />
    <section aria-hidden="true" style={{ minHeight: "100vh" }} />
    <section aria-hidden="true" style={{ minHeight: "100vh" }} />
    <section aria-hidden="true" style={{ minHeight: "100vh" }} />
    <section aria-hidden="true" style={{ minHeight: "100vh" }} />
  </>
);

const RefreshOnDeferredMount = ({ isReady }) => {
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (!isReady) return undefined;

    const timeoutId = window.setTimeout(() => {
      scroll?.update();
      window.dispatchEvent(new Event("resize"));
    }, 100);

    return () => window.clearTimeout(timeoutId);
  }, [isReady, scroll]);

  return null;
};

function App() {
  const containerRef = useRef(null);
  const [showLoader, setShowLoader] = useState(true);
  const [mountLoader, setMountLoader] = useState(true);
  const [renderDeferredSections, setRenderDeferredSections] = useState(false);

  useEffect(() => {
    const loaderTimeoutId = window.setTimeout(() => {
      setShowLoader(false);
    }, 1200);
    const loaderUnmountTimeoutId = window.setTimeout(() => {
      setMountLoader(false);
    }, 1900);

    const scheduleIdle =
      window.requestIdleCallback ||
      ((callback) => window.setTimeout(callback, 1200));
    const cancelIdle = window.cancelIdleCallback || window.clearTimeout;
    const idleId = scheduleIdle(() => {
      setRenderDeferredSections(true);
    });

    return () => {
      window.clearTimeout(loaderTimeoutId);
      window.clearTimeout(loaderUnmountTimeoutId);
      cancelIdle(idleId);
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={[renderDeferredSections]}
          containerRef={containerRef}
        >
          {mountLoader ? <Loader isExiting={!showLoader} /> : null}
          <main className="App" data-scroll-container ref={containerRef}>
            <Home key="home" />
            <RefreshOnDeferredMount isReady={renderDeferredSections} />
            {renderDeferredSections ? (
              <Suspense fallback={<DeferredFallback />}>
                <ScrollTriggerProxy />
                <About key="about" />
                <Shop key="Shop" />
                <Marquee key="marquee" />
                <NewArrival key="new arrival" />
                <Footer key="Footer" />
              </Suspense>
            ) : (
              <DeferredFallback />
            )}
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
