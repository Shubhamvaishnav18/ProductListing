import { Product } from "../types";
import { fallbackProducts } from "./data";

export async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://fakesoreapi.com/products", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.warn("API failed. Falling back to local data.");
      return fallbackProducts;
    }

    return await res.json();
  } catch (error) {
    console.error("Network error fetching products. Falling back to local data.", error);
    return fallbackProducts;
  }
}