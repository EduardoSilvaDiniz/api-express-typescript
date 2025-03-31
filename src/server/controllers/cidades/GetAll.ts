import { Response, Request } from "express";
import { number, object, string } from "yup";
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema(
    object({
      page: number().optional().moreThan(0),
      limit: number().optional().moreThan(0),
      filter: string().optional(),
    }),
  ),
}));

export const getAll = async (
  req: Request<{}, {}, {}, IQueryProps>,
  res: Response,
) => {
  console.log(req.query);

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("getall Não esta implementando");
  return;
};
