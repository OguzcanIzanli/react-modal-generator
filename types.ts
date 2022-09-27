export interface ToDoType {
  content: string;
  isCompleted: boolean;
  id: string;
  isEditible: boolean;
}

export interface selectModalType {
  "id": number;
  "Set": string;
  "title": string;
  "template": JSX.Element;
}
