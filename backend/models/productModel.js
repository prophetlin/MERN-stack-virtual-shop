import mongoose from 'mongoose'
const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  },
)
const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'User',
    },
    name: {
      type: String,
      require: true,
      unique: true,
    },
    image: {
      type: String,
      require: true,
    },
    brand: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: String,
      require: true,
      default: 0,
    },
    numReviews: {
      type: number,
      require: true,
      default: 0,
    },
    price: {
      type: number,
      require: true,
      default: 0,
    },
    countInStock: {
      type: number,
      require: true,
      default: 0,
    },
  },
  {
    timestames: true,
  },
)

const Product = mongoose.model('Product', ProductSchema)

export default Product
