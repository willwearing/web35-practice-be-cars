const mongoose = require('mongoose')

const CarSchema = new mongoose.Schema(
  {
    vin: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    make: { type: String, required: true, trim: true },
    model: { type: String, required: true, trim: true },
    year: { type: Number, required: true },
    color: { type: String, trim: true },
    mileage: { type: Number },
    wrecked: { type: Boolean },
    autoTrans: { type: Boolean },
    doors: { type: Number },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Car', CarSchema)
