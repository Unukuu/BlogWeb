import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import Label from "./label";
import { useCallback, useEffect, useState } from "react";
const Maincontent = () => {
  const [count, setCount] = useState(4);
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
      <div className="container m-auto flex overflow-hidden rounded-2xl ">
        {maincontentData?.map((data) => {
          return (
            <div
              className={`duration-300 ease-in-out -translate-x-[${count}00%]`}
            >
              <div
                style={{
                  background: `url(${data?.social_image})`,
                }}
                className={`container m-auto h-[830px] w-[1600px] bg-[rgba(0,0,0,0.4)] bg-blend-darken bg-cover bg-center p-3 flex items-end`}
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
      <div className="container m-auto flex justify-between mt-3">
        <button
          onClick={() => {
            if (count < 1) {
              setCount(4);
            } else {
              setCount(count - 1);
            }
          }}
          className="border p-5"
        >
          PREVIOUS
        </button>
        <button
          onClick={() => {
            if (count > 3) {
              setCount(0);
            } else {
              setCount(count + 1);
            }
          }}
          className="border p-5"
        >
          NEXT
        </button>
      </div>
    </>
  );
};
export default Maincontent;
