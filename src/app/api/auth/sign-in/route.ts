import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { getDatabase, ref, get } from "firebase/database";
import { app } from "../../../lib/firebases";

interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}
const JWT_SECRET = "$uperM@n"
/* 🔍 Find user by email in Firebase */
async function findUserByEmail(email: string): Promise<IUser | null> {
  const db = getDatabase(app);
  const snapshot = await get(ref(db, "users"));

  if (!snapshot.exists()) return null;

  const users = snapshot.val() as Record<string, IUser>;

  // Convert object to array and find user by email
  const user = Object.values(users).find((user: IUser) => user.email === email);
  return user || null;
}

/* 🔑 Compare password */
const comparePassword = async (password: string, hashedPassword: string) => {
  return await bcrypt.compare(password, hashedPassword);
};

/* 🔑 Generate JWT token */
const generateToken = (payload: object) => {
  return jwt.sign(payload, JWT_SECRET!, {
    expiresIn: "7d",
  });
};

/* ✅ POST Handler */
export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = await findUserByEmail(email);
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: "Invalid password" },
        { status: 401 }
      );
    }

    const token = generateToken({
      id: user.id,
      email: user.email,
      name: user.name,
    });

    return NextResponse.json({
      success: true,
      message: "Signin successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("SignIn Error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
