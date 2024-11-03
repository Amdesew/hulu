'use client';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TelegramPost {
    id: string;
    text: string;
    photos: string[];
    date?: string;
}

const TelegramFeed = () => {
    const [posts, setPosts] = useState<TelegramPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/telegram-posts');
                if (!response.ok) throw new Error('Failed to fetch posts');
                const data = await response.json();
                setPosts(data);
            } catch (err) {
                console.error('Error:', err);
                setError(err instanceof Error ? err.message : 'Failed to load posts');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) return (
        <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );

    if (error) return (
        <div className="text-center p-4 text-red-500 bg-red-50 rounded-lg">
            Error: {error}
        </div>
    );

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                        {/* Image Slider */}
                        {post.photos && post.photos.length > 0 && (
                            <div className="relative aspect-[4/3]">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    navigation
                                    pagination={{ clickable: true }}
                                    className="h-full w-full rounded-t-xl"
                                >
                                    {post.photos.map((photo, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="relative w-full h-full">
                                                <img 
                                                    src={photo}
                                                    alt={`Property image ${index + 1}`}
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.style.display = 'none';
                                                    }}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        )}

                        {/* Content */}
                        <div className="p-4">
                            {/* Date */}
                            {post.date && (
                                <div className="text-sm text-gray-500 mb-2">
                                    {new Date(post.date).toLocaleDateString()}
                                </div>
                            )}

                            {/* Text Content */}
                            <div className="space-y-2">
                                <div className="text-sm text-gray-700 line-clamp-3">
                                    {post.text}
                                </div>
                                
                                {/* "Read More" button if text is long */}
                                {post.text.length > 150 && (
                                    <button 
                                        onClick={() => {
                                            // You can implement a modal or expand functionality here
                                            alert(post.text);
                                        }}
                                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                    >
                                        Read more
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TelegramFeed;