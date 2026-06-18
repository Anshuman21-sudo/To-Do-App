import Right from "./components/Right";
import Left from "./components/Left";
import Event_form from "./components/event_form";
import { createBrowserRouter } from "react-router-dom";

function App() {
  return (
/*     <div className="min-h-screen bg-blue-600 flex gap-10 justify-center items-center"> 
      
 

      </div> */
      <>
   
      <div className="min-h-screen bg-blue-600 flex gap-10 justify-center items-center">
        <Left/>
        <Right/>

      </div>
      
    
   </>
  )
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-event",
    element: <Event_form />,
  },
]);

export { appRouter };
export default App;

