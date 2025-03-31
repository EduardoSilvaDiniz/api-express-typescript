import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { number, object, string } from "yup";
import { validation } from "../../shared/middleware";

interface IParamProps {
  id?: number;
}

export const deleteByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(
    object().shape({
      id: number().integer().required().moreThan(0),
    }),
  ),
}));

export const deleteById = async (req: Request<IParamProps>, res: Response) => {
  if (Number(req.params.id) === 99999) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      errors: {
        default: "registro não encontrado",
      },
    });
    return;
  }

  res.status(StatusCodes.NO_CONTENT).send();
  return;
};
