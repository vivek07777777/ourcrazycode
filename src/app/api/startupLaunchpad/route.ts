import { NextRequest, NextResponse } from "next/server";
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import { app } from "../../lib/firebases";
import { StartupFormData } from "../../page";

async function writeUserData(data: StartupFormData) {
  const db = getDatabase(app);

  const StartUpData = {
    id: data.id,
    founderName: data.founderName,
    age: data.age,
    email: data.email,
    phone: data.phone,
    startupName: data.startupName,
    stage: data.stage,
    description: data.description,
  };

  await set(ref(db, `startUp/${StartUpData.id}`), StartUpData);

  return {
    id: data.id,
    founderName: data.founderName,
    age: data.age,
    email: data.email,
    phone: data.phone,
    startupName: data.startupName,
    stage: data.stage,
    description: data.description,
  };
}

export async function POST(req: NextRequest) {
  try {
    const { founderName, age, email, phone, startupName, stage, description } =
      await req.json();

    if (
      !founderName ||
      !age ||
      !email ||
      !phone ||
      !startupName ||
      !stage ||
      !description
    ) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const startUpId = uuidv4();

    const newStartUpData = await writeUserData({
      id: startUpId,
      founderName,
      age,
      email,
      phone,
      startupName,
      stage,
      description,
    });

    return NextResponse.json(
      {
        success: true,
        message: "StartUp registered successfully",
        startUpData: newStartUpData,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("StartUp Data : ", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
