import { connectToDatabase } from "@/lib/mongoose";
import Experience from "@/models/Experiences";

export async function getExperiences(){
    await connectToDatabase();
    const experience = await Experience.find().exec();
    return experience;
}

export async function getExperience(id: string){
    await connectToDatabase();
    const experience = await Experience.findById(id).exec();
    return experience;
}

export async function addExperience(newExperience: any) {
    await connectToDatabase();
    const createdExperience = await Experience.create(newExperience);
    return createdExperience.toObject();
}

export async function deleteExperience(id: string) {
    await connectToDatabase();
    const experience = await Experience.findByIdAndDelete(id).exec();
    return Boolean(experience);
}

export async function updateExperience(id: string, updateData: Partial<any>) {
    await connectToDatabase();
    const experience = await Experience.findByIdAndUpdate(
        id,
        updateData,
        {
            new: true,
            runValidators: true,
        }
    ).exec();
    return experience ? experience.toObject() : null;
}