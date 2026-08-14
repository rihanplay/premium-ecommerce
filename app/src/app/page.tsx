import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BadgeCheck, ChevronRight, Heart, ShieldCheck, ShoppingBag, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StoreFooter } from "@/components/store/footer";
import { StoreHeader } from "@/components/store/header";
import { categories, products, reviews, topBanners } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <StoreHeader />

      <main>
        <div className="bg-stone-100">
          <div className="container-shell section-pad">
            <div className="mb-4 flex items-center justify-between rounded-full border border-slate-200 bg-white px-4 py-2 text-xs text-slate-600 shadow-sm">
              <span className="font-medium text-slate-800">Free delivery on orders above ₹1,999</span>
              <span className="hidden sm:inline">New season arrivals now live</span>
            </div>
          </div>
        </div>

        <section className="container-shell section-pad pt-0">
          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="overflow-hidden rounded-[2rem] bg-slate-900 text-white shadow-xl">
              <div className="grid min-h-[420px] items-end lg:grid-cols-2">
                <div className="p-6 sm:p-8 lg:p-10">
                  <p className="mb-3 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-stone-200">
                    Signature edit
                  </p>
                  <h1 className="max-w-md text-4xl font-semibold tracking-tight sm:text-5xl">Built for elevated everyday living.</h1>
                  <p className="mt-4 max-w-md text-sm leading-6 text-stone-300 sm:text-base">
                    Discover refined essentials for home, style, and rituals across the modern Indian lifestyle.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button href="/shop" className="bg-white text-slate-900 hover:bg-stone-100">Shop collection</Button>
                    <Button href="/categories" variant="outline" className="border-white/25 bg-white/5 text-white hover:bg-white/10">Explore categories</Button>
                  </div>
                  <div className="mt-8 flex items-center gap-6 text-sm text-stone-200">
                    <span className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-400" /> Trusted quality</span>
                    <span className="flex items-center gap-2"><Truck className="h-4 w-4 text-emerald-400" /> Fast delivery</span>
                  </div>
                </div>
                <div className="relative h-full min-h-[260px]">
                  <Image src={topBanners[0].desktopImage} alt={topBanners[0].title} fill className="object-cover opacity-80" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="overflow-hidden border-0 bg-[#efe8dd]">
                <div className="grid h-full grid-cols-[1fr_1.2fr] items-center">
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Deal of the week</p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight">Up to 40% off</h3>
                    <p className="mt-2 text-sm text-slate-600">Modern icons for your daily rhythm.</p>
                    <Link href="/shop" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-900">
                      Shop now <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="relative h-52">
                    <Image src={topBanners[1].desktopImage} alt="deal banner" fill className="object-cover" />
                  </div>
                </div>
              </Card>
              <Card className="p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Why buyers return</p>
                <div className="mt-5 space-y-4">
                  {[
                    { icon: ShieldCheck, label: "Secure checkout" },
                    { icon: Truck, label: "Pan-India delivery" },
                    { icon: BadgeCheck, label: "Quality checked" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3 rounded-xl bg-stone-50 p-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-sm">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="text-sm font-medium text-slate-700">{label}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="container-shell pb-8">
          <div className="mb-6 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Shop by category</p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight">Featured categories</h2>
            </div>
            <Link href="/categories" className="text-sm font-medium text-slate-700">
              View all
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <Link key={category.id} href={`/category/${category.slug}`} className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="relative h-64 overflow-hidden">
                  <Image src={category.image} alt={category.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="container-shell section-pad pt-0">
          <div className="mb-6 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Bestsellers</p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight">Popular picks</h2>
            </div>
            <Link href="/shop" className="text-sm font-medium text-slate-700">See more</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <Card key={product.id} className="overflow-hidden border-slate-200">
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
                    <span className="text-xs uppercase tracking-[0.15em] text-slate-500">{product.brand}</span>
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
                    <Button href={`/products/${product.slug}`} size="sm" className="gap-2 rounded-full">
                      <ShoppingBag className="h-3.5 w-3.5" /> Add
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container-shell section-pad pt-0">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-6 text-white shadow-lg md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-stone-300">Limited collection</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">New arrivals for a fresh start.</h2>
              </div>
              <Link href="/shop?sort=new" className="inline-flex items-center gap-2 text-sm font-medium text-stone-100">
                View the drop <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {products.slice(2, 5).map((product) => (
                <div key={product.id} className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                  <div className="relative h-52 overflow-hidden rounded-xl">
                    <Image src={product.thumbnail} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-2">
                    <p className="text-base font-medium">{product.name}</p>
                    <span className="text-sm text-stone-200">{formatCurrency(product.price)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-shell section-pad pt-0">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Reviews</p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight">What customers say</h2>
            </div>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {reviews.map((review) => (
              <Card key={review.id} className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-800">{review.customer}</p>
                    <div className="mt-2 flex items-center gap-1 text-amber-400">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={`${review.id}-${i}`} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  {review.verified && (
                    <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-emerald-700">
                      Verified
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{review.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{review.comment}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.12em] text-slate-400">{review.date}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="container-shell section-pad pt-0">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "Fast nationwide shipping", text: "Secure, trackable delivery across India with premium packaging." },
              { title: "Easy 14-day returns", text: "Smooth exchanges and returns within a simple customer-led process." },
              { title: "Award-winning support", text: "Friendly after-sales care with real humans and quick resolution." },
            ].map((item) => (
              <Card key={item.title} className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-stone-100 text-slate-900">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="container-shell pb-16">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Newsletter</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">Stay in the loop for the next drop.</h2>
              </div>
              <div className="flex w-full max-w-xl items-center gap-2 rounded-full border border-slate-200 bg-stone-50 p-1.5">
                <input
                  aria-label="Email address"
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-3 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
                <Button className="rounded-full">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <StoreFooter />
    </div>
  );
}
