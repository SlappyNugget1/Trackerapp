import { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor",
      day: "feb",
    },
    {
      id: 2,
      text: "Doctor",
      day: "feb",
    },
  ]);

  console.log(tasks);
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}> {tasks.text} </h3>
      ))}
    </>
  );
};

export default Tasks;
