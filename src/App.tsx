import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Redirect / → /product */}
          <Route path="/" element={<Navigate to="/product" replace />} />

          {/* Home page */}
          <Route path="/product" element={<ProductPage />} />

          {/* Product details */}
          <Route path="/product/:id" element={<ProductDetail />} />

          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;



// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import ProductDetail from "./pages/ProductDetail";
// import ProductPage from "./pages/ProductPage";
// import NotFound from "./pages/NotFound";
// import { useScrollAnimation } from "./hooks/useScrollAnimation";

// const queryClient = new QueryClient();

// const AppContent = () => {
//   useScrollAnimation();
//   return <Index />;
// };

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//   <Route path="/product" element={<AppContent />} />
//   <Route path="/product/:id" element={<ProductDetail />} />
//   <Route path="*" element={<NotFound />} />
// </Routes>

//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;
