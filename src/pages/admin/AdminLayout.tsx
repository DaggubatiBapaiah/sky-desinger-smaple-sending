import { Outlet, Link } from 'react-router-dom';
import { LayoutDashboard, Package, DollarSign, Users, Settings, LogOut } from 'lucide-react';

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-ink-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-ink-100 flex flex-col">
        <div className="p-6 border-b border-ink-100">
          <h1 className="text-xl font-bold text-ink-900">Sky Printers</h1>
          <p className="text-sm text-ink-400">Admin Panel</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/admin" className="flex items-center gap-3 px-4 py-3 text-brand-500 bg-brand-50 rounded-lg font-medium">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link to="/admin/products" className="flex items-center gap-3 px-4 py-3 text-ink-600 hover:bg-ink-50 rounded-lg font-medium transition-colors">
            <Package size={20} /> Products
          </Link>
          <Link to="/admin/orders" className="flex items-center gap-3 px-4 py-3 text-ink-600 hover:bg-ink-50 rounded-lg font-medium transition-colors">
            <DollarSign size={20} /> Orders
          </Link>
          <Link to="/admin/customers" className="flex items-center gap-3 px-4 py-3 text-ink-600 hover:bg-ink-50 rounded-lg font-medium transition-colors">
            <Users size={20} /> Customers
          </Link>
        </nav>
        
        <div className="p-4 border-t border-ink-100">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-ink-600 hover:bg-ink-50 rounded-lg font-medium transition-colors">
            <LogOut size={20} /> Back to Website
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
