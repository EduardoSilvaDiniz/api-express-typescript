import { Response, Request } from "express";
import { object, string } from "yup";
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";

export const createValidation = validation((getSchema) => ({
  body: getSchema(
    object({
      nome: string().required().min(3),
    }),
  ),
  query: getSchema(
    object({
      filter: string().optional().min(3),
    }),
  ),
}));

export const create = (req: Request, res: Response) => {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não esta implementando");
  return;
};
