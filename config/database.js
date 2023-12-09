const {Sequelize}= require('sequelize')

const sequelize=new Sequelize({
    dialect:'sqlite',
    storage:'database.db'
})

sequelize
  .sync()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = {sequelize};