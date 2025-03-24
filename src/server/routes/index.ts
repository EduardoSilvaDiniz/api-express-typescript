import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get("/", (_, res: any) => {
  res.send("hello wolrd");
	return
});

router.post("/test", (req:Request, res:Response) => {
	console.log(req.query.teste);
	
  res.status(StatusCodes.UNAUTHORIZED).json(req.body);
	return 
});

export { router };
