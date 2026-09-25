import os

# Create admin components
os.makedirs('src/pages/admin', exist_ok=True)
os.makedirs('src/context', exist_ok=True)

# 1. Product Context (to manage state globally and save to localStorage)
context_code = """import React, { createContext, useContext, useState, useEffect } from 'react';
import { categoryDetails as initialCategoryDetails, Category } from '../data';

type Product = {
  name: string;
  description: string;
  image: string;
  price?: number;
};

type ProductContextType = {
  products: Record<string, Product[]>;
  updateProduct: (categoryId: string, index: number, updatedProduct: Product) => void;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Record<string, Product[]>>({});

  useEffect(() => {
    const stored = localStorage.getItem('sky_products');
    if (stored) {
      setProducts(JSON.parse(stored));
    } else {
      setProducts(initialCategoryDetails);
      localStorage.setItem('sky_products', JSON.stringify(initialCategoryDetails));
    }
  }, []);

  const updateProduct = (categoryId: string, index: number, updatedProduct: Product) => {
    setProducts((prev) => {
      const newProducts = { ...prev };
      newProducts[categoryId][index] = updatedProduct;
      localStorage.setItem('sky_products', JSON.stringify(newProducts));
      return newProducts;
    });
  };

  return (
    <ProductContext.Provider value={{ products, updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
"""
with open('src/context/ProductContext.tsx', 'w', encoding='utf-8') as f:
    f.write(context_code)

# 2. Admin Layout
admin_layout_code = """import { Outlet, Link } from 'react-router-dom';
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
"""
with open('src/pages/admin/AdminLayout.tsx', 'w', encoding='utf-8') as f:
    f.write(admin_layout_code)

# 3. Admin Dashboard
admin_dashboard_code = """import { DollarSign, ShoppingCart, Users, TrendingUp } from 'lucide-react';

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
"""
with open('src/pages/admin/AdminDashboard.tsx', 'w', encoding='utf-8') as f:
    f.write(admin_dashboard_code)

# 4. Admin Products Page
admin_products_code = """import { useState } from 'react';
import { useProducts } from '../../context/ProductContext';
import { categories } from '../../data';
import { Pencil, Save, X } from 'lucide-react';

export default function AdminProducts() {
  const { products, updateProduct } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  
  // Temporary state for editing
  const [editForm, setEditForm] = useState({ name: '', description: '', image: '', price: 0 });

  const handleEditClick = (index: number, product: any) => {
    setEditingIndex(index);
    setEditForm({
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price || 0
    });
  };

  const handleSave = (index: number) => {
    updateProduct(selectedCategory, index, editForm);
    setEditingIndex(null);
  };

  const currentProducts = products[selectedCategory] || [];

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-ink-900 mb-8">Manage Products</h2>

      {/* Category Selector */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${selectedCategory === cat.id ? 'bg-brand-500 text-white' : 'bg-white text-ink-600 border border-ink-200 hover:bg-ink-50'}`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-ink-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-ink-50">
            <tr className="text-ink-600 border-b border-ink-100">
              <th className="px-6 py-4 font-medium">Image</th>
              <th className="px-6 py-4 font-medium w-1/4">Name</th>
              <th className="px-6 py-4 font-medium w-1/3">Description</th>
              <th className="px-6 py-4 font-medium">Price (₹)</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            {currentProducts.map((product, idx) => (
              <tr key={idx} className="hover:bg-ink-50/50">
                <td className="px-6 py-4">
                  {editingIndex === idx ? (
                    <input 
                      type="text" 
                      value={editForm.image} 
                      onChange={e => setEditForm({...editForm, image: e.target.value})}
                      className="w-full p-2 border rounded text-sm"
                      placeholder="Image URL"
                    />
                  ) : (
                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg border border-ink-100" />
                  )}
                </td>
                <td className="px-6 py-4">
                  {editingIndex === idx ? (
                    <input 
                      type="text" 
                      value={editForm.name} 
                      onChange={e => setEditForm({...editForm, name: e.target.value})}
                      className="w-full p-2 border rounded"
                    />
                  ) : (
                    <p className="font-semibold text-ink-900">{product.name}</p>
                  )}
                </td>
                <td className="px-6 py-4">
                  {editingIndex === idx ? (
                    <textarea 
                      value={editForm.description} 
                      onChange={e => setEditForm({...editForm, description: e.target.value})}
                      className="w-full p-2 border rounded text-sm h-20"
                    />
                  ) : (
                    <p className="text-sm text-ink-500 line-clamp-2">{product.description}</p>
                  )}
                </td>
                <td className="px-6 py-4">
                  {editingIndex === idx ? (
                    <input 
                      type="number" 
                      value={editForm.price} 
                      onChange={e => setEditForm({...editForm, price: parseFloat(e.target.value)})}
                      className="w-24 p-2 border rounded"
                    />
                  ) : (
                    <p className="font-medium text-ink-900">₹{product.price || 0}</p>
                  )}
                </td>
                <td className="px-6 py-4 text-right">
                  {editingIndex === idx ? (
                    <div className="flex justify-end gap-2">
                      <button onClick={() => setEditingIndex(null)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><X size={20}/></button>
                      <button onClick={() => handleSave(idx)} className="p-2 text-green-500 hover:bg-green-50 rounded-lg"><Save size={20}/></button>
                    </div>
                  ) : (
                    <button onClick={() => handleEditClick(idx, product)} className="p-2 text-brand-500 hover:bg-brand-50 rounded-lg">
                      <Pencil size={20} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
"""
with open('src/pages/admin/AdminProducts.tsx', 'w', encoding='utf-8') as f:
    f.write(admin_products_code)

# 5. Update App.tsx
with open('src/App.tsx', 'r', encoding='utf-8') as f:
    app_code = f.read()

# Add Context Provider and Admin Routes
new_imports = """import { ProductProvider } from '@/context/ProductContext';
import AdminLayout from '@/pages/admin/AdminLayout';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import AdminProducts from '@/pages/admin/AdminProducts';
"""

app_code = app_code.replace("import CategoryPage from '@/pages/CategoryPage';", "import CategoryPage from '@/pages/CategoryPage';\n" + new_imports)

app_routes_old = """    <Router>
      <PromoBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </Router>"""

app_routes_new = """    <ProductProvider>
      <Router>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
          </Route>

          {/* Public Routes */}
          <Route path="*" element={
            <>
              <PromoBar />
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:categoryId" element={<CategoryPage />} />
              </Routes>
              <Footer />
              <FloatingWhatsApp />
            </>
          } />
        </Routes>
      </Router>
    </ProductProvider>"""

app_code = app_code.replace(app_routes_old, app_routes_new)
with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(app_code)

# 6. Update CategoryPage.tsx to use Context
with open('src/pages/CategoryPage.tsx', 'r', encoding='utf-8') as f:
    cat_code = f.read()

cat_code = cat_code.replace("import { categories, categoryDetails } from '../data';", "import { categories } from '../data';\nimport { useProducts } from '../context/ProductContext';")

cat_code = cat_code.replace("  const products = categoryId && categoryDetails[categoryId] ? categoryDetails[categoryId] : [];", """  const { products: allProducts } = useProducts();
  const products = categoryId && allProducts[categoryId] ? allProducts[categoryId] : [];""")

with open('src/pages/CategoryPage.tsx', 'w', encoding='utf-8') as f:
    f.write(cat_code)

print("Admin panel setup complete.")
