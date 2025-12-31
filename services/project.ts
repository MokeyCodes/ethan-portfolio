import { connectToDatabase } from "@/lib/mongoose";
import Project from "@/models/Projects";

export async function getProjects(){
    await connectToDatabase();
    const projects = await Project.find().exec();
    return projects
}

export async function getProject(id: string) {
    await connectToDatabase();
    const project = await Project.findById(id).exec();
    return project
}

export async function updateProject(
    id: string,
    updateData: Partial<any>
) {
    await connectToDatabase();
    const updatedProject = await Project.findByIdAndUpdate(
        id,
        updateData,
        {
            new: true,
            runValidators: true,
        }
    ).exec();
    return updatedProject ? updatedProject.toObject() : null;

}

export async function addProject(newProject: any) {
    await connectToDatabase();
    const createdProject = await Project.create(newProject);
    return createdProject.toObject()
}

export async function deleteProject(id: string) {
    await connectToDatabase();
    const deletedProject = await Project.findByIdAndDelete(id).exec();
    return Boolean(deletedProject)
}