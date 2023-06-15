import PokemonRepositoryImp from "./pokemon-interactor/pokemonRepositoryImp";
import PokemonDataSource from "../../dataSources/PokemonDataSource";
import Pokemon from "../../dataSources/sequelize/PokemonModel";

const pokemonRepositoryImp = new PokemonRepositoryImp(new PokemonDataSource(Pokemon));

export default pokemonRepositoryImp;
