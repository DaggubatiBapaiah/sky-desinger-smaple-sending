import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PromoBar from '@/components/PromoBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Home from '@/pages/Home';
import CategoryPage from '@/pages/CategoryPage';
import { ProductProvider } from '@/context/ProductContext';
import AdminLayout from '@/pages/admin/AdminLayout';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import AdminProducts from '@/pages/admin/AdminProducts';


function App() {
  return (
    <ProductProvider>
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
    </ProductProvider>
  );
}

export default App;
