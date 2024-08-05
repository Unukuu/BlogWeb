import Label from "./label";

const dataallblogs = [
  {
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "./images/blogs1.jpeg",
    label: "Technology",
    date: "August 20, 2022",
  },
  {
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "./images/blogs2.jpeg",
    label: "Software",
    date: "August 20, 2022",
  },
  {
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "./images/blogs3.jpeg",
    label: "Design",
    date: "August 20, 2022",
  },
  {
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "./images/blogs4.jpeg",
    label: "Technology",
    date: "August 20, 2022",
  },
  {
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "./images/blogs5.jpeg",
    label: "Software",
    date: "August 20, 2022",
  },
  {
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "./images/blogs6.jpeg",
    label: "Design",
    date: "August 20, 2022",
  },
  {
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "./images/blogs7.jpeg",
    label: "Technology",
    date: "August 20, 2022",
  },
  {
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "./images/blogs8.jpeg",
    label: "Software",
    date: "August 20, 2022",
  },
  {
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "./images/blogs9.jpeg",
    label: "Design",
    date: "August 20, 2022",
  },
];
const Allblogs = () => {
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
      <div className="grid grid-cols-3 gap-5">
        {dataallblogs.map((data) => {
          return (
            <div className="p-4 flex flex-col gap-4 border rounded-xl">
              <img
                className="h-[360px] w-[100%] object-center object-cover rounded-xl"
                src={data.img}
                alt=""
              />

              <div>
                <span className="py-1 px-3 bg-[#4B6BFB0D] rounded-md text-[#4B6BFB] text-xs">
                  {data.label}
                </span>
              </div>
              <p className="text-2xl font-semibold">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </p>
              <p className="text-[#97989F]">{data.date}</p>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <button className=" border text-[#696A75] py-3 px-5 rounded-xl">
          Load More
        </button>
      </div>
    </div>
  );
};
export default Allblogs;
