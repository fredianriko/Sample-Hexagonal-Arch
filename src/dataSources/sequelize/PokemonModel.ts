import { Model, DataTypes, Optional } from "sequelize";

import PokemonAttributes from "../../core/entities/pokemon-entity-interface";
import sequelizeInstance from "./index";

interface PokemonCreationAttributes extends Optional<PokemonAttributes, "id"> {}

class Pokemon extends Model<PokemonAttributes, PokemonCreationAttributes> implements PokemonAttributes {
  public id!: number;
  public name!: string;
  public image!: string;
  public type!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Pokemon.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    image: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    type: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: "pokemon",
    sequelize: sequelizeInstance,
  }
);

// Pokemon.sync({ force: true })
//   .then(() => {
//     console.log("Pokemon model synchronized with the database.");
//   })
//   .catch((error) => {
//     console.error("Error synchronizing Pokemon model:", error);
//   });
export default Pokemon;
