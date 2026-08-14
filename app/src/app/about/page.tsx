import { StoreHeader } from "@/components/store/header";
import { StoreFooter } from "@/components/store/footer";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <StoreHeader />
      <main className="container-shell section-pad">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Our story</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">About O Store</h1>
          <p className="mt-5 text-base leading-8 text-slate-600">
            O Store was designed to bring thoughtful, premium essentials into everyday Indian living. We curate modern products that balance craftsmanship, utility, and a distinctly contemporary aesthetic.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { title: "Curated quality", text: "We focus on pieces that feel considered, useful, and built to last." },
            { title: "Thoughtful design", text: "From fashion to home essentials, each product is chosen for style and function." },
            { title: "Customer-first", text: "Support, shipping, and service are designed for a premium experience from first click to final delivery." },
          ].map((item) => (
            <Card key={item.title} className="p-6">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </Card>
          ))}
        </div>
      </main>
      <StoreFooter />
    </div>
  );
}
