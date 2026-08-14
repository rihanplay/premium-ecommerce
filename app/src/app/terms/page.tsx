import { StoreHeader } from "@/components/store/header";
import { StoreFooter } from "@/components/store/footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <StoreHeader />
      <main className="container-shell section-pad">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Legal</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Terms & Conditions</h1>
          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
            <p>By placing an order on O Store, you confirm that the information provided is accurate and that you agree to our terms for purchases, payment, shipping, and support.</p>
            <p>Products may be updated, discontinued, or temporarily unavailable, and we reserve the right to limit quantities or refuse orders in accordance with compliance and fraud prevention policies.</p>
          </div>
        </div>
      </main>
      <StoreFooter />
    </div>
  );
}
