import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "firebaseConfig";
import { Task } from "src/types/task.type";

export async function addTask(task: Task): Promise<void> {
  try {
    const docRef = await addDoc(collection(db, "tasks"), task);
    console.log("Tarefa adicionada com ID: ", docRef.id);
  } catch (e) {
    console.error("Erro ao adicionar tarefa: ", e);
  }
}

export async function getTasks(): Promise<Task[]> {
  const querySnapshot = await getDocs(collection(db, "tasks"));
  return querySnapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() }) as Task,
  );
}

export async function updateTask(
  id: string,
  updatedTask: Partial<Task>,
): Promise<void> {
  const taskRef = doc(db, "tasks", id);
  try {
    await updateDoc(taskRef, updatedTask);
    console.log("Tarefa atualizada com ID: ", id);
  } catch (e) {
    console.error("Erro ao atualizar tarefa: ", e);
  }
}

export async function deleteTask(id: string): Promise<void> {
  const taskRef = doc(db, "tasks", id);
  try {
    await deleteDoc(taskRef);
    console.log("Tarefa deletada com ID: ", id);
  } catch (e) {
    console.error("Erro ao deletar tarefa: ", e);
  }
}
