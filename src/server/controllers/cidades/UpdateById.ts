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
	console.log(req.query);
  console.log(req.params);

  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("updatebyid Não implementado!");
  return;
};
