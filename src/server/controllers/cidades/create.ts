import { Response, Request, RequestHandler } from "express";
import { object, InferType, string, ObjectShape, Schema, number } from "yup";
import { validation } from "../../shared/middleware";

export const createValidation = validation((getSchema) => ({
  body: getSchema(
    object({
      nome: string().required().min(3),
      estado: string().required().min(2),
    }),
  ),
  query: getSchema(
    object({
      filter: string().required().min(3),
    }),
  ),
}));

export const create = (req: Request, res: Response) => {
  res.send("create");
  return;
};
