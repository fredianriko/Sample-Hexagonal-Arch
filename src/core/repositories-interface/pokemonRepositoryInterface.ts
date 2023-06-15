import Pokemon from "../entities/pokemon-entity-interface";

interface PokemonRepository {
  getByName(name: string): Promise<Pokemon | null>;
  getById(id: number): Promise<Pokemon | null>;
  getAll(): Promise<Pokemon[] | null>;
  submitSingle(data: Pokemon): Promise<Pokemon | any>;
}
export default PokemonRepository;
