import React from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PostCard({ id, title, excerpt, imageUrl, author, date, category }) {
  return (
    <article className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <span className="px-4 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium rounded-full">
            {category}
          </span>
          <div className="flex items-center text-gray-500 dark:text-gray-400 space-x-2">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{date}</span>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            By {author}
          </span>
          <Link
            to={`/blog/article/${id}`}
            className="group/btn flex items-center space-x-2 text-indigo-600 dark:text-indigo-400"
          >
            <span className="font-medium">Read More</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}