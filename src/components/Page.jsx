import Navbar from "./Navbar";
import ProjectTasks from "./ProjectTasks";



export default function Home() {
  return (
    <div className=" bg-gray-00 min-h-screen w-full">
      <Navbar />

      <div className="grid grid-cols-[3fr_1fr] gap-7 px-8 py-6 min-h-screen">

        
        <div className="space-y-6">
          <ProjectAreaHeader />
         <ProjectTasks />
        
        </div>

        

      </div>
    </div>
  );
}
