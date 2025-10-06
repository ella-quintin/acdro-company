
import { useEffect, useState } from "react";
import { client } from "../../lib/sanity";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar"
import blog from "../../assets/images/blog.jpg";
import Footer from "../../components/footer";


const BlogList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        client
            .fetch(`*[_type == "post"] | order(publishedAt desc){
        _id, title, slug, body, publishedAt,
        mainImage{asset->{url}}
      }`)
            .then(setPosts);
    }, []);



    const getExcerpt = (body) => {
        const block = body.find((b) => b._type === "block");
        return block ? block.children.map(c => c.text).join(" ").slice(0, 150) + "..." : "";
    };

    return (
        <>
            <Navbar />
            {/* Hero */}
            <section className="bg-gradient-to-br from-gray-900 via-black to-[#0792FB] text-white py-32 px-6 md:px-12 text-center">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Our Blog</h2>
                    <p className="text-gray-300 text-lg">
                        Read our latest stories and updates here
                    </p>
                </div>
            </section>
            <div className="bg-[#050B1E]">
                
                <div className="grid py-16 px-4 sm:px-6 lg:px-20 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <Link to={`/blog/${post.slug.current}`} key={post._id}>
                            <div className="bg-[#0F172A] rounded-xl overflow-hidden shadow hover:shadow-md transition duration-300">
                                <img
                                    src={post.mainImage?.asset?.url || "/placeholder.jpg"}
                                    alt={post.title}
                                    className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300"
                                />
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-white mb-2">{post.title}</h3>
                                    <p className="text-sm text-gray-300 mb-3">{getExcerpt(post.body)}</p>
                                    <p className="text-sm text-gray-500 mb-3">
                                        {new Date(post.publishedAt).toDateString()}
                                    </p>
                                    <span className="text-[#0792FB] font-medium text-sm hover:underline cursor-pointer">
                                        Read more →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default BlogList;
