import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema(
  {
    client: { type: String, required: true },
    date: { type: Date, required: true},
   
  },
  {
  timestamps: true,
}
);
const Reservation = mongoose.model('Reservation', reservationSchema);
export default Reservation ;