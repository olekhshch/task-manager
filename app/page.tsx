import Image from "next/image";
import TaskBar from "./ui/TaskBar";
import TaskList from "./ui/TaskList";

export default function Home() {
  return (
    <main id="planner-wrapper">
      <TaskBar />
      <TaskList />
    </main>
  );
}
