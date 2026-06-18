import React from "react";
import { Link } from "react-router-dom";

const Left = () => {
  return (
    <>
      <div className="border-2 border-white w-[280px] h-[500px] rounded-[32px] shadow-xl bg-white flex flex-col justify-end overflow-hidden">
        
        {/* Top 30% Space */}
        <div className="h-[30%] w-full bg-white p-5">
          <div className="flex justify-between items-center-center">
            <h1 className="text-xl font-bold text-slate-800">
              New Event
            </h1>
            <span className="text-lg cursor-pointer">▽</span>
          </div>

          <div className="flex justify-between items-center line-spacing-1">
            <div className="flex-1 bg-slate-100 rounded-2xl flex items-center justify-center border border-dashed border-slate-300">
              <span className="text-xs text-slate-400 font-medium">
                Illustration 
              </span>
            </div>
          </div>
        </div>

        {/* "New Event" text and illustration will go here later */}
        <div className="bg-blue-500 h-[70%] rounded-t-[32px] p-4 flex flex-col">

<h1>hhhhh</h1>
          
<Link  to="Event_form "  >
<button className=" mt-auto mb-1.5 w-[60%] bg-black text-white p-1 px-2.5 rounded-lg flex items-center gap-4">
  Create Event
  <span className="text-2xl">+</span>
</button> </Link>  
             
        </div>
      </div>
              {/* Bottom 70% Blue Card */}
    </>
  );
};

export default Left;