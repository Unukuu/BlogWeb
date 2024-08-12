import Allblogs from "@/components/content/allblogs";
import { SearchContext } from "@/provider/search-provider";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

const Blogall = () => {
  const { searchValue } = useContext(SearchContext);
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(0);
  const getArticleData = async () => {
    const response = await fetch(
      `https://dev.to/api/articles?page=1&per_page=${9 + count}`
    );
    const data = await response.json();
    setArticles(data);
  };
  useEffect(() => {
    getArticleData();
  }, [count]);

  const findPost = articles?.filter((article) =>
    article?.title?.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <>
      <h1 className="text-9xl">search:{searchValue}</h1>
      <div className="container m-auto grid grid-cols-3 gap-5">
        {findPost?.map((data) => {
          return (
            <Link href={"/blog/" + data.id}>
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
            </Link>
          );
        })}
      </div>
      <div className="text-center mt-7 mb-24">
        <button
          onClick={() => {
            setCount(count + 3);
          }}
          className="px-3 py-2 border rounded-lg"
        >
          Read More
        </button>
      </div>
    </>
  );
};
export default Blogall;
