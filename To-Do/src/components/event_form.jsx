import { useState } from "react";
import { Link } from "react-router-dom";

const Event_form = () => {
    const [starttime , setstarttime]= useState("");
    const [endtime , setendtime]= useState("");
    const [eventNmae , seteventName]= useState("");
    const [description , setdescription]= useState("");
    const [duration, setduration]= useState("");
    return (
        <>
   <div className="h-screen flex gap-10 justify-center items-center  ">
    <div  className="w-[500px] h- bg-white shadow-lg rounded-xl p-6 border">

    <h1 className="text-2xl font-bold text-center mb-6">FILL YOUR TASK</h1>
    <form action="">
  <div className=" flex gap-10 justify-center items-center  ">
        <input  className="border p-2 rounded  " type="time"  placeholder="Start-time" value={starttime} onChange={(e) => {
        setstarttime(e.target.value)
        }} />
        <input  className="border p-2 rounded   " type="time"  placeholder="End-time" value={endtime} onChange={(e) => {
        setendtime(e.target.value)
        }}/>
  </div>
   <div className="flex flex-col gap-4 p-6 ">     <input  className="border p-2 rounded  " type="text"  placeholder="Event-Name" value={eventNmae} onChange={(e) => {
        seteventName(e.target.value)
        }} />
        <input  className="border p-2 rounded  " type="text"  placeholder="Description" value={description }onChange={(e) => {
         setdescription(e.target.value)
        }}/>
        <input className="border p-2 rounded  " type="text"  placeholder="Duration" value={duration} onChange={(e) => {
       setduration(e.target.value)
        }}/>
        </div>
    </form>
    </div>
</div>
    </>
    )
}
export default Event_form