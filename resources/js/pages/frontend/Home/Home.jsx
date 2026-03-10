import React, { Suspense, lazy, useState, useEffect } from "react";

// Layout
import FrontEnd_Layout from "../Layout/FrontEnd_Layout";
import HeroSectionSkeleton from "./HeroSection/HeroSectionSkeleton";


// Lazy Hero Sections
const HeroSection1 = lazy(() => import("./HeroSection/HeroSection1"));
const HeroSection2 = lazy(() => import("./HeroSection/HeroSection2"));
const HeroSection3 = lazy(() => import("./HeroSection/HeroSection3"));
const HeroSectionCustom = lazy(() => import("./HeroSection/HeroSectionCustom"));

const Home = () => {



  return (
    <FrontEnd_Layout>
      <Suspense fallback={<HeroSectionSkeleton />}>
        <HeroSection1 />
        <HeroSectionCustom />
      </Suspense>


    </FrontEnd_Layout>
  );
};

export default Home;