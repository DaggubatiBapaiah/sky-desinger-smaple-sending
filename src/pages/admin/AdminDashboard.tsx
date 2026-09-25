import { DollarSign, ShoppingCart, Users, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-ink-900 mb-8">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-ink-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-ink-500 font-medium">Total Revenue</h3>
            <div className="p-2 bg-green-50 rounded-lg"><DollarSign className="text-green-600" size={24}/></div>
          </div>
          <p className="text-3xl font-bold text-ink-900">₹2,45,000</p>
          <p className="text-sm text-green-600 mt-2 flex items-center gap-1"><TrendingUp size={16}/> +12.5% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-ink-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-ink-500 font-medium">Total Orders</h3>
            <div className="p-2 bg-brand-50 rounded-lg"><ShoppingCart className="text-brand-600" size={24}/></div>
          </div>
          <p className="text-3xl font-bold text-ink-900">1,248</p>
          <p className="text-sm text-green-600 mt-2 flex items-center gap-1"><TrendingUp size={16}/> +8.2% from last month</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-ink-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-ink-500 font-medium">Active Customers</h3>
            <div className="p-2 bg-blue-50 rounded-lg"><Users className="text-blue-600" size={24}/></div>
          </div>
          <p className="text-3xl font-bold text-ink-900">842</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-ink-100">
        <h3 className="text-lg font-bold text-ink-900 mb-4">Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-ink-100 text-ink-500">
                <th className="pb-3 font-medium">Order ID</th>
                <th className="pb-3 font-medium">Customer</th>
                <th className="pb-3 font-medium">Product</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-50">
              <tr>
                <td className="py-4 font-medium">#ORD-1024</td>
                <td className="py-4 text-ink-600">Rahul Sharma</td>
                <td className="py-4 text-ink-600">Premium Visiting Cards</td>
                <td className="py-4 text-ink-900 font-medium">₹1,200</td>
                <td className="py-4"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Completed</span></td>
              </tr>
              <tr>
                <td className="py-4 font-medium">#ORD-1025</td>
                <td className="py-4 text-ink-600">Priya Patel</td>
                <td className="py-4 text-ink-600">Canvas Print</td>
                <td className="py-4 text-ink-900 font-medium">₹4,500</td>
                <td className="py-4"><span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">Processing</span></td>
              </tr>
              <tr>
                <td className="py-4 font-medium">#ORD-1026</td>
                <td className="py-4 text-ink-600">Anil Kumar</td>
                <td className="py-4 text-ink-600">Custom Hoodies</td>
                <td className="py-4 text-ink-900 font-medium">₹8,900</td>
                <td className="py-4"><span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">Processing</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
