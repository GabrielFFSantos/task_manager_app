export interface Task {
  id?: string; // opcional para o Firestore, pois o ID é gerado automaticamente
  title: string;
  completed: boolean;
}
