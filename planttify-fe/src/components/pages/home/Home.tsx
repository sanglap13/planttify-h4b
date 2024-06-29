import React, { Suspense } from "react";
import Loader from "../../shared/Loader";
import Hero from "./hero/Hero";

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Hero />
    </Suspense>
  );
};

export default Home;
