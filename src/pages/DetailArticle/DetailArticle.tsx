import { useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import useArticle from "../../hooks/useArticle";
import { useNavigate } from "react-router-dom";

export default function DetailArticle() {
  const { documentId } = useParams();

  const { article, loading } = useArticle(
    documentId!
  );

  const navigate = useNavigate();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!article) {
    return <h1>Article not found</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto py-10">

        <button
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
            <ArrowLeft size={18} />
            Back
        </button>  
        <img
            src={article.cover_image_url}
            alt={article.title}
            className="w-full rounded-xl"
        />

        <h1 className="text-4xl font-bold mt-8">
            {article.title}
        </h1>

        <p className="text-gray-600 mt-6">
            {article.description}
        </p>

    </div>
  );
}