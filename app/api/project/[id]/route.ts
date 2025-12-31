import { getProject, updateProject, deleteProject } from "@/services/project";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { id: string}}
) {
    try {
        const project = await getProject(params.id);
        return NextResponse.json({ project });
    } catch (err) {
        console.error(err);
        return NextResponse.json({message: "Failed to GET by id", error: err}, {status: 500})
    }
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string}}
) {
    try {
        const newData = await request.json();
        const project = await updateProject(params.id, newData);
        return NextResponse.json({ project });
    } catch (err) {
        console.error(err);
        return NextResponse.json({message: "Failed to PUT", error: err}, {status: 500});
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string}}
) {
    try {
        const project = await deleteProject(params.id);
        return NextResponse.json({ project });
    } catch (err) {
        console.error(err);
        return NextResponse.json({message: "Failed to DELETE", error: err}, {status: 500});
    }
}