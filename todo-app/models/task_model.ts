import sequelize from "@/db/sequelize";

const { DataTypes, Model} = require('sequelize');


export class Task extends Model {}

Task.init({
  // Model attributes are defined here
id: {
	type: DataTypes.STRING(50),
	allowNull: false,
	primaryKey: true,
},
text: {
	type: DataTypes.STRING(100),
	allowNull: false,
},
isDone: {
	type: DataTypes.BOOLEAN(),
	defaultValue: false,
	allowNull: false
}
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Task' // We need to choose the model name
});