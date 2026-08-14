import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StoreFooter } from "@/components/store/footer";
import { StoreHeader } from "@/components/store/header";

export default function RegisterPage() {
  return (
    <div className="min-h-screen">
      <StoreHeader />
      <main className="container-shell section-pad">
        <div className="mx-auto max-w-lg">
          <Card className="p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Create account</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">Register</h1>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <input className="rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="First name" />
              <input className="rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="Last name" />
              <input className="md:col-span-2 rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="Email address" />
              <input type="password" className="md:col-span-2 rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="Password" />
              <input type="password" className="md:col-span-2 rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="Confirm password" />
              <div className="md:col-span-2">
                <Button className="w-full rounded-full">Create account</Button>
              </div>
            </div>
            <p className="mt-5 text-center text-sm text-slate-600">
              Already have an account? <Link href="/login" className="font-medium text-slate-900">Login</Link>
            </p>
          </Card>
        </div>
      </main>
      <StoreFooter />
    </div>
  );
}
