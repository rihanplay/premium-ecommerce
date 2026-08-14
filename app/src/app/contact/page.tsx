import { StoreHeader } from "@/components/store/header";
import { StoreFooter } from "@/components/store/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <StoreHeader />
      <main className="container-shell section-pad">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Support</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Contact us</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="p-5">
            <h2 className="text-lg font-semibold">Reach us</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>Email: hello@ostore.in</p>
              <p>Phone: +91 98765 43210</p>
              <p>Hours: Mon-Sat, 9:00 AM - 7:00 PM</p>
            </div>
          </Card>

          <Card className="p-5">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="Name" />
              <input className="rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="Email" />
              <input className="md:col-span-2 rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="Subject" />
              <textarea className="md:col-span-2 min-h-32 rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="Message" />
            </div>
            <Button className="mt-5 rounded-full">Send message</Button>
          </Card>
        </div>
      </main>
      <StoreFooter />
    </div>
  );
}
