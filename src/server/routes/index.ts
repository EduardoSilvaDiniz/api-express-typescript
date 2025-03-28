import { Router } from "express";
import { Cidadescontroller } from "../controllers";

const router = Router();

router.get("/", (_, res: any) => {
  res.send("hello wolrd");
});

router.post( "/cidades", Cidadescontroller.createBodyValidator, Cidadescontroller.create);

export { router };
