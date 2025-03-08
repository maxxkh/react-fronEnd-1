import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
// import { Header } from './components/Header';
import { FeaturedPost } from './components/FeaturedPost';
import { PostCard } from './components/PostCard';
import { Newsletter } from './components/Newsletter';
import { ArticleDetail } from './components/ArticleDetail';
import { articles } from './data/articles';

function HomePage() {
  const featuredPost = articles[0];
  const recentPosts = articles.slice(1);
  const navigate = useNavigate(); // Use `useNavigate` for navigation

  return (
    <>
      <main className="pt-20">
        {/* Featured Post */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <FeaturedPost {...featuredPost} />
        </div>

        {/* Recent Posts */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Latest Insights
            </h2>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <Newsletter />
      </main>

      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>© 2025 INSIGHT. Exploring the frontiers of technology.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Nested route */}
        <Route path="/article/:id" element={<ArticleDetail />} /> {/* Nested route */}
      </Routes>
    </div>
  );
}

export default BlogPage;