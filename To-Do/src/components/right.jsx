const Right = () => {
    return (
        <>
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

        
        
        </>
    )
}
export default Right