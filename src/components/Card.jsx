import React, { useState } from "react";
import { PiFileCode } from "react-icons/pi";
import CodeModal from "./CodeModal";

const Card = ({ id, title, description, image, view, icons, fileNames }) => {
  const [expanded, setExpanded] = useState(false);
  const maxChars = 50;
  const isLong = description.length > maxChars;
  const preview = description.slice(0, maxChars);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [codeFiles, setCodeFiles] = useState({});
  const [details, setDetails] = useState({});

  const loadFiles = async (i, fileNames, description) => {
    const folder = `/Assignment/assignment-${i}/`;

    const loadedFiles = {};
    for (let file of fileNames) {
      const res = await fetch(folder + file);
      loadedFiles[file] = await res.text();
    }
    setDetails({ id: i, desc: description });
    setCodeFiles(loadedFiles);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full sm:max-w-md lg:max-w-lg bg-primary rounded-t-lg rounded-b-2xl shadow-md flex flex-col overflow-hidden transition-all duration-300">
      <img
        src={image}
        alt={title}
        onError={(e) => {
          e.target.onerror = null; // prevent infinite loop
          e.target.src =
            "https://thumbs.dreamstime.com/b/code-editor-interface-computer-screen-development-programming-concept-283519018.jpg"; // your fallback image
        }}
        className="w-full h-40 sm:h-38 lg:h-46 object-cover object-center rounded"
      />

      <div className="pt-0 px-2 pb-2 sm:px-2 sm:pb-2 sm:pt-0 flex-1 flex flex-col justify-between bg-gray-200">
        {/* Title */}
        <h2 className="text-base sm:text-lg lg:text-xl font-semibold my-2">
          {title}
          {id}
        </h2>

        {/* Description & read‑more */}
        <p
          className={`text-sm text-justify sm:text-base text-gray-700 leading-snug ${
            !expanded && isLong ? "line-clamp-2" : ""
          }`}
        >
          {!expanded && isLong ? (
            <>
              {preview}…{" "}
              <button
                className="text-blue-500 underline text-xs sm:text-sm"
                onClick={() => setExpanded(true)}
              >
                read more
              </button>
            </>
          ) : (
            description
          )}
        </p>

        {/* Tech stack & GitHub */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex space-x-2 text-lg sm:text-xl text-gray-600">
            {icons.map((icon, index) => {
              const { name, src } = icon;
              return (
                <div className="relative group" key={index}>
                  <img
                    src={src}
                    alt="tech-icon"
                    className="w-4 h-4 sm:w-7 sm:h-7 object-contain mx-1"
                  />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition">
                    {name}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex">
            <div className="relative group">
              <a
                href={view.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                title="View on GitHub"
                className="text-gray-600 hover:text-black transition"
              >
                <img
                  src={view.liveIcon}
                  alt="tech-icon"
                  className="w-4 h-4 sm:w-7 sm:h-7 object-contain mx-1  rounded-full outline-none"
                />
              </a>
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition">
                Live
              </span>
            </div>
            <div className="relative group">
              <PiFileCode
                onClick={() => loadFiles(id, fileNames, description)}
                className="w-4 h-4 sm:w-7 sm:h-7 object-contain mx-1 rounded-full outline-none text-black hover:text-black transition"
              />
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition">
                Code
              </span>
            </div>
          </div>
        </div>
      </div>
      <CodeModal
        isOpen={isModalOpen}
        files={codeFiles}
        details={details}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Card;
