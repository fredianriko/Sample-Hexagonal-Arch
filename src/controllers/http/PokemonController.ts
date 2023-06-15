import PokemonRepositoryImp from "../../core/interactors";
import express from "express";
import { Response, Request } from "express";

const router = express.Router();

router.get("/singleByName", async (req: Request, res: Response) => {
  const { name } = req.query as { name: string };
  console.log(name);
  const data = await PokemonRepositoryImp.getByName(name);
  res.send(data);
});

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params ? req.params : undefined;

  const data = await PokemonRepositoryImp.getById(parseInt(id));

  res.send(data);
});

router.get("/", async (req: Request, res: Response) => {
  const data = await PokemonRepositoryImp.getAll();
  res.send(data);
});

router.post("/submit", async (req: Request, res: Response) => {
  const data = await PokemonRepositoryImp.submitSingle(req.body);
  res.send(data);
});

export default router;
