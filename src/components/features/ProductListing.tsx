"use client";

import { useState, useMemo } from "react";
import { ProductCard } from "../ui/ProductCard";
import { SearchInput } from "../ui/SearchInput";
import { EmptyState } from "../ui/EmptyState";
import { Product } from "../../types";

interface ProductListingProps {
  initialProducts: Product[];
}

export function ProductListing({ initialProducts }: ProductListingProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [initialProducts, searchTerm]);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">All Products</h1>
          <p className="mt-2 text-sm text-gray-600">Explore our latest collection.</p>
        </div>
        <SearchInput searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <EmptyState searchTerm={searchTerm} />
      )}
    </section>
  );
}