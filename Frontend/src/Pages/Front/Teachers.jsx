
const Teachers = () => {
  return (
    <div className="container mx-auto px-4 py-16 border-b-2 dark:border-gray-500">
      <h1 className="text-center text-4xl text-buttonColor font-bold mb-7">Our Teachers</h1>
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/3">
          <img
            src="../public/images/cover.jpg"
            alt="Image 1"
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0 mx-2">
          <img
            src="../public/images/computer.jpg"
            alt="Image 2"
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0">
          <img
            src="/images/cover.jpg"
            alt="Image 3"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Teachers;
