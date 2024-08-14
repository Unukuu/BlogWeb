import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import Label from "./label";
import { useEffect, useState } from "react";
const Maincontent = () => {
  const [count, setCount] = useState(1);
  const [maincontentData, setMaincontentData] = useState([]);
  const getMaincontentdata = async () => {
    const respo = await fetch(
      `https://dev.to/api/articles?page=${count}&per_page=1`
    );
    const data = await respo.json();
    setMaincontentData(data[0]);
  };
  useEffect(() => {
    getMaincontentdata();
  }, [count]);
  return (
    <>
      <div
        style={{
          background: `url(${maincontentData?.social_image})`,
        }}
        className={`container m-auto h-[651px] bg-[rgba(0,0,0,0.4)] bg-blend-darken rounded-xl bg-cover bg-center p-3 flex items-end`}
      >
        <div className="h-[50%] w-[50%] bg-white rounded-xl p-10 border">
          <Label text={maincontentData?.user?.username} />
          <p className="text-[38px] font-bold">{maincontentData?.title}</p>
          <p className="text-[#97989F]">
            {maincontentData?.readable_publish_date}
          </p>
        </div>
      </div>
      <div className="flex gap-2 container m-auto justify-end mt-3">
        <button
          onClick={() => {
            setCount(count - 1);
            if (count <= 1) {
              setCount(30);
            }
          }}
          className="border border-black p-4 rounded"
        >
          <GrPrevious />
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
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
