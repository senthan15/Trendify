import React from "react";
import { Link } from "react-router-dom";

export default function NewsCard({ article }) {
  const { title, description, image, publishedAt, url, source } = article;
  const articleId = encodeURIComponent(url);

  return (
    <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden">
      <img
        src={image || "/fallback-image.jpg"}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          {description || "No description available."}
        </p>
        <div className="text-xs mt-3 text-gray-400">
          {new Date(publishedAt).toLocaleDateString()} • {source.name}
        </div>
        <Link
          to={`/article/${articleId}`}
          className="inline-block mt-4 text-blue-500 hover:underline text-sm"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}