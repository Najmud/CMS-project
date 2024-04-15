import Courses from "./Courses";
import Teachers from "./Teachers";
import About from "./About";
import Footer from "../../components/Footer";
const Hero = () => {
  return (
    <section id="hero" className="container dark:bg-gray-700 mx-20 p-8">
      <div className="flex items-center border-b-2  dark:border-gray-500">
        <div className="w-1/2 flex flex-col mt-10  items-start">
          <div className="ml-0">
            <p className="text-5xl text-buttonColor font-extrabold ">Ganj Educational Center</p>
            <p className="font-bold text-4xl mt-5">
              Accessible Online Courses <br /> For Ganj(GEC) Students
            </p>
            <p className="text-gray-900 font-bold mt-2 dark:text-slate-100">
              Build Your Future With New Learnings methods of Ganj Educational Center.
              we provide you the bestest international education resourses. Join us to grow strongly.
            </p>
          </div>
          <div className="flex mt-4 ml-0">
           
            <input
              className="border w-72 border-orange-600 rounded-xl focus:ring-buttonColor focus:outline-none p-2 my-2"
              type="search"
              placeholder="Search"
            />
            <button className="border border-buttonColor bg-gray-100 text-buttonColor rounded-xl hover:text-white hover:bg-buttonColor p-2 m-2 flex ">
            <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6   "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
          Search
            </button>
          </div>
        </div>
        <div className="w-1/2 p-12  ml-20">
          <img src="images/books.png" alt="books" />
        </div>
      </div>
      <Courses/>
      <Teachers />
      <About />
      <Footer />
    </section>
  );
};

export default Hero;
