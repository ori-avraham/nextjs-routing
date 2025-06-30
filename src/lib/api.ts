import { NextResponse } from "next/server";
import { ZodError } from "zod";

export function createErrorResponse(
  error: unknown,
  defaultMessage = "Internal server error"
) {
  console.error("API Error:", error);

  if (error instanceof ZodError) {
    return NextResponse.json(
      {
        error: "Validation failed",
        details: error.errors.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        })),
      },
      { status: 400 }
    );
  }

  if (error instanceof SyntaxError) {
    return NextResponse.json({ error: "Invalid JSON format" }, { status: 400 });
  }

  return NextResponse.json({ error: defaultMessage }, { status: 500 });
}

export function createSuccessResponse<T>(data: T, status = 200) {
  return NextResponse.json(data, { status });
}

export function createNotFoundResponse(message = "Resource not found") {
  return NextResponse.json({ error: message }, { status: 404 });
}
