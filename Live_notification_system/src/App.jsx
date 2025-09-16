// import "./App.css";
// import { io, Socket } from "socket.io-client";
// import { useState, useEffect } from "react";
// const socket = io("http://localhost:5000"); // means that the flask is running on this address
// function App() {
//   const [sndnotif, setSndNotif] = useState("");
//   const [recinotif, setReciNotif] = useState("");

//   useEffect(() => {
//   socket.on("listen this notification", (data) => {
//     setReciNotif(data); // or data.message depending on your structure
//   });

//   // Cleanup when component unmounts
//   return () => {
//     socket.off("listen this notification");
//   };
// }, []);

//   const sendNotifcation = () => {
//     socket.emit("notification", {
//       Notification: sndnotif,
//     });
//   };

//   return (
//     <div className="text-center mx-auto">
//       <p>Live Notification system</p>
//       <input
//         type="text"
//         className="border-1 border-black p-2 "
//         placeholder="Enther the msg"
//         value={sndnotif}
//         onChange={(e) => setSndNotif(e.target.value)}
//       />
//       <br />
//       <br />
//       <button
//         className="cursor-pointer border-2 rounded-sm "
//         onClick={sendNotifcation}
//       >
//         {" "}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           stroke-width="2"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           class="lucide lucide-bell-icon lucide-bell"
//         >
//           <path d="M10.268 21a2 2 0 0 0 3.464 0" />
//           <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
//         </svg>
//       </button>
//       <p>{recinotif}</p>
//     </div>
//   );
// }

// export default App;


import "./App.css";
import { io } from "socket.io-client";
import { useState, useEffect } from "react";

const socket = io("http://localhost:5000");

function App() {
  const [sndnotif, setSndNotif] = useState("");
  const [recinotif, setReciNotif] = useState("");

  useEffect(() => {
    socket.on("listen this notification", (data) => {
      setReciNotif(data.Notification); // assume data.Notification
    });

    return () => {
      socket.off("listen this notification");
    };
  }, []);

  const sendNotifcation = () => {
    socket.emit("notification", {
      Notification: sndnotif,
    });
  };

  return (
    <div className="text-center mx-auto">
      <p>Live Notification system</p>
      <input
        type="text"
        className="border-1 border-black p-2 "
        placeholder="Enter the msg"
        value={sndnotif}
        onChange={(e) => setSndNotif(e.target.value)}
      />
      <br />
      <br />
      <button
        className="cursor-pointer border-2 rounded-sm "
        onClick={sendNotifcation}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-bell-icon lucide-bell"
        >
          <path d="M10.268 21a2 2 0 0 0 3.464 0" />
          <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
        </svg>
      </button>
      <p>{recinotif}</p>
    </div>
  );
}

export default App;
