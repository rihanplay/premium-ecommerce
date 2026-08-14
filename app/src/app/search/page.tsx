import { StoreHeader } from "@/components/store/header";
import { StoreFooter } from "@/components/store/footer";
import { ProductCard } from "@/components/store/product-card";
import { products } from "@/lib/mock-data";

export default function SearchPage() {
  return (
    <div className="min-h-screen">
      <StoreHeader />
      <main className="container-shell section-pad">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Search</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">Results for “silk”</h1>
          </div>
          <p className="text-sm text-slate-500">8 results</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <StoreFooter />
    </div>
  );
}
