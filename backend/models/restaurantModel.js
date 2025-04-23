import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true},
    rating: { type: Number, min: 0, max: 5 }
    
  },
  {
    timestamps: true,
  }
);
const Restaurant= mongoose.model('Restaurant', restaurantSchema);
export default Restaurant;