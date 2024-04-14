// add a signup route with email, name, country, age, password

import { NextRequest, NextResponse } from "next/server";
import { signup } from "../(db)/db";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const res = await signup(body.name, body.gender, body.email, body.age, body.password);
    return NextResponse.json(res);
}