import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import Label from "./label";
const Maincontent = () => {
  return (
    <>
      <div className="container m-auto h-[651px] bg-[rgba(0,0,0,0.4)] bg-blend-darken bg-[url('/images/techdev.jpeg')] rounded-xl bg-cover bg-center p-3 flex items-end">
        <div className="h-[50%] w-[50%] bg-white rounded-xl p-10 border">
          <Label text="Technology" />
          <p className="text-[38px] font-bold">
            Grid system for better Design User Interface
          </p>
          <p className="text-[#97989F]">August 20, 2022</p>
        </div>
      </div>
      <div className="flex gap-2 container m-auto justify-end mt-3">
        <button className="border border-black p-4 rounded">
          <GrPrevious />
        </button>
        <button className="border border-black p-4 rounded">
          <GrNext />
        </button>
      </div>
    </>
  );
};
export default Maincontent;
