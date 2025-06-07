import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NewsCard from "../components/NewsCard";

export default function Category() {
  const { name } = useParams(); 
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_GNEWS_API_KEY;

  useEffect(() => {
    const fetchCategoryNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `https://gnews.io/api/v4/search?q=${encodeURIComponent(
            name
          )}&lang=en&token=${apiKey}`
        );
        setArticles(res.data.articles);
      } catch (err) {
        console.error("API error:", err);
        setError("Failed to fetch news.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryNews();
  }, [name, apiKey]);

  if (loading)
    return <p className="text-center py-10 text-gray-600">Loading...</p>;

  if (error)
    return <p className="text-center py-10 text-red-500 font-semibold">{error}</p>;

  return (
    <section className="px-4 py-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 capitalize">{name} News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))
        ) : (
          <p className="text-center text-gray-500">No news found for this category.</p>
        )}
      </div>
    </section>
  );
}
