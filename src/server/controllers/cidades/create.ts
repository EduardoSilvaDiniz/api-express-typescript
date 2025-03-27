import { Response, Request, RequestHandler, response } from "express";
import { StatusCodes } from "http-status-codes";
import { object, InferType, string, ValidationError } from "yup";

const bodyValidation = object({
  nome: string().required().min(3),
  estado: string().required().min(2),
});

type ICidade = InferType<typeof bodyValidation>;

export const createBodyValidator: RequestHandler = async (req, res, next) => {
  try {
    await bodyValidation.validate(req.body, { abortEarly: false });
    return next();
  } catch (error) {
    const yupError = error as ValidationError;
    const errors: Record<string, string> = {};

    yupError.inner.forEach((error) => {
      if (error.path === undefined) return;
      errors[error.path] = error.message;
    });

    res.status(StatusCodes.BAD_REQUEST).json({ errors: errors });
    return
  }
};

export const create = (req: Request<{}, {}, ICidade>, res:Response) => {
  console.log(req.body)

  res.send('create')
  return
}