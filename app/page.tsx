import LoadingContainer from "@/components/global/LoadingContainer";
import SectionTitle from "@/components/global/SectionTitle";
import FeaturedProductsHome from "@/components/home/FeaturedProductsHome";
import Hero from "@/components/home/Hero";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <>
      <Hero />
      <section className="pt-20">
        <SectionTitle text="featured products" />
        <Suspense fallback={<LoadingContainer />}>
          <FeaturedProductsHome />
        </Suspense>
      </section>
    </>
  );
};
export default HomePage;
