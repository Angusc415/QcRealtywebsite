
import mongoose from 'mongoose';

const PropertySchema = new mongoose.Schema({
  address: { type: String, required: true },
  price: { type: Number, required: true },
  bedroom: {type: Number, required: true},
  bathroom: {type: Number, required: true},
  garage: {type: Number, required: true},
  propertytype: {type: String, required: true},
  imageUrl: { type: String },
  description: {type: String, requred: true}
}, {
  timestamps: true
});

export default mongoose.models.Property || mongoose.model('Property', PropertySchema);










export interface Property {
  address: string;
  price: number;
  bedrooms?: number;
  bathrooms?: number;
  garage?: number;
  propertytype?: string;
  squarefeet?: number;
  description?: string;
}