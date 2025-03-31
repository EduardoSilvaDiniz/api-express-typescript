import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";
describe("Cidades - updateById", () => {
  it("atualizar registro", async () => {
    const res1 = await testServer
      .post("/cidades")
      .send({ nome: "caxias do sul" });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resAtualizada = await testServer.put(`/cidades/${res1.body}`).send({nome:"caixas"})

		expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT)
  });

  it("tentar atualizar registro inexistente", async () => {
    const res1 = await testServer
      .put("/cidades/99999")
      .send({ nome: "caixas" });

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty("errors.default");
  });
});
