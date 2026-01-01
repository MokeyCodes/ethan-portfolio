import type { Experience } from "@/models/Experiences";

type ExperiencePropProps = {
    experience: Experience;
};
export default function ExperienceProp({ experience }: ExperiencePropProps) {
    return (
        <div className="flex flex-col p-4 border border-grey-300 w-80 rounded-lg shadow-sm text-lg">
            <h2 className="text-xl font-bold">{experience.company}</h2>
            <p className="text-gray-1000">{experience.title}</p>
            <p className="text-gray-500">{experience.location}</p>
            <p className="text-gray-500">{new Date(experience.start).toLocaleDateString()} - {experience.end ? new Date(experience.end).toLocaleDateString() : "Present"}</p>
            <p className="text-gray-800">{experience.description}</p>
        </div>
    );
}