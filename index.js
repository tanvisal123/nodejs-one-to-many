// const express = require('express')
// const db = require('./models')
// const Customer = require('./models/customer')
// const Order = require('./models/order')
// const app = express()
// app.use(express.json())
// Customer.hasMany(Order);
// db.sequelize.sync({force:true}).then((req)=>{
//     app.listen(4000,()=>{
//         console.log("Connected To Fake Database1")
//     })
// })


const express = require('express')
const app = express()
const sequelize = require('./util/database')
const Customer = require('./models/customer')
const Order = require('./models/order')

app.use(express.json())

Customer.hasMany(Order),
Order.belongsTo(Customer),
//Order.belongsTo(Customer)

app.post('/customer',async(req,res)=>{
    try {
        const cus = await Customer.create(req.body)
        res.status(200).json(cus)
    } catch (error) {
        console.log(error)
    }
})


app.get('/getOrderbyCustomer',async(req,res)=>{
    try {
        const cus = await Customer.findAll({include:[Order]})
       // const ord = await Order.findAll({include:[Customer]})
        res.status(200).json(cus)
    } catch (error) {
        console.log(error)
    }
})

app.delete('/delete/:id',async(req,res)=>{
    try {
        const {id}=req.params
        const customer =await Customer.findOne({where:{id}})
        await customer.destroy()
        return res.json({message:"User Deleted"})
    } catch (error) {
        console.log(error)
    }
})

app.post('/order',async(req,res)=>{
    try {
        sequelize.sync().then((result)=>{
            return Customer.create(req.body,{include:[Order]})
       }).then((customer)=>{
       }).catch((error)=>{
           console.log(error)
       })
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
})

app.put('/put/:id',async(req,res)=>{
    try {
        id = req.params.id
        const sus = await Customer.update(req.body,{where:{id:id}})
        res.status(200).json(sus)
    } catch (error) {
        console.log(error)
    }
})

app.listen(2000,()=>{
    console.log("Your Port Is 2000")
    sequelize.sync({force:true}).then((result)=>{
        //console.log("Success")
       // return Customer.create({name:"god",email:"tan.visal10@gmail.com"})
   }).then((customer)=>{
     // return customer.createOrder({total:"45"});
   }).catch((error)=>{
       console.log(error)
   })
 })