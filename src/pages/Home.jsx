import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_GNEWS_API_KEY;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          `https://gnews.io/api/v4/top-headlines?lang=en&topic=technology&token=${apiKey}`
        );
        setArticles(res.data.articles);
      } catch (err) {
        setError("Failed to fetch news.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [apiKey]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  return (
    <section className="px-4 py-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Trending Tech News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </section>
  );
}
