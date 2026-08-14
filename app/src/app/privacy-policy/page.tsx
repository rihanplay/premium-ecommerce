import { StoreHeader } from "@/components/store/header";
import { StoreFooter } from "@/components/store/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <StoreHeader />
      <main className="container-shell section-pad">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Legal</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Privacy Policy</h1>
          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
            <p>We respect your privacy and process personal information only for order fulfilment, account management, and support services.</p>
            <p>We may collect contact details, billing and shipping information, usage analytics, and support communications in order to provide a secure and reliable shopping experience.</p>
            <p>Personal data will never be sold. We use secure systems and access controls to minimize exposure and maintain confidentiality.</p>
          </div>
        </div>
      </main>
      <StoreFooter />
    </div>
  );
}
