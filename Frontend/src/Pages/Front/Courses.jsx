
const Courses = () => {
  return (
      <div className="container mx-auto px-4 py-10  ">
        <h1 className="text-center text-4xl text-buttonColor font-bold mb-7">Our Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="flex flex-col items-center shadow-lg">
            <img
              src="../public/images/englishOra.jpg"
              alt="Image 1"
              className="max-w-full rounded-lg mb-4"
            />
            <h2 className="text-black text-lg font-bold">English</h2>
            <p className="text-gray-700 p-2">
              We are using the combridge system in teaching english.
            </p>
            <p className="text-buttonColor pb-2">300AF</p>
          </div>
          <div className="flex flex-col items-center mt-8 md:mt-0 shadow-lg">
            <img
              src="../public/images/Math.jpg"
              alt="Image 2"
              className="max-w-full rounded-lg mb-4"
            />
            <h2 className="text-black text-lg font-bold">Mathematic</h2>
            <p className="text-gray-700">
              The newest version of math and formula is used.
            </p>
            <p className="text-buttonColor">300AF</p>
          </div>
          <div className="flex flex-col items-center mt-8 md:mt-0 shadow-lg">
            <img
              src="../public/images/ganjpc.jpg"
              alt="Image 3"
              className="max-w-full rounded-lg mb-4"
            />
            <h2 className="text-black text-lg font-bold">Computer</h2>
            <p className="text-gray-700">
              We dicover the new technologies and versions for.
            </p>
            <p className="text-buttonColor mb-2">300AF</p>
          </div>
        </div>
      </div>
  );
};

export default Courses;
