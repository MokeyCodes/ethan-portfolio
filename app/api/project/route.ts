import { getProjects, addProject } from "@/services/project";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const projects = await getProjects();
        return NextResponse.json({ projects });
    } catch (err) {
        return NextResponse.json({message: "Failed to fetch", error: err}, {status: 500})
    }
}

export async function POST(request: Request) {
    try {
        const newProject = await request.json();
        const postProject = await addProject(newProject);
        return NextResponse.json({ postProject });
    } catch (err) {
        return NextResponse.json({message: "Failed to fetch", error: err}, {status: 500})
    }
}