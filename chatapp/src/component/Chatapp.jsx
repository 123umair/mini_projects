// import React, { useState } from "react";

// function ChatApp() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [user, setUser] = useState("UserA");

//   const handleSend = () => {
//     if (input.trim() === "") return;

//     const newMessage = {
//       id: Date.now(),
//       text: input,
//       sender: user,
//     };

//     setMessages([...messages, newMessage]);
//     setInput("");
//   };

//   const switchUser = () => {
//     setUser(user === "UserA" ? "UserB" : "UserA");
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded shadow">
//       <h2 className="text-2xl font-bold mb-4 text-center">
//         Simple Local Chat App
//       </h2>

//       <div className="border border-gray-300 rounded h-60 overflow-y-auto p-2 mb-4 bg-white">
//         {messages.length === 0 ? (
//           <p className="text-gray-400 text-center">No messages yet.</p>
//         ) : (
//           messages.map((msg) => (
//             <div
//               key={msg.id}
//               className={`px-3 py-2 rounded mb-2
//                 ${
//                   msg.sender === user
//                     ? "bg-blue-100 text-blue-800 text-right"
//                     : "bg-green-100 text-green-800 text-left"
//                 }`}
//             >
//               <span className="block text-xs text-gray-500">
//                 {msg.sender}
//               </span>
//               {msg.text}
//             </div>
//           ))
//         )}
//       </div>

//       <div className="flex space-x-2">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
//           placeholder="Type your message..."
//         />
//         <button
//           onClick={handleSend}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//         >
//           Send
//         </button>
//       </div>

//       <div className="mt-4 text-center">
//         <button
//           onClick={switchUser}
//           className="text-sm text-gray-600 underline"
//         >
//           Switch to {user === "UserA" ? "UserB" : "UserA"}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ChatApp;
import UIList from "./UIList";
import React, { useState } from "react";

function Chatapp() {
  const [text, setText] = useState("");
  const [showmsg, setShowmsg] = useState([]);
  const [user, setUser] = useState("UserA");

  const getMsg = (e) => {
    setText(e.target.value);
  };

  const getData = () => {
    if (text.trim() === "") return;

    const newMessage = {
      id: Date.now(),
      text: text,
      sender: user,
    };

    setShowmsg([...showmsg, newMessage]);
    setText("");
  };

  const switchUser = () => {
    setUser(user === "UserA" ? "UserB" : "UserA");
  };

  return (
    <>
      <div className="flex bg-gray-700 justify-center gap-3 p-4">
        <span className="text-white font-bold">{user}</span>
        <input
          value={text}
          type="text"
          className="rounded-sm text-black outline-1 outline-amber-50 px-2 py-1"
          onChange={getMsg}
        />
        <button
          className="rounded-sm bg-blue-500 active:bg-blue-600 cursor-pointer px-2 py-1 text-white"
          onClick={getData}
        >
          Send
        </button>
        <button
          onClick={switchUser}
          className="text-white underline"
        >
          Switch User
        </button>
      </div>

      <UIList showmsg={showmsg} currentUser={user}></UIList>
    </>
  );
}

export default Chatapp;
