import { BrowserRouter } from "react-router-dom";
//routes
import { AppRoutes } from "./routes";

export const App =() => {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  );
}


