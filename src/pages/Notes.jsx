import { useState, useEffect, useRef } from "react";
import { client } from "../client";
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
        setClasses(result);
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
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-full px-4">
          {/* Scroll Buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10 shadow-md"
            onClick={() => scroll("left")}
          >
            ◀
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10 shadow-md"
            onClick={() => scroll("right")}
          >
            ▶
          </button>

          {/* Card Container */}
          <div
            ref={containerRef}
            className="flex space-x-4 overflow-x-auto scroll-smooth scrollbar-hide"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {/* Cards */}
            {classes.map((cls, index) => (
              <div
                key={index}
                className={`flex flex-col justify-center items-center lg-gap-12 ${classes.length > 1 ? 'w-[50%]' : 'w-full'} h-full flex-shrink-0`}
                style={{ scrollSnapAlign: "start" }}
              >
                <div
                  onClick={() => handleClassSelect(cls.name)}
                  id={cls.name}
                  className="flex cursor-pointer flex-col justify-center items-center w-auto min-w-36 min-h-32 lg:min-w-[400px] lg:h-[250px] lg:mx-[20%] flex-shrink-0 px-8 bg-gray-200 font-medium shadow rounded-lg"
                >
                  Class: {cls.name}
                </div>
              </div>
            ))}
          </div>
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
