import Link from "next/link";
import Image from "next/image";
import { StoreHeader } from "@/components/store/header";
import { StoreFooter } from "@/components/store/footer";
import { categories } from "@/lib/mock-data";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen">
      <StoreHeader />
      <main className="container-shell section-pad">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Browse</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Categories</h1>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.id} href={`/category/${category.slug}`} className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="relative h-64 overflow-hidden">
                <Image src={category.image} alt={category.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold">{category.name}</h2>
                <p className="mt-1 text-sm text-slate-600">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <StoreFooter />
    </div>
  );
}
