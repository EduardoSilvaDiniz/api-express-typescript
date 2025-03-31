import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cidades - Create", () => {
  it("criar registro", async () => {
    const res1 = await testServer
      .post("/cidades")
      .send({ nome: "caxias do sul" });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual("number");
  });

  it("Tenta criar um registro com 2 caracteres em nome", async () => {
    const res1 = await testServer.post("/cidades").send({ nome: "ca" });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty("errors.body.nome");
  });

  it("Tenta criar um registro apenas numeros em nome", async () => {
    const res1 = await testServer.post("/cidades").send({ nome: 1010 });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty("errors.body.nome");
  });

  it("Tenta criar um registro com caractesres e numeros em nome", async () => {
    const res1 = await testServer.post("/cidades").send({ nome: "calo1010" });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty("errors.body.nome");
  });

  it("Tenta criar um registro com caractesres especiais em nome", async () => {
    const res1 = await testServer
      .post("/cidades")
      .send({ nome: "calo@!(*$*&)" });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty("errors.body.nome");
  });
});
