import { fetchFeaturedProducts } from "@/utils/actions";
import ProductsGrid from "../products/ProductsGrid";
import EmptyList from "../global/EmptyList";

const FeaturedProductsHome = async () => {
  const products = await fetchFeaturedProducts();

  if (products.length === 0) return <EmptyList heading="No product found!" />;

  return (
    <>
      <ProductsGrid products={products} />
    </>
  );
};
export default FeaturedProductsHome;
