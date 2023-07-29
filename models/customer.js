const Sequelize = require('sequelize')
const sequelize = require('../util/database')


const Customer = sequelize.define("customer",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
    }
});
module.exports = Customer

// module.exports =(sequelize,DataTypes)=>{
//     const Customer = sequelize.define("customer",{
//         id:{
//             type:DataTypes.INTEGER,
//             autoIncrement:true,
//             allowNull:false,
//             primaryKey:true
//         },
//         name:{
//             type:DataTypes.STRING,
//             allowNull:false,
//         },
//         email:{
//             type:DataTypes.STRING,
//             allowNull:false,
//         }
//     });
//     return Customer;
// }



//module.exports =Customer