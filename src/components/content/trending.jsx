import { useEffect, useState } from "react";
import Label from "./label";

const Trending = () => {
  const [dataTrend, setDataTrend] = useState([]);
  const getTrendData = async () => {
    const respo = await fetch(
      "https://dev.to/api/articles?page=30&per_page=10"
    );
    const data = await respo.json();
    setDataTrend(data);
    console.log(data);
  };
  useEffect(() => {
    getTrendData();
  }, []);
  return (
    <section className="container m-auto my-24">
      <p className="text-2xl font-bold text-black font-sans mb-8">Trending</p>
      <div className="flex justify-between gap-8 overflow-hidden">
        {dataTrend.map((data) => {
          return (
            <div className="animate-[wiggle_20s_ease-in-out_infinite]">
              <div
                className={`bg-cover bg-center bg-blend-darken w-[290px] h-[320px] rounded-2xl flex flex-col justify-end p-7 gap-4 bg-[rgba(0,0,0,0.5)]`}
                style={{
                  backgroundImage: `url(${data?.social_image})`,
                }}
              >
                <div>
                  <Label text={data?.user?.username} />
                </div>

                <p className="text-white font-sans text-xl">{data?.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Trending;
