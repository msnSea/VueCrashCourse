export type taskFilter = "all" | "active" | "completed";
export type Task = {
    id: number;
    title: string;
    completed: boolean;
}