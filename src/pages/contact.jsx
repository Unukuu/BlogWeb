const Home = () => {
  return (
    <div className="container m-auto">
      <div className="w-[895px] m-auto px-32">
        <div>
          <h1>Contact Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div>
          <div>
            <p>Address</p>
            <h1>1328 Oak Ridge Drive, Saint Louis, Missouri</h1>
          </div>
          <div>
            <p>Contact</p>
            <h1>313-332-8662 info@email.com</h1>
          </div>
        </div>
        <div className="flex flex-col pt-7 pr-32 pb-6 pl-8 gap-5">
          <h1>Leave a message</h1>
          <div className="flex gap-5">
            <input className="border" type="text" />
            <input className="border" type="text" />
          </div>
          <input className="border" type="text" />
          <input className="border" type="text" />
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
};
export default Home;
