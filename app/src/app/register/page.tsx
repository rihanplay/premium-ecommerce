"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StoreFooter } from "@/components/store/footer";
import { StoreHeader } from "@/components/store/header";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (error) {
      setError("");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.firstName || !form.lastName || !form.email || !form.password || !form.confirmPassword) {
      setError("Please complete all fields.");
      return;
    }

    if (form.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    router.push("/login");
  };

  return (
    <div className="min-h-screen">
      <StoreHeader />
      <main className="container-shell section-pad">
        <div className="mx-auto max-w-lg">
          <Card className="p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Create account</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">Register</h1>
            <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
              <input
                className="rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none"
                placeholder="First name"
                value={form.firstName}
                onChange={(event) => handleChange("firstName", event.target.value)}
              />
              <input
                className="rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none"
                placeholder="Last name"
                value={form.lastName}
                onChange={(event) => handleChange("lastName", event.target.value)}
              />
              <input
                className="md:col-span-2 rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none"
                placeholder="Email address"
                type="email"
                value={form.email}
                onChange={(event) => handleChange("email", event.target.value)}
              />
              <input
                type="password"
                className="md:col-span-2 rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none"
                placeholder="Password"
                value={form.password}
                onChange={(event) => handleChange("password", event.target.value)}
              />
              <input
                type="password"
                className="md:col-span-2 rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none"
                placeholder="Confirm password"
                value={form.confirmPassword}
                onChange={(event) => handleChange("confirmPassword", event.target.value)}
              />
              {error ? <p className="md:col-span-2 text-sm text-red-600">{error}</p> : null}
              <div className="md:col-span-2">
                <Button type="submit" className="w-full rounded-full">Create account</Button>
              </div>
            </form>
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
