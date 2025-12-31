import { getExperiences, addExperience } from "@/services/experience";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const experiences = await getExperiences();
        return NextResponse.json({ experiences });
    } catch (err) {
        return NextResponse.json({message: "Failed to fetch", error: err}, {status: 500})
    }
}

export async function POST(request: Request) {
    try {
        const newExperience = await request.json();
        const postExperience = await addExperience(newExperience);
        return NextResponse.json({ postExperience });
    } catch (err) {
        return NextResponse.json({message: "Failed to fetch", error: err}, {status: 500})
    }
}