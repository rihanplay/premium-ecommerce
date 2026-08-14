import { StoreHeader } from "@/components/store/header";
import { StoreFooter } from "@/components/store/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <div className="min-h-screen">
      <StoreHeader />
      <main className="container-shell section-pad">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Account</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">My profile</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-xl font-semibold text-white">AK</div>
              <div>
                <h2 className="text-xl font-semibold">Aisha K.</h2>
                <p className="text-sm text-slate-500">aisha@example.com</p>
              </div>
            </div>
            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <p>Total spent: ₹18,999</p>
              <p>Orders: 4</p>
              <p>Member since: Jan 2025</p>
            </div>
            <Button variant="outline" className="mt-6 w-full rounded-full">Edit profile</Button>
          </Card>

          <Card className="p-5">
            <h2 className="text-lg font-semibold">Profile details</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <input className="rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="First name" defaultValue="Aisha" />
              <input className="rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="Last name" defaultValue="Khandelwal" />
              <input className="md:col-span-2 rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="Email" defaultValue="aisha@example.com" />
              <input className="md:col-span-2 rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="Phone" defaultValue="+91 98765 43210" />
            </div>
            <Button className="mt-6 rounded-full">Save changes</Button>
          </Card>
        </div>
      </main>
      <StoreFooter />
    </div>
  );
}
