import mongoose from 'mongoose';

// TypeScript interface for Property
export interface IProperty {
  _id?: string;
  address: string;
  price: string;
  bedroom: number;
  bathroom: number;
  garage: number;
  propertytype: string;
  imageUrls: string[];
  status: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const PropertySchema = new mongoose.Schema({
  address: { type: String, required: true },
  price: { type: Number, required: true },
  bedroom: { type: Number, required: true },
  bathroom: { type: Number, required: true },
  garage: { type: Number, required: true },
  propertytype: { type: String, required: true },
  imageUrls: { type: [String], default: [] },
  status: { type: String, required: true },
  description: { type: String, required: true }
}, {
  timestamps: true
});

export default mongoose.models.Property || mongoose.model('Property', PropertySchema);








