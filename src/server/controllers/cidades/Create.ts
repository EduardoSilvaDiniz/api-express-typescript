import { Response, Request } from "express";
import { object, string } from "yup";
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";

export const createValidation = validation((getSchema) => ({
  body: getSchema(
    object({
      nome: string().required().min(3).matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/),
    }),
  ),
}));

export const create = (req: Request, res: Response) => {
  console.log(req.body);

  res.status(StatusCodes.CREATED).json(1);
  return;
};
