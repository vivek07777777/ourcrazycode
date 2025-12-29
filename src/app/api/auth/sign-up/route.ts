import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getDatabase, ref, get, set } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import { app } from "../../../lib/firebases";
/* ✅ App-specific user type */
interface AppUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

/* ✅ Check if user already exists */
async function findUserByEmail(email: string) {
  const db = getDatabase(app);
  const snapshot = await get(ref(db, "users"));

  if (!snapshot.exists()) return null;

  const users = snapshot.val();

  return Object.values(users).find(
    (user: any) => user.email === email
  );
}

/* ✅ Write user to Firebase */
async function writeUserData(user: AppUser) {
  const db = getDatabase(app);
  const hashedPassword = await bcrypt.hash(user.password, 10);

  const userData = {
    id: user.id,
    name: user.name,
    email: user.email,
    password: hashedPassword,
    createdAt: Date.now(),
  };

  await set(ref(db, `users/${user.id}`), userData);

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
}

/* ✅ POST handler */
export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    /* 🔍 Check user */
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "User already exists" },
        { status: 400 }
      );
    }

    /* 🆔 Generate user id */
    const userId = uuidv4();

    const newUser = await writeUserData({
      id: userId,
      name,
      email,
      password,
    });

    return NextResponse.json(
      {
        success: true,
        message: "User registered successfully",
        user: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup Error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
