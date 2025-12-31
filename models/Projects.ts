import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProjectSchema = new Schema({
    name: String,
    start: String,
    end: String,
    description: String,
    deployment: String,
    github: String,
})

const Project = mongoose.models.Project || mongoose.model("Project", ProjectSchema);
export default Project;