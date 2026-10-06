import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import('./pages/HomePage'))
const CollectionPage = lazy(() => import('./pages/CollectionPage'))

const App = () => {

  return (
    <div className='min-h-screen bg-(--c2) text-(--c5)'>
      <Navbar />

      <Suspense fallback={
        <h2 className="text-2xl font-medium text-center py-20 text-(--c4)">
          Loading...
        </h2>
      }>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<CollectionPage />} />
        </Routes>
      </Suspense>

      <ToastContainer />
    </div>
  )
}

export default App