import { Product } from "../../types";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-100 transition-all duration-300 hover:shadow-2xl hover:ring-gray-200">
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50/70 p-8">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="flex flex-1 flex-col p-7">
        <h2 
          className="line-clamp-2 text-xl font-bold tracking-tight text-gray-950" 
          title={product.title}
        >
          {product.title}
        </h2>
        
        <p 
          className="mt-4 line-clamp-4 text-base text-gray-700 flex-1 leading-relaxed" 
          title={product.description} 
        >
          {product.description}
        </p>
     
        <div className="mt-6 flex items-center justify-between gap-4 border-t border-gray-100 pt-5">
          <span className="text-3xl font-extrabold text-blue-950">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex items-center gap-1.5 rounded-full bg-yellow-50 px-3.5 py-1.5 border border-yellow-200 text-sm font-semibold text-yellow-900 shadow-inner">
            <svg className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.83-4.401z" clipRule="evenodd" />
            </svg>
            <span>{product.rating.rate}</span>
          </div>
        </div>
      </div>
    </article>
  );
}