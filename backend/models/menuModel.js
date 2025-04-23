import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    nom: { type: String, required: true},
    prix: {type: Number, required: true}

   
  },
  {
    timestamps: true,
  }
);
const Menu = mongoose.model('Menu', menuSchema);
export default Menu;