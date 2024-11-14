import { useContext, useEffect, useState } from "react";
import { MyContext } from "@/provider/myprovider";
import Loader from "@/components/loader";
const Allblogs = () => {
  const { searchValue, setIsLoading, isLoading } = useContext(MyContext);
  const [dataallblogs, setDataallblogs] = useState([]);
  const [dataArr, setDataArr] = useState([]);
  const [count, setCount] = useState(3);
  const getDataHome = async () => {
    setIsLoading(true);
    const respo = await fetch(
      `https://dev.to/api/articles?page=1&per_page=${count}`
    );
    const data = await respo.json();
    setDataallblogs(data);

    setIsLoading(false);
  };
  useEffect(() => {
    getDataHome();
  }, [count]);
  console.log(dataallblogs);
  return (
    <div className="container m-auto flex flex-col gap-8 mb-24">
      <h1 className="text-2xl font-bold text-black font-sans">All blog post</h1>
      <nav className="flex justify-between font-bold text-xs">
        <div className="flex gap-5 font-bold text-xs">
          <a href="">All</a>
          <a href="">Design</a>
          <a href="">Travel</a>
          <a href="">Fashion</a>
          <a href="">Technology</a>
          <a href="">Branding</a>
        </div>
        <a href="">View All</a>
      </nav>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {dataallblogs.map((data) => {
            return (
              <div className="p-4 flex flex-col gap-4 border rounded-xl">
                <img
                  className="h-[360px] w-[100%] object-center object-cover rounded-xl"
                  src={
                    data.cover_image === null
                      ? data.social_image
                      : data.cover_image
                  }
                  alt="photo empty"
                />

                <div>
                  <span className="py-1 px-3 bg-[#4B6BFB0D] rounded-md text-[#4B6BFB] text-xs">
                    {data.user.name}
                  </span>
                </div>
                <p className="text-2xl font-semibold">{data.title}</p>
                <p className="text-[#97989F]">{data.readable_publish_date}</p>
              </div>
            );
          })}
        </div>
      )}

      <div className="text-center">
        <button
          onClick={() => {
            setCount(count + 3);
          }}
          className=" border text-[#696A75] py-3 px-5 rounded-xl"
        >
          Load More
        </button>
      </div>
    </div>
  );
};
export default Allblogs;
