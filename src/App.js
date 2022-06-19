// import React, { useState } from "react";
// import "./App.css";
// import Alert from "./Compoonent/Alert/Alert";
// import Navbar from "./Compoonent/Navbar";
// import TextUtilities from "./Compoonent/TextUtilities/TextUtilities";

// function App() {
//   const [mode, setMode] = useState("light");
//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type,
//     });
//     setTimeout(() => {
//       setAlert(null);
//     }, 2000);
//   };

//   const toggleMode = () => {
//     if (mode === "light") {
//       setMode("dark");
//       document.body.style.backgroundColor = "gray";
//       showAlert("Dark mode enable", "success");
//     } else {
//       setMode("light");
//       document.body.style.backgroundColor = "white";
//       showAlert("Light mode enable", "warning");
//     }
//   };

//   return (
//     <>
//       <Navbar mode={mode} toggleMode={toggleMode} />
//       <Alert alert={alert} />
//       <TextUtilities
//         heading={"Text TransForm Utilities App"}
//         mode={mode}
//         showAlert={showAlert}
//       />
//     </>
//   );
// }

// export default App;

import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import "./App.css";
import Alert from "./Compoonent/Alert/Alert";
import Navbar from "./Compoonent/Navbar";
import TextUtilities from "./Compoonent/TextUtilities/TextUtilities";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark mode enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light has enabled", "warning");
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextUtilities
        heading={"Text TransForm Utilities App"}
        mode={mode}
        showAlert={showAlert}
      />
    </>
  );
}

export default App;
