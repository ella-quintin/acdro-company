import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/landing";
import Academy from "./pages/academy";
import ServicesPage from "./pages/services";
import ContactPage from "./pages/contact";

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    { path: "/academy", element: <Academy /> },
    { path: "/services", element: <ServicesPage /> },
    { path: "/contact-us", element: <ContactPage/> },
  ])
  return (
    <>
      <RouterProvider router={router}>
        </RouterProvider>
    
    </>
  )
}

export default App
