import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { articles } from '../data/articles';

export function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Article not found</h1>
          <Link to="/" className="text-indigo-600 dark:text-indigo-400 hover:underline mt-4 inline-block">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:underline mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to articles</span>
        </Link>

        <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex items-center space-x-6 text-gray-500 dark:text-gray-400 mb-8">
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>{article.date}</span>
          </div>
          {article.readTime && (
            <span className="text-sm">{article.readTime}</span>
          )}
        </div>

        <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-6">
          {article.title}
        </h1>

        {article.category && (
          <span className="inline-block px-4 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium rounded-full mb-8">
            {article.category}
          </span>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-600 dark:text-gray-300 mb-6">
              {paragraph.trim()}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}