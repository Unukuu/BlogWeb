import Label from "./label";

const datatrend = [
  {
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "/images/mountain.png",
    labeltxt: "Technology",
  },
  {
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "/images/worksetup.png",
    labeltxt: "Technology",
  },
  {
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "/images/micwoman.png",
    labeltxt: "Technology",
  },
  {
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "/images/team.png",
    labeltxt: "Technology",
  },
];

const Trending = () => {
  return (
    <section className="container m-auto my-24">
      <p className="text-2xl font-bold text-black font-sans mb-8">Trending</p>
      <div className="flex justify-between">
        {datatrend.map((data) => {
          return (
            <>
              <div
                className={`bg-cover bg-center bg-blend-darken w-[290px] h-[320px] rounded-2xl flex flex-col justify-end p-7 gap-4 bg-[rgba(0,0,0,0.5)]`}
                style={{
                  backgroundImage: `url(${data.img})`,
                }}
              >
                <div>
                  <Label text={data.labeltxt} />
                </div>

                <p className="text-white font-sans text-xl">{data.text}</p>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};
export default Trending;
