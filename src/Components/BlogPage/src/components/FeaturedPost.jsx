import React from 'react';
import { ArrowRight, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FeaturedPost({ id, title, excerpt, imageUrl, author, date }) {
  return (
    <div className="relative h-[85vh] rounded-2xl overflow-hidden group">
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
        <div className="max-w-3xl relative transform transition-all duration-500 translate-y-8 group-hover:translate-y-0">
          <div className="flex items-center space-x-6 text-white/80 mb-6">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span className="text-sm">{author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{date}</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            {title}
          </h2>
          
          <p className="text-lg text-white/90 mb-8 max-w-2xl">
            {excerpt}
          </p>
          
          <Link
            to={`/blog/article/${id}`}
            className="inline-flex items-center space-x-3 text-white border-2 border-white/30 rounded-full px-6 py-3 transition-all hover:bg-white hover:text-black group"
          >
            <span className="font-medium">Read Article</span>
            <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}