import cloudinary from './cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

const storage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => ({
    folder: 'qcrealty/properties', // or any folder you want
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
  }),
});

const parser = multer({ storage });

export default parser;