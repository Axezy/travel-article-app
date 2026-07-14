import ArticleCard from "../Article/ArticleCard";
import useFeaturedArticles from "../../hooks/useFeaturedArticles";

export default function FeaturedArticles() {
  const { articles, loading } = useFeaturedArticles();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold">
            Featured Articles
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Inspiration for Your Next Journey
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Discover selected travel stories and start planning your next adventure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {articles.map((article) => (
              <ArticleCard
                  key={article.documentId}
                  article={article}
              />
          ))}

        </div>

      </div>
    </section>
  );
}