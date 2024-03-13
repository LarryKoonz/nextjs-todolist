import { ITask } from "@/types/tasks";
import { NextResponse } from "next/server";

export async function GET(request: Request){   
    const id = request.url.slice(request.url.lastIndexOf('/') + 1)
    const task = Task.findAll({
        where: {
          id: id
        }
      });
    return NextResponse.json(task.toJSON());
}

export async function DELETE(request: Request){
    const {id}: Partial<ITask> = await request.json();
    if (!id) return NextResponse.json({'message': 'Todo id is required'})
    await Task.destroy({
        where: {
          id: id
        }
      });
    return NextResponse.json({'message': `Todo ${id} was deleted`})
}

export async function PUT(request: Request){
    const {id, text, isDone}: ITask = await request.json();
    if (!id || !text || typeof isDone !== "boolean") return NextResponse.json({'message': 'Missing required data'})
    const task = Task.findAll({
        where: {
          id: id
        }
      });
    task.update({
        text: text,
        isDone: isDone
      });
    await task.save();
    return NextResponse.json(task.toJSON());
}