import { useState } from 'react';
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

      <div className="bg-white rounded-xl shadow-sm border border-ink-100 overflow-x-auto">
        <table className="w-full text-left min-w-[800px]">
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
