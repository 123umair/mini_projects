import React from "react";

function UIList({ showmsg, currentUser }) {
  console.log("showmsg", showmsg);

  return (
    <div className="max-w-screen bg-gray-700 text-2xl h-auto mt-10 p-4">
      <ul>
        {showmsg.map((msg) => (
          <li
            key={msg.id}
            className={`
              text-white mb-2 p-2 rounded
              ${
                msg.sender === currentUser
                  ? "bg-blue-500 text-right"
                  : "bg-green-500 text-left"
              }
            `}
          >
            <span className="block text-sm text-gray-300">
              {msg.sender}
            </span>
            {msg.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UIList;
