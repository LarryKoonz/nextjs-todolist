const Sequelize = require('sequelize');


const sequelize = new Sequelize(
	process.env.MYSQL_DATABASE,
	process.env.MYSQL_USERNAME,
	process.env.MYSQL_ROOT_PASSWORD,
	{
		dialect: 'mysql',
		host: process.env.MYSQL_HOST || '127.0.0.1',
		port: process.env.MYSQL_LOCAL_PORT,
		logging: false,
  		dialectModule: require('mysql2')
	}
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });


// This creates the table if it doesn't exist (and does nothing if it already exists)
sequelize
	.sync()
	.then((_result) => {
		console.log('Sequelize: All models were synchronized successfully.');
	})
	.catch((err) => {
		console.log(err);
	});

module.exports = sequelize;