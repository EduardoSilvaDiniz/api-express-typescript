import { Response, Request } from "express";
import { StatusCodes } from "http-status-codes";
import { object, InferType, string, ValidationError } from "yup";

const bodyValidation = object({
  nome: string().required().min(3),
	estado: string().required().min(2),
});

type ICidade = InferType<typeof bodyValidation>;

export async function create(
  req: Request<{}, {}, ICidade>,
  res: Response,
): Promise<void> {
  try {
    await bodyValidation.validate(req.body, { abortEarly: false });
  } catch (error) {
    const yupError = error as ValidationError;
    const validationErrors: Record<string, string> = {};

    yupError.inner.forEach((error) => {
      if (error.path === undefined) return;
      validationErrors[error.path] = error.message;
    });

    res.status(StatusCodes.BAD_REQUEST).json({
      errors: validationErrors,
    });
    return;
  }

  if (req.body.nome === undefined) {
    res.status(StatusCodes.BAD_REQUEST).send("informe o nome");
    return;
  }

  console.log(req.body.nome);
  res.send("create");
}
