import React, { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";

const Contact = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="relative">
      {/* Chat Icon */}
      <div className="fixed bottom-10 right-10 z-50">
        <button
          onClick={toggleChat}
          className="bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-700 transition"
        >
          <AiOutlineMessage size={28} />
        </button>
      </div>

      {/* Chat Box Popup */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-10 w-80 bg-white shadow-lg rounded-lg p-4 border border-gray-200 z-50">
          {/* Chat Header */}
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-gray-700">Chat with Admin</h3>
            <button
              onClick={toggleChat}
              className="text-gray-400 hover:text-gray-600"
            >
              &times;
            </button>
          </div>

          {/* Chat Messages */}
          <div className="overflow-y-auto max-h-40 border-t border-b py-2 text-gray-600">
            <p className="text-sm">Admin: Hello! How can I assist you today?</p>
          </div>

          {/* Chat Input */}
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full border rounded px-3 py-2 mt-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}
    </div>
  );
};

export default Contact;
