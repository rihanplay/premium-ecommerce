import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-50 px-4">
      <div className="max-w-md text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          The page you are looking for may have moved, been removed, or never existed.
        </p>
        <Link href="/" className="mt-8 inline-block">
          <Button className="rounded-full">Go to homepage</Button>
        </Link>
      </div>
    </div>
  );
}
