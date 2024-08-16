import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import Label from "./label";
import { useEffect, useState } from "react";
const Maincontent = () => {
  const [count, setCount] = useState(0);
  const [maincontentData, setMaincontentData] = useState([]);
  const getMaincontentdata = async () => {
    const respo = await fetch(`https://dev.to/api/articles?page=1&per_page=5`);
    const data = await respo.json();
    setMaincontentData(data);
  };
  useEffect(() => {
    getMaincontentdata();
  }, []);
  return (
    <>
      <div
        className=" overflow-hidden
       flex container m-auto rounded-xl shadow-2xl"
      >
        {maincontentData?.map((data) => {
          return (
            <div
              style={{
                transition: "all",
                transitionDuration: "0.7s",
                transitionTimingFunction: "ease-in-out",
                transform: `translate(-${count}00%,0)`,
              }}
            >
              <div
                style={{
                  background: `url(${data?.social_image})`,
                }}
                className={`container m-auto h-[651px] bg-[rgba(0,0,0,0.4)] w-[1600px] bg-blend-darken bg-cover bg-center p-3 flex items-end`}
              >
                <div className="shadow-2xl h-[50%] w-[50%] bg-white rounded-xl p-10 border">
                  <Label text={data?.user?.username} />
                  <p className="text-[38px] font-bold">{data?.title}</p>
                  <p className="text-[#97989F]">
                    {data?.readable_publish_date}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-2 container m-auto justify-end mt-3">
        <button
          onClick={() => {
            setCount(count - 1);
            if (count <= 0) {
              setCount(4);
            }
          }}
          className="border border-black p-4 rounded"
        >
          <GrPrevious />
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
            if (count >= 4) {
              setCount(0);
            }
          }}
          className="border border-black p-4 rounded"
        >
          <GrNext />
        </button>
      </div>
    </>
  );
};
export default Maincontent;
