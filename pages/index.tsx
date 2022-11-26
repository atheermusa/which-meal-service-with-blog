import React from "react";

import AboutUs from "../components/about-us";
import Canvas from "../components/canvas";
import Header from "../components/header-original";
import HowItWorks from "../components/how-it-works";
import LazyShow from "../components/lazy-show";
import MainHero from "../components/main-hero";
import MainHeroImage from "../components/main-hero-image";

const App = () => {
    return (
        <div className={`bg-background grid gap-y-8 overflow-hidden`}>
            <div className={`relative bg-background`}>
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
                    >
                        <Header />
                        <MainHero />
                    </div>
                </div>
                <MainHeroImage />
            </div>
            <LazyShow>
                <HowItWorks />
            </LazyShow>
            <LazyShow>
                <>
                    <AboutUs />
                    <Canvas />
                </>
            </LazyShow>
        </div>
    );
};

export default App;
