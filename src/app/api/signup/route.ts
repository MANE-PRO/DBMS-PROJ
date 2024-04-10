// add a signuo route with email, name, country, age, password

import { NextRequest, NextResponse } from "next/server";
import { signup } from "../(db)/db";

export async function POST(request: NextRequest) {
    const body = await request.json();
    console.log(body);
    const res = signup(body.name, body.gender, body.email, body.age, body.password, body.country);
    return NextResponse.json(res);
}