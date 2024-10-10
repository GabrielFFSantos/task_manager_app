"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Task } from "src/types/task.type";
import { getTasks } from "src/services/task.service";

function Home() {
  const [tasks, setTasks] = useState<Task[] | undefined>();
  useEffect(() => {
    const handleTaskData = async () => {
      try {
        const getTasksData = await getTasks();
        console.log(getTasksData);
        setTasks(getTasksData);
      } catch (error) {
        console.error("Falha ao carregar tarefas: ", error);
      }
    };
    handleTaskData();
  }, []);

  return (
    <main className={`${styles.content}`}>
      {tasks && tasks?.length > 0 ? (
        <p>Você ainda não possui tarefas cadastradas</p>
      ) : (
        <></>
      )}
    </main>
  );
}

export default Home;
