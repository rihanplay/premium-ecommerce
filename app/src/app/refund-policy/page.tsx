import { StoreHeader } from "@/components/store/header";
import { StoreFooter } from "@/components/store/footer";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen">
      <StoreHeader />
      <main className="container-shell section-pad">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Support</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Refund / Return Policy</h1>
          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
            <p>We offer returns on eligible items within 7 days from delivery, subject to product condition and verification.</p>
            <p>Refunds are processed to the original payment method once the returned item is verified and approved.</p>
            <p>Damaged or incorrect items will be resolved promptly with replacement, refund, or courier pickup assistance based on the issue.</p>
          </div>
        </div>
      </main>
      <StoreFooter />
    </div>
  );
}
