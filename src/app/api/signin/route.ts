// create get endpoint in next js route to say hello

import { NextRequest, NextResponse } from "next/server";
import { signin} from "../(db)/db";

export async function POST(request: NextRequest) {
    const body = await request.json();
    console.log(body);
    const response = await signin(body.email, body.password)
    return NextResponse.json(response);
}


