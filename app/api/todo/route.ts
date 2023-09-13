import { connectDB } from "@/lib/mongo";
import Todo from "@/models/Todo";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
	try {
		// console.log(await req.json());
		const todoData = await req.json()
		await connectDB()
		await Todo.create(todoData)
		return NextResponse.json({ message: "todo create Success" }, { status: 201 })
	} catch (error: any) {
		return NextResponse.json({ message: error.message }, { status: 500 })
	}
}

export const GET = async (req: NextRequest) => {
	try {
		await connectDB()
		const result = await Todo.find()
		return NextResponse.json({ message: "todo Fetch Success", result }, { status: 200 })
	} catch (error: any) {
		return NextResponse.json({ message: error.message }, { status: 500 })
	}
}

