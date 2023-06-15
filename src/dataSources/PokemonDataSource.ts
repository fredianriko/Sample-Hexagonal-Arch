import pokemonRepository from "../core/repositories-interface/pokemonRepositoryInterface";
import Pokemon from "../core/entities/pokemon-entity-interface";
import PokemonModel from "./sequelize/PokemonModel";
import { CustomError } from "../core/common/Errors/CustomError";

class PokemonDataSource implements pokemonRepository {
  private readonly pokemonModelFile: typeof PokemonModel;

  constructor(pokemonModelFile: typeof PokemonModel) {
    this.pokemonModelFile = pokemonModelFile;
  }

  public async getByName(name: string): Promise<Pokemon | any> {
    const getByNamePokemon = await this.pokemonModelFile.findOne({ where: { name: name } });
    return getByNamePokemon;
  }

  public async getById(id: number): Promise<Pokemon | any> {
    try {
      const pokemonModel: Pokemon = await this.pokemonModelFile.findOne({ where: { id } });
      return pokemonModel;
    } catch (error) {
      return new CustomError(error.code, `Pokemon with id ${id} is not found`);
    }
  }

  public async getAll(): Promise<Pokemon[] | any> {
    try {
      const pokemonModel: Pokemon[] = await this.pokemonModelFile.findAll();
      return pokemonModel;
    } catch (error) {
      console.log({
        statusCode: error.code,
        message: error.code,
      });
      throw new CustomError(error.code, error.message);
    }
  }

  public async submitSingle(data: Pokemon): Promise<Pokemon> {
    try {
      const pokemonModel: Pokemon = await this.pokemonModelFile.create(data);
      return pokemonModel;
    } catch (error) {
      console.log({
        statusCode: error.code,
        message: error.code,
      });
      throw new CustomError(error.code, error.message);
    }
  }
}

export default PokemonDataSource;
