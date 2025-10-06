// pages/gallery/index.jsx or GalleryAlbums.jsx
import { useEffect, useState } from "react";
import { client } from "../../lib/sanity";
import Navbar from "../../components/navbar";
import media from "../../assets/images/media.jpg";
import Footer from "../../components/footer";

// ...existing imports...

const GalleryAlbums = () => {
    const [albums, setAlbums] = useState([]);
    const [images, setImages] = useState([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    // Fetch all albums on mount
    useEffect(() => {
        client
            .fetch(
                `*[_type == "album"]{
          _id,
          title,
          "coverImage": coverImage.asset->url,
          "imageCount": count(*[_type == "galleryImage" && references(^._id)])
        }`
            )
            .then(setAlbums);
    }, []);

    // Fetch images and open modal when an album is tapped
    const handleAlbumClick = (album) => {
        const query = `
      *[_type == "galleryImage" && album._ref == $albumId]{
        _id,
        "src": image.asset->url
      }
    `;
        client
            .fetch(query, { albumId: album._id })
            .then((imgs) => {
                setImages(imgs);
                setSelectedImageIndex(0); // Open modal at first image
            });
    };

    // Close modal
    const handleCloseModal = () => {
        setSelectedImageIndex(null);
        setImages([]);
    };

    return (
        <>
            <Navbar />
            <section className="bg-gradient-to-br from-gray-900 via-black to-[#0792FB] text-white py-32 px-6 md:px-12 text-center">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Our Gallery</h2>
                    <p className="text-gray-300 text-lg">
                        View images from our recent activities
                    </p>
                </div>
            </section>

            <div className="bg-[#050B1E]">
                {/* Album grid */}
                <div className="grid gap-8 pt-20 pb-28 px-4 sm:px-6 lg:px-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {albums.map((album) => (
                        <div
                            key={album._id}
                            onClick={() => handleAlbumClick(album)}
                            className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white cursor-pointer"
                        >
                            <img
                                src={album.coverImage}
                                alt={album.title}
                                className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-opacity-30 group-hover:bg-opacity-40 transition-all"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                                <h3 className="text-lg font-semibold text-white">
                                    {album.title}
                                </h3>
                                <p className="text-sm text-gray-200">
                                    {album.imageCount} photo{album.imageCount === 1 ? "" : "s"}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Image Modal */}
                {selectedImageIndex !== null && images.length > 0 && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm"
                        onClick={handleCloseModal}
                    >
                        <button
                            className="absolute left-5 text-white text-5xl hover:text-green-300"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImageIndex(
                                    (selectedImageIndex - 1 + images.length) % images.length
                                );
                            }}
                        >
                            ‹
                        </button>
                        <img
                            src={images[selectedImageIndex].src}
                            alt="Gallery"
                            className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            className="absolute right-5 text-white text-5xl hover:text-green-300"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImageIndex((selectedImageIndex + 1) % images.length);
                            }}
                        >
                            ›
                        </button>
                        <button
                            className="absolute top-5 right-5 text-white text-3xl font-bold hover:text-red-400"
                            onClick={handleCloseModal}
                        >
                            &times;
                        </button>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default GalleryAlbums;