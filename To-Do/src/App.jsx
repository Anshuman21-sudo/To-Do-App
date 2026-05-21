function App() {
  return (
    <div className="min-h-screen bg-blue-600 flex gap-10 justify-center items-center"> 
      
      {/* ================= LEFT CARD (Create Event) ================= */}
      <div className="border-2 border-white w-[280px] h-[500px] rounded-[32px] shadow-xl bg-white flex flex-col justify-end overflow-hidden">
        {/* Top 30% Space (This stays white for your illustration & title) */}
        <div className="h-[30%] w-full bg-white p-5">
         <div className="flex justify-between items-center">
    <h1 className="text-xl font-bold text-slate-800">New Event</h1>
    <span className="text-lg cursor-pointer">▽</span> {/* Filter Icon Placeholder */}
  </div>
  <div className="flex justify-between items-center line-spacing-1">
<div className="flex-1 bg-slate-100 rounded-2xl flex items-center justify-center border border-dashed border-slate-300">
    <span className="text-xs text-slate-400 font-medium">Illustration Placeholder</span>
  </div>
  </div>
          {/* "New Event" text and illustration will go here later */}
        </div>

        {/* Bottom 70% Blue Card */}
        <div className="bg-blue-500 h-[70%] rounded-t-[32px] p-4">


          
          {/* Time picker and exercise checklist go here */}
        </div>
      </div>

      {/* ================= RIGHT CARD (To-Do Dashboard) ================= */}
      <div className="border-2 border-white w-[280px] h-[500px] rounded-[32px] shadow-xl bg-white flex flex-col justify-start overflow-hidden">
        {/* Top 40% Blue Card */}
        <div className="bg-blue-500 h-[40%] rounded-b-[32px] p-4">
          {/* Dashboard Header, Calendar strip go here */}
        </div>

        {/* Bottom 60% Space (This stays white for your timeline list) */}
        <div className="h-[60%] w-full bg-white p-4">
          {/* Timeline items will go here */}
        </div>
      </div>

    </div>
  )
}

export default App

