import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StoreFooter } from "@/components/store/footer";
import { StoreHeader } from "@/components/store/header";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen">
      <StoreHeader />
      <main className="container-shell section-pad">
        <div className="mx-auto max-w-md">
          <Card className="p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Password reset</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">Forgot password</h1>
            <p className="mt-3 text-sm leading-6 text-slate-600">Enter the email address linked to your account. We’ll send a reset link.</p>
            <div className="mt-6 space-y-4">
              <input className="w-full rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="Email address" />
              <Button className="w-full rounded-full">Send reset link</Button>
              <p className="text-center text-sm text-slate-600">
                Back to <Link href="/login" className="font-medium text-slate-900">login</Link>
              </p>
            </div>
          </Card>
        </div>
      </main>
      <StoreFooter />
    </div>
  );
}
