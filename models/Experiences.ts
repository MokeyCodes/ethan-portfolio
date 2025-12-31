import mongoose from 'mongoose';
const { Schema } = mongoose;

const ExperienceSchema = new Schema({
    company: String,
    title: String,
    location: String,
    start: Date,
    end: Date,
    description: String,
})

const Experience = mongoose.models.Experience || mongoose.model("Experience", ExperienceSchema);
export default Experience;