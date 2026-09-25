import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { categories, categoryDetails } from '@/data';

export default function CategoryPage() {
  const { categoryId } = useParams();
  
  const category = categories.find((c) => c.id === categoryId);
  const details = categoryDetails[categoryId as keyof typeof categoryDetails];

  if (!category || !details) {
    return (
      <div className="section-pad bg-ink-50 min-h-screen pt-32">
        <div className="container-px text-center">
          <h1 className="text-3xl font-bold text-ink-900">Category not found</h1>
          <Link to="/" className="mt-6 inline-flex items-center gap-2 text-brand-600 hover:text-brand-700">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-ink-50 min-h-screen pt-24 pb-20">
      <div className="container-px">
        <Link to="/" className="inline-flex items-center gap-2 text-ink-500 hover:text-ink-900 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        
        <div className="flex flex-col md:flex-row gap-8 items-center mb-16 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-ink-100">
          <div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden">
            <img src={category.image} alt={category.alt} className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl md:text-5xl font-bold text-ink-900 mb-4">{category.name}</h1>
            <p className="text-lg text-ink-600 mb-6">{category.description}</p>
            <a href="#contact" className="btn-primary">
              Request a Quote for {category.name}
            </a>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-8">Available Options & Designs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {details.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden border border-ink-100 shadow-sm group">
              <div className="aspect-[4/3] overflow-hidden relative bg-ink-50">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-ink-900 mb-2">{product.name}</h3>
                <p className="text-ink-600 text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
