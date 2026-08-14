import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StoreFooter } from "@/components/store/footer";
import { StoreHeader } from "@/components/store/header";

export default function LoginPage() {
  return (
    <div className="min-h-screen">
      <StoreHeader />
      <main className="container-shell section-pad">
        <div className="mx-auto max-w-md">
          <Card className="p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Welcome back</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">Login</h1>
            <div className="mt-6 space-y-4">
              <input className="w-full rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="Email address" />
              <input type="password" className="w-full rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="Password" />
              <div className="flex items-center justify-between text-sm text-slate-600">
                <label className="flex items-center gap-2"><input type="checkbox" /> Remember me</label>
                <Link href="/forgot-password" className="text-slate-800">Forgot password?</Link>
              </div>
              <Button className="w-full rounded-full">Login</Button>
              <p className="text-center text-sm text-slate-600">
                New to O Store? <Link href="/register" className="font-medium text-slate-900">Create an account</Link>
              </p>
            </div>
          </Card>
        </div>
      </main>
      <StoreFooter />
    </div>
  );
}
