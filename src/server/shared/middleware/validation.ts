import { RequestHandler } from "express";
import { ObjectSchema, ObjectShape, ValidationError } from "yup";


type TProperty = "body" | "header" | "params" | "query";

type TAllSchemas = Record<TProperty, ObjectSchema<any>>

type TValidation = (schema: Partial<TAllSchemas>) => RequestHandler;

export const validation: TValidation = (schemas) => async (req, res, next) => {
  console.log(schemas);

	res.send("validou!")
	return
};
