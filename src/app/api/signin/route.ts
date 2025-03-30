// create get endpoint in next js route to say hello

import { NextRequest, NextResponse } from "next/server";
import { signin} from "../(db)/db";

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function POST(request: NextRequest) {
    const body = await request.json();
    console.log(body);
    const response = await signin(body.email, body.password)
    return NextResponse.json(response);
}


