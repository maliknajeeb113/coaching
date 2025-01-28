import { useState, useEffect, useRef } from "react";
import { client } from "../utils/client";
import { FaDownload, FaTimes } from "react-icons/fa";

const CLASS_QUERY = `*[_type == "class"]{
  _id,
  name,
  "notes": notes[]->{
    _id,
    title,
    "fileUrl": file.asset->url
  }
}`;

const Notes = () => {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [notes, setNotes] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Fetch the file URL from Sanity
    const fetchFile = async () => {
      const result = await client.fetch(CLASS_QUERY);
      if (result.length > 0) {
        const sortedResult = result.sort((a, b) => {
          const numA = parseInt(a.name, 10);
          const numB = parseInt(b.name, 10);
          return numA - numB;
        });
        setClasses(sortedResult);
      }
    };

    fetchFile();
  }, []);

  const scroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = container.offsetWidth; // Full container width for responsive cards
    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  const handleClassSelect = (className) => {
    const selected = classes.find((cls) => cls.name === className);
    setSelectedClass(className);
    setNotes(selected ? selected?.notes : []);
    setIsOpen(true);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="notes">
      <div className="flex flex-col items-center">
        {/* Heading */}
        <div>
          <ul className="flex gap-4 text-[14px] md:text-[15px] mb-[15px] md:mb-[30px] uppercase">
            <li>02</li>
            <li>
              <hr className="w-10 h-[1px] bg-gray-100 border-0 rounded my-3 dark:bg-gray-700" />
            </li>
            <li>Notes</li>
          </ul>
        </div>
        <div className="flex items-center gap-2 w-full">
          {/* Left Scroll Button */}
          <button
            className="text-gray-800 p-2 sm:p-3 text-xs sm:text-base rounded-full z-10 shadow-md"
            onClick={() => scroll("left")}
          >
            ◀
          </button>

          {/* Class Card */}
          <div
            ref={containerRef}
            className="flex h-56 space-x-4 overflow-x-auto scroll-smooth no-scrollbar"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {classes.map((cls, index) => (
              <div
                key={index}
                className={`flex flex-col justify-center items-center lg-gap-12 ${
                  classes.length === 1
                    ? "w-full"
                    : classes.length === 2
                    ? "w-[50%]"
                    : "w-full xs:w-[50%] md:w-[33.33%]"
                } h-full flex-shrink-0`}
                style={{ scrollSnapAlign: "start" }}
              >
                <div
                  onClick={() => handleClassSelect(cls.name)}
                  id={cls.name}
                  className="relative w-52 h-36 sm:w-60 sm:h-40 lg:w-[280px] xl:w-[315px] lg:h-48 lg:mx-[20%] border-[#1f2426] border-2 cursor-pointer rounded-xl"
                >
                  <div className="absolute top-4 left-4 flex space-x-2 text-sm sm:text-md">
                    <p>
                      Total Notes: {cls.notes?.length ? cls.notes?.length : 0}
                    </p>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6 ">
                    <h2 className="text-md sm:text-lg lg:text-xl font-light opacity-90">
                      Class
                    </h2>
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                      {cls.name}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            className="text-gray-800 p-2 sm:p-3 text-xs sm:text-base rounded-full z-10 shadow-md"
            onClick={() => scroll("right")}
          >
            ▶
          </button>

          {/* Notes Pop-up */}
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md md:max-w-lg lg:max-w-2xl p-6 text-center mx-4">
                {/* Close Button */}
                <button
                  onClick={togglePopup}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  <FaTimes className="w-5 h-5" />
                </button>

                <h2 className="text-xl font-bold mb-4">
                  Notes for class {selectedClass}
                </h2>
                <div className="grid gap-4">
                  {notes?.length > 0 ? (
                    notes?.map((note, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-4 bg-gray-100 rounded shadow"
                      >
                        <span className="font-medium">{note.title}</span>
                        <a
                          href={note.fileUrl}
                          download
                          className="text-blue-500 hover:text-blue-600"
                        >
                          <FaDownload className="w-5 h-5" />
                        </a>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">
                      No notes available for this class.
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Notes;
