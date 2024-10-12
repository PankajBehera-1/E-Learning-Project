import Favicon from "react-favicon";
import { AllRoutes } from "./Components/Routes/router";

export const App = () => {
  return (
    
    <div className="main-cont">
      <Favicon url="https://cdn-icons-png.flaticon.com/512/395/395837.png" />
      <AllRoutes />
    </div>
  );
};
