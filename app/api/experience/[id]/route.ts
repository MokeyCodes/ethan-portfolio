import { getExperience, updateExperience, deleteExperience } from "@/services/experience";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { id: string}},
) {
    try {
        const experience = await getExperience(params.id);
        return NextResponse.json({ experience });
    } catch (err) {
        console.error(err);
        return NextResponse.json({message: "Failed to fetch", error: err }, {status: 500});
    }
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string}}
) {
    try {
        const newData = await request.json();
        const putExperience = await updateExperience(params.id, newData);
        return NextResponse.json({ putExperience });
    } catch (err) {
        console.error(err);
        return NextResponse.json({message: "Failed to PUT", error: err}, {status: 500});
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: {id: string}}
) {
    try {
        const deletedExperience = await deleteExperience(params.id);
        return NextResponse.json({ deletedExperience });
    } catch (err) {
        console.error(err);
        return NextResponse.json({message: "Failed to DELETE", error: err}, {status: 500});
    }
}