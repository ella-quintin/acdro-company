// src/pages/SinglePost.jsx
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { client } from "../../lib/sanity";
import { PortableText } from "@portabletext/react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const SinglePost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [morePosts, setMorePosts] = useState([]);


    useEffect(() => {
        client
            .fetch(
                `*[_type == "post" && slug.current == $slug][0]{
        title, body, publishedAt, slug,
        mainImage{asset->{url}}
      }`,
                { slug }
            )
            .then(setPost);

        client
            .fetch(
                `*[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...3]{
        _id, title, slug, publishedAt,
        mainImage{asset->{url}},
        body
      }`,
                { slug }
            )
            .then(setMorePosts);
    }, [slug]);


    if (!post) return <div className="text-center py-20">Loading post...</div>;

    const getExcerpt = (body) => {
        const block = body.find((b) => b._type === "block");
        return block
            ? block.children.map((c) => c.text).join(" ").slice(0, 120) + "..."
            : "";
    };

    return (
        <>
            <Navbar />
            {/* Header Section */}
            <section className="bg-gradient-to-br from-gray-900 via-black to-[#0792FB] text-white py-32 px-6 md:px-12 text-center">
                <div className="max-w-5xl mx-auto">
                    <div className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
                        {post.title}
                    </div>
                </div>
            </section>

            <div className=" py-14 pt-16 px-4 md:px-12 bg-[#050B1E]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl text-white sm:text-2xl md:text-2xl font-bold mb-2">{post.title}</h2>
                    <p className="text-gray-500 text-sm mb-6">
                        {new Date(post.publishedAt).toLocaleDateString()}
                    </p>
                    {post.mainImage?.asset?.url && (
                        <img
                            src={post.mainImage.asset.url}
                            alt={post.title}
                            className="rounded-lg w-full h-80 object-cover mb-8"
                        />
                    )}
                    <div className="prose prose-lg text-white max-w-none">
                        <PortableText value={post.body} />
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                    <h3 className="text-2xl font-bold text-white mb-6">Other posts you might like</h3>
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {morePosts.map((p) => (
                            <div
                                key={p._id}
                                className="bg-[#0F172A] rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
                            >
                                <img
                                    src={p.mainImage?.asset?.url}
                                    alt={p.title}
                                    className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300"
                                />
                                <div className="p-4">
                                    <h4 className="text-lg font-semibold text-white mb-2">{p.title}</h4>

                                    {/* ✅ Show description before date */}
                                    <p className="text-sm text-gray-300 mb-3">
                                        {getExcerpt(p.body)}
                                    </p>

                                    <p className="text-gray-500 text-xs mb-2">
                                        {new Date(p.publishedAt).toLocaleDateString()}
                                    </p>
                                    <Link
                                        to={`/blog/${p.slug.current}`}
                                        className="text-[#0792FB] font-medium text-sm hover:underline cursor-pointer"
                                    >
                                        Read more →
                                    </Link>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default SinglePost;
