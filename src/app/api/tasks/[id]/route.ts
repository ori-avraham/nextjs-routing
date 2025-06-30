// app/api/tasks/[id]/route.ts
import { tasks } from "@/data/tasks";
import { NextRequest } from "next/server";
import { TaskIdSchema, UpdateTaskSchema } from "@/lib/validations/tasks";
import {
  createErrorResponse,
  createSuccessResponse,
  createNotFoundResponse,
} from "@/lib/api";

interface RouteContext {
  params: { id: string };
}

export async function GET(_req: NextRequest, { params }: RouteContext) {
  try {
    const taskId = TaskIdSchema.parse(params.id);
    const task = tasks.find((t) => t.id === taskId);

    if (!task) {
      return createNotFoundResponse("Task not found");
    }

    return createSuccessResponse(task);
  } catch (error) {
    return createErrorResponse(error, "Failed to fetch task");
  }
}

export async function PATCH(req: NextRequest, { params }: RouteContext) {
  try {
    const taskId = TaskIdSchema.parse(params.id);
    const task = tasks.find((t) => t.id === taskId);

    if (!task) {
      return createNotFoundResponse("Task not found");
    }

    const body = await req.json();
    const validatedData = UpdateTaskSchema.parse(body);

    if (validatedData.title !== undefined) {
      task.title = validatedData.title;
    }
    if (validatedData.completed !== undefined) {
      task.completed = validatedData.completed;
    }

    return createSuccessResponse(task);
  } catch (error) {
    return createErrorResponse(error, "Failed to update task");
  }
}

export async function DELETE(_req: NextRequest, { params }: RouteContext) {
  try {
    const taskId = TaskIdSchema.parse(params.id);
    const index = tasks.findIndex((t) => t.id === taskId);

    if (index === -1) {
      return createNotFoundResponse("Task not found");
    }

    const [deletedTask] = tasks.splice(index, 1);

    return createSuccessResponse({
      message: "Task deleted successfully",
      task: deletedTask,
    });
  } catch (error) {
    return createErrorResponse(error, "Failed to delete task");
  }
}
