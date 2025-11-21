import { useState } from "react";
import Navbar from "./Navbar";
import ProjectTasks from "./ProjectTasks";
import RightSidebar from "./RightSidebar";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="grid grid-cols-[3fr_1fr] gap-7 px-8 py-6 min-h-screen">
        <div className="space-y-6">
          <ProjectTasks selectedProject={selectedProject} searchQuery={searchQuery} />
        </div>

        <RightSidebar selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
      </div>
    </div>
  );
}
