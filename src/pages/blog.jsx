import Allblogs from "@/components/content/allblogs";
import { useEffect, useState } from "react";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const getArticleData = async () => {
    const response = await fetch(
      "https://dev.to/api/articles?page=1&per_page=9"
    );
    const data = await response.json();
    setArticles(data);
  };
  useEffect(() => {
    getArticleData();
  }, []);
  console.log("articles", articles);
  return (
    <div className="container m-auto grid grid-cols-3 gap-5">
      {articles.map((data) => {
        return (
          <div className="p-4 flex flex-col gap-4 border rounded-xl">
            <img
              className="h-[360px] w-[100%] object-center object-cover rounded-xl"
              src={data.social_image}
              alt=""
            />

            <div>
              <span className="py-1 px-3 bg-[#4B6BFB0D] rounded-md text-[#4B6BFB] text-xs">
                {data.user.username}
              </span>
            </div>
            <p className="text-2xl font-semibold">{data.title}</p>
            <p className="text-[#97989F]">{data.created_at}</p>
          </div>
        );
      })}
      <div>
        <button onClick={() => {}} className="px-3 py-2 border">
          Read More
        </button>
      </div>
    </div>
  );
};
export default Blog;
