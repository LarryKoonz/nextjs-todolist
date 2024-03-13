import { ITask } from "@/types/tasks";
import { NextResponse } from "next/server";
import { Task } from "@/models/task_model"
import sequelize from "@/db/sequelize";

export async function GET(){   // returns all tasks
    const tasks = await Task.findAll();
    const jsonTasks = tasks.map((task: Task) => {
        return task.toJSON();
    });
    return NextResponse.json(jsonTasks);
}

export async function POST(request: Request){
    const {id, text}: ITask = await request.json();
    if (!id || !text) return NextResponse.json({'message': 'Missing required data'})
    const newTask = await Task.create({ id: id, text: text});
    return NextResponse.json(newTask.toJSON());
}
