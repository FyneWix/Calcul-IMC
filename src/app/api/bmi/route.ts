import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const { bmi, category } = await request.json()
    const newRecord = await prisma.bmiRecord.create({
      data: {
        bmi,
        category,
      },
    })
    return NextResponse.json(newRecord, { status: 201 })
  } catch (error) {
    console.error("Error saving BMI:", error)
    return NextResponse.json({ error: "Failed to save BMI" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const records = await prisma.bmiRecord.findMany({
      orderBy: { createdAt: "desc" }, // Trie par date décroissante
    })
    return NextResponse.json(records, { status: 200 })
  } catch (error) {
    console.error("Error fetching BMI history:", error)
    return NextResponse.json({ error: "Failed to fetch BMI history" }, { status: 500 })
  }
}