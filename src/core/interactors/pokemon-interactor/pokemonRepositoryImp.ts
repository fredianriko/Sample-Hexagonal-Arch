import PokemonRepository from "../../repositories-interface/pokemonRepositoryInterface";
import PokemonEntity from "../../entities/pokemon-entity-interface";
import { ApiResponse } from "../../common/Response/ApiResponse";
import { CustomError } from "../../common/Errors/CustomError";

class PokemonRepositoryImp {
  pokemonRepository: PokemonRepository;

  constructor(pokemonRepository: PokemonRepository) {
    this.pokemonRepository = pokemonRepository;
  }

  async getByName(name?: string): Promise<ApiResponse<PokemonEntity> | null> {
    const pokemonModel: PokemonEntity = await this.pokemonRepository.getByName(name);
    if (pokemonModel) {
      return ApiResponse.success(200, `Success Get Pokemon By Name`, pokemonModel);
    }
    return;
  }

  async getById(id?: number): Promise<ApiResponse<PokemonEntity> | undefined> {
    try {
      const pokemonModel: PokemonEntity = await this.pokemonRepository.getById(id);
      if (!pokemonModel) {
        return ApiResponse.error(404, `Pokemon not found`);
      }

      const pokemon: PokemonEntity = {
        id: pokemonModel.id,
        name: pokemonModel.name,
        type: pokemonModel.type,
        image: pokemonModel.image,
      };

      return ApiResponse.success(200, `Success get pokemon`, pokemon);
    } catch (error) {
      return ApiResponse.error(error);
    }
  }

  async getAll(): Promise<ApiResponse<PokemonEntity[]>> {
    try {
      const pokemonModel = await this.pokemonRepository.getAll();
      return ApiResponse.success(200, `Success get all pokemon`, pokemonModel);
    } catch (e) {
      return ApiResponse.error(e);
    }
  }

  async submitSingle(data: PokemonEntity): Promise<ApiResponse<PokemonEntity> | any> {
    // check if pokemon already exist
    const checkSinglePokemon = await this.getByName(data.name);
    if (checkSinglePokemon) {
      return new CustomError(400, `Pokemon with name ${data.name} already exist, cannot submit data`);
    }

    try {
      const pokemon = await this.pokemonRepository.submitSingle(data);
      const result = pokemon.dataValues;
      return ApiResponse.success(201, `Success submit single pokemon`, result);
    } catch (error) {
      return ApiResponse.error(error);
    }
  }
}
export default PokemonRepositoryImp;
