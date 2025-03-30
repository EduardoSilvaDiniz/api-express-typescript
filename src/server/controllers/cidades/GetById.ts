import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { number, object } from "yup";
import { validation } from "../../shared/middleware";

interface IParamProps {
  id?: number;
}

export const getByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(
    object().shape({
      id: number().integer().required().moreThan(0),
    }),
  ),
}));

export const getById = async (req: Request<IParamProps>, res: Response) => {
  console.log(req.params);

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("getbyid Não implementado!");
  return;
};
