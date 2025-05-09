import submit_icon from "./assets/images/icon-arrow.svg";

export default function App() {
  return (
    <section className="font-rubik">
      {/* search box */}
      <div
        className={`bg-[url(./assets/images/pattern-bg-mobile.png)] bg-cover w-full px-5 py-8 flex flex-col gap-8`}
      >
        <h1 className="text-white text-center text-2xl font-bold">
          IP Address Tracker
        </h1>

        <form className="bg-white rounded-lg flex">
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            className="p-2 w-full outline-none"
          ></input>
          <button type="submit" className="p-3 bg-black rounded-r-lg">
            <img src={submit_icon} alt="submit_icon" width={8} height={8}></img>
          </button>
        </form>

        {/* search results */}
        <div className="bg-white rounded-lg text-center grid gap-5 shadow-lg -mb-40 py-5">
          <div>
            {/* ip address */}
            <h2 className="text-[8px] font-bold text-gray-500 uppercase">
              IP Address
            </h2>
            <p className="text-xl font-bold">192.212.174.101</p>
          </div>

          <div>
            {/* location */}
            <h2 className="text-[8px] font-bold text-gray-500 uppercase">
              Location
            </h2>
            <p className="text-xl font-bold">Brooklyn, ny 10001</p>
          </div>

          <div>
            {/* Timezone */}
            <h2 className="text-[8px] font-bold text-gray-500 uppercase">
              Timezone
            </h2>
            <p className="text-xl font-bold">UTC-5:00</p>
          </div>

          <div>
            {/* isp */}
            <h2 className="text-[8px] font-bold text-gray-500 uppercase">
              isp
            </h2>
            <p className="text-xl font-bold">SpaceX starlink</p>
          </div>
        </div>
      </div>

      {/* map box */}
      <div></div>
    </section>
  );
}
