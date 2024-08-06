import { fetchSingleProduct } from "@/utils/actions";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import BreadCrumbs from "@/components/signle-product/BreadCrumbs";
import AddToCart from "@/components/signle-product/AddToCart";
import ProductRating from "@/components/signle-product/ProductRating";
import type { Metadata } from "next";

// Fetch product data starts ------
const fetchData = async (id: string) => {
  const product = await fetchSingleProduct(id);
  return product;
};
// Fetch product data ends ------

// Metadata starts ------
export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> => {
  const product = await fetchData(params.id);

  return {
    title: `${product.name.toUpperCase()} | ${
      process.env.NEXT_PUBLIC_APP_TITLE
    }`,
    description: product.description,
  };
};
// Metadata ends ------

// Main component starts ------
const SingleProduct = async ({ params }: { params: { id: string } }) => {
  const product = await fetchData(params.id);
  const { name, image, company, description, price } = product;
  const dollarsAmount = formatCurrency(price);

  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE FIRST COL */}
        <div className="relative h-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
            priority
            className="w-full rounded-md object-cover"
          />
        </div>
        {/* PRODUCT INFO SECOND COL */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <FavoriteToggleButton productId={params.id} />
          </div>
          <ProductRating productId={params.id} />
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded-md">
            {dollarsAmount}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddToCart productId={params.id} />
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
