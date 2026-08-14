import Image from "next/image";
import { StoreHeader } from "@/components/store/header";
import { StoreFooter } from "@/components/store/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

export default function WishlistPage() {
  return (
    <div className="min-h-screen">
      <StoreHeader />
      <main className="container-shell section-pad">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Saved items</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Wishlist</h1>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="relative h-64">
                <Image src={product.thumbnail} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-500">{product.brand}</p>
                <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
                <p className="mt-2 text-xl font-semibold">{formatCurrency(product.price)}</p>
                <Button className="mt-4 w-full rounded-full">Move to cart</Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <StoreFooter />
    </div>
  );
}
