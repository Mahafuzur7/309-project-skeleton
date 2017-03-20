var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name required'
  },

  description: {
    type: String,
    default: '',
    trim: true,
    required: 'Description required'

  },

  price: {
    type: Number,
     default: '',
      required: 'Price required'
  
  },

  quantity: {
    type: Number,
    default:'',
     required: 'Quantity required'
  }
}

var Product = mongoose.model('Product', ProductSchema, 'Product');
module.exports = Product;
