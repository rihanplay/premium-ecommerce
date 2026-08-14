import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@/types/store";
import { formatCurrency } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden border-slate-200">
      <div className="relative h-72">
        <Image src={product.thumbnail} alt={product.name} fill className="object-cover" />
        <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-sm">
          <Heart className="h-4 w-4 text-slate-700" />
        </button>
        {product.discount > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-slate-900 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
            {product.discount}% OFF
          </span>
        )}
      </div>
      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">{product.brand}</span>
          <span className="flex items-center gap-1 text-xs text-slate-600">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> {product.rating}
          </span>
        </div>
        <Link href={`/products/${product.slug}`} className="block text-lg font-semibold text-slate-800 hover:text-slate-950">
          {product.name}
        </Link>
        <p className="mt-2 text-sm leading-6 text-slate-600">{product.shortDescription}</p>
        <div className="mt-4 flex items-end justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold">{formatCurrency(product.price)}</span>
              {product.compareAtPrice > 0 && (
                <span className="text-sm text-slate-400 line-through">{formatCurrency(product.compareAtPrice)}</span>
              )}
            </div>
          </div>
          <Button size="sm" className="gap-2 rounded-full">
            <ShoppingBag className="h-3.5 w-3.5" /> Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
