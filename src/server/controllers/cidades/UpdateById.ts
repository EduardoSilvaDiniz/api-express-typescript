import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { number, object, string } from "yup";
import { validation } from "../../shared/middleware";

interface IParamProps {
  id?: number;
}

interface IBodyProps {
  nome: string;
}

export const updateByIdValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    object().shape({
      nome: string().required().min(3),
    }),
  ),
  params: getSchema<IParamProps>(
    object().shape({
      id: number().integer().required().moreThan(0),
    }),
  ),
}));

export const updateById = async (req: Request<IParamProps>, res: Response) => {
  if (Number(req.params.id) === 99999) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: "Registro não encontrado",
      },
    });
    return;
  }

  res.status(StatusCodes.NO_CONTENT).send();
  return;
};
