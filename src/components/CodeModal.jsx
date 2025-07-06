import { useState } from "react";

export default function CodeModal({ isOpen, files, onClose, details }) {
  const [activeTab, setActiveTab] = useState("index.html");

  const { id, desc } = details;
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg p-4 overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">
            📄 Assignment {id} : {" "} 
            <span className="text-gray-700 text-base">{desc}</span>
          </h2>
          <button
            onClick={onClose}
            className="text-red-500 hover:text-red-700 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 border-b pb-2 mb-4">
          {Object.keys(files).map((filename) => (
            <button
              key={filename}
              onClick={() => setActiveTab(filename)}
              className={`px-3 py-1 text-sm rounded-t ${
                activeTab === filename
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {filename}
            </button>
          ))}
        </div>

        {/* Code Viewer */}
        <pre className="bg-gray-100 text-sm p-4 max-h-[60vh] overflow-auto rounded">
          <code>{files[activeTab]}</code>
        </pre>
      </div>
    </div>
  );
}
