import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import Label from "./label";
import { useEffect, useState } from "react";
const Maincontent = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  const [maincontentData, setMaincontentData] = useState([]);
  const getMaincontentdata = async () => {
    const respo = await fetch("https://dev.to/api/articles");
    const data = await respo.json();
    setMaincontentData(data);
  };
  useEffect(() => {
    getMaincontentdata();
  }, []);
  return (
    <>
      <div
        style={{
          background: `url(${maincontentData[index]?.social_image})`,
        }}
        className={`container m-auto h-[651px] bg-[rgba(0,0,0,0.4)] bg-blend-darken rounded-xl bg-cover bg-center p-3 flex items-end`}
      >
        <div className="h-[50%] w-[50%] bg-white rounded-xl p-10 border">
          <Label text={maincontentData[index]?.user.username} />
          <p className="text-[38px] font-bold">
            {maincontentData[index]?.title}
          </p>
          <p className="text-[#97989F]">
            {maincontentData[index]?.readable_publish_date}
          </p>
        </div>
      </div>
      <div className="flex gap-2 container m-auto justify-end mt-3">
        <button
          onClick={() => {
            setIndex(index - 1);
            if (index <= 0) {
              setIndex(29);
            }
          }}
          className="border border-black p-4 rounded"
        >
          <GrPrevious />
        </button>
        <button
          onClick={() => {
            setIndex(index + 1);
            if (index > 28) {
              setIndex(0);
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
