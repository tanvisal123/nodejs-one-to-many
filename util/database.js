const Sequelize = require('sequelize')

const sequelize = new Sequelize("FakeDatabase1","root","sal123@S",{
    dialect:"mysql",
    host:"localhost"
});

module.exports = sequelize;