const mongoose = require("mongoose");
const categories = require('./data/categories.js');
const users = require('./data/users.js');
const products = require('./data/products.js');
const User = require('./models/users.js');
const Product = require('./models/products.js');
const Order = require('./models/orders.js');
const { connectDB } = require('./config/db.js');
const Category = require('./models/categories.js');




const importData = async () => {
  try {
    await Order.deleteMany()
    await Category.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users);
    
    const createdCategories = await Category.insertMany(categories);
    const category = createdCategories[0]._id

    const sampleProducts = products.map((product) => {
      return { ...product, pCategory: category }
    })

    await Product.insertMany(sampleProducts)

    console.log('Data Created!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()
    await Category.deleteMany()

    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}
connectDB(mongoose);
if (process.argv[2] === '-d') {

  destroyData()
} else {
  importData()
}  
