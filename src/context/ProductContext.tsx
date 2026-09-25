import React, { createContext, useContext, useState, useEffect } from 'react';
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
