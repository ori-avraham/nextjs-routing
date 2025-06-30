import { z } from "zod";

export const CreateTaskSchema = z.object({
  id: z.string().uuid().default(crypto.randomUUID()),
  title: z
    .string()
    .min(1, "Title is required")
    .max(200, "Title too long")
    .trim(),
  completed: z.boolean().default(false),
});

export const UpdateTaskSchema = z
  .object({
    title: z
      .string()
      .min(1, "Title cannot be empty")
      .max(200, "Title too long")
      .trim()
      .optional(),
    completed: z.boolean().optional(),
  })
  .refine(
    (data) => data.title !== undefined || data.completed !== undefined,
    "At least one field (title or completed) must be provided"
  );

export const TaskIdSchema = z.string().uuid();

export type Task = z.infer<typeof CreateTaskSchema>;
export type CreateTaskData = z.infer<typeof CreateTaskSchema>;
export type UpdateTaskData = z.infer<typeof UpdateTaskSchema>;
