import { tasks } from "@/data/tasks";
import { NextRequest } from "next/server";
import { CreateTaskSchema } from "@/lib/validations/tasks";
import { createErrorResponse, createSuccessResponse } from "@/lib/api";

export async function GET() {
  try {
    return createSuccessResponse(tasks);
  } catch (error) {
    return createErrorResponse(error, "Failed to fetch tasks");
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = CreateTaskSchema.parse(body);

    tasks.push(validatedData);
    return createSuccessResponse(validatedData, 201);
  } catch (error) {
    return createErrorResponse(error, "Failed to create task");
  }
}
