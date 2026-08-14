import Image from "next/image";
import Link from "next/link";
import { Heart, Minus, ShieldCheck, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StoreFooter } from "@/components/store/footer";
import { StoreHeader } from "@/components/store/header";
import { products, reviews } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug) ?? products[0];

  if (!product) {
    return <div className="p-12 text-center text-slate-700">Product not found.</div>;
  }

  return (
    <div className="min-h-screen">
      <StoreHeader />
      <main className="container-shell section-pad">
        <div className="mb-6 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-800">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-slate-800">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">{product.name}</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2 shadow-sm">
              <div className="relative h-[420px] overflow-hidden rounded-[1.5rem]">
                <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((image, index) => (
                <div key={index} className="relative h-24 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <Image src={image} alt={`${product.name} ${index + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-500">
              <span>{product.brand}</span>
              <span>•</span>
              <span>{product.category}</span>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{product.name}</h1>
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span>{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <span className="text-3xl font-semibold">{formatCurrency(product.price)}</span>
              {product.compareAtPrice > 0 && (
                <span className="text-lg text-slate-400 line-through">{formatCurrency(product.compareAtPrice)}</span>
              )}
            </div>

            <p className="mt-5 text-base leading-7 text-slate-600">{product.description}</p>

            <div className="mt-6 space-y-4">
              <div>
                <p className="mb-2 text-sm font-medium text-slate-700">Choose size</p>
                <div className="flex flex-wrap gap-2">
                  {['S', 'M', 'L', 'XL'].map((size) => (
                    <button key={size} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300">
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-slate-700">Choose color</p>
                <div className="flex flex-wrap gap-2">
                  {['Black', 'White', 'Blue'].map((color) => (
                    <button key={color} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300">
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="h-12 flex-1 rounded-full bg-slate-900 text-white">Add to cart</Button>
              <Button variant="outline" className="h-12 flex-1 rounded-full">
                <Heart className="mr-2 h-4 w-4" /> Wishlist
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-stone-50 p-3">
                <Truck className="h-5 w-5 text-slate-700" />
                <p className="mt-2 text-sm font-medium text-slate-700">Free shipping</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-stone-50 p-3">
                <ShieldCheck className="h-5 w-5 text-slate-700" />
                <p className="mt-2 text-sm font-medium text-slate-700">Secure payment</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-stone-50 p-3">
                <Minus className="h-5 w-5 text-slate-700" />
                <p className="mt-2 text-sm font-medium text-slate-700">Easy returns</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-14">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">Customer reviews</h2>
            <span className="text-sm text-slate-500">{product.reviewCount} verified reviews</span>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {reviews.map((review) => (
              <Card key={review.id} className="p-5">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{review.customer}</p>
                  {review.verified && <span className="text-[10px] uppercase tracking-[0.12em] text-emerald-700">Verified</span>}
                </div>
                <div className="mt-3 flex items-center gap-1 text-amber-400">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={`${review.id}-${i}`} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{review.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{review.comment}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">Related products</h2>
            <Link href="/shop" className="text-sm font-medium text-slate-700">View more</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {products.slice(1, 5).map((related) => (
              <Card key={related.id} className="overflow-hidden">
                <div className="relative h-56">
                  <Image src={related.thumbnail} alt={related.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <p className="text-sm text-slate-500">{related.brand}</p>
                  <h3 className="mt-2 font-semibold text-slate-800">{related.name}</h3>
                  <p className="mt-2 text-xl font-semibold">{formatCurrency(related.price)}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <StoreFooter />
    </div>
  );
}
