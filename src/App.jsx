import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/landing";
import Academy from "./pages/academy";
import ServicesPage from "./pages/services";
import ContactPage from "./pages/contact";
import BlogList from "./pages/bloglist";
import SinglePost from "./pages/singlepost";
import GalleryAlbums from "./pages/gallery";
import AppLayout from "./components/appLayout";

function App() {

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Landing /> },
    { path: "/academy", element: <Academy /> },
    { path: "/services", element: <ServicesPage /> },
    { path: "/blog", element: <BlogList /> },
    { path: "/blog/:slug", element: <SinglePost /> },
    { path: "/gallery", element: <GalleryAlbums /> },
    { path: "/contact-us", element: <ContactPage /> },
      ]
    }
    
  ])
  return (
    <>
      <RouterProvider router={router} />


    </>
  )
}

export default App
