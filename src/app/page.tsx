import { ProductListing } from "../components/features/ProductListing";
import { fetchProducts } from "../lib/api";

export default async function Home() {
  const products = await fetchProducts();

  return (
    <main className="min-h-screen bg-gray-50">
      <ProductListing initialProducts={products} />
    </main>
  );
}