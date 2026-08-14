import Link from "next/link";
import { LayoutGrid, Package, Tags, ShoppingCart, Users, Settings, ShieldCheck, BarChart3 } from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutGrid },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Categories", href: "/admin/categories", icon: Tags },
  { label: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { label: "Customers", href: "/admin/customers", icon: Users },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "Settings", href: "/admin/settings", icon: Settings },
  { label: "Roles", href: "/admin/users", icon: ShieldCheck },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-stone-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 p-4 md:p-8 xl:flex-row">
        <aside className="w-full rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm xl:w-72">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white">O</div>
            <div>
              <p className="text-lg font-semibold">O Store</p>
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Admin</p>
            </div>
          </div>
          <nav className="space-y-2">
            {navItems.map(({ label, href, icon: Icon }) => (
              <Link key={label} href={href} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-stone-100">
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
