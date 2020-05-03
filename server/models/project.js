const mongoose = required('mongoose')

const projectSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    isActive: { type: Boolean, default: true }
})