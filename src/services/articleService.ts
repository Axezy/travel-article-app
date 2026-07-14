import { api } from "../api/axios";

export const getArticles = async (
  page = 1,
  pageSize = 9,
  search = "",
  category = ""
) => {
  const params = new URLSearchParams();

  params.append("pagination[page]", page.toString());
  params.append("pagination[pageSize]", pageSize.toString());

  params.append("populate", "*");

  if (search) {
    params.append(
      "filters[title][$containsi]",
      search
    );
  }

  if (category) {
    params.append(
      "filters[category][name][$eqi]",
      category
    );
  }

  const response = await api.get(
    `/articles?${params.toString()}`
  );

  return response.data;
};

export const getArticleById = async (
  documentId: string
) => {
  const response = await api.get(
    `/articles/${documentId}?populate=*`
  );

  return response.data.data;
};