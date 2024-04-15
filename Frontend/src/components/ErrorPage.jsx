
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center ">
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-12">
            404 - Page Not Found
          </p>
          <p className="md:text-lg lg:text-xl text-gray-600 mt-8">
            Sorry, the page you are looking for could not be found.
          </p>
          <Link to="/">
            <button className="bg-buttonColor rounded-full">Return Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
