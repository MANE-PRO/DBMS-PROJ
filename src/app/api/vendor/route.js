
// create get endpoint in next js route to return vendors by plant name coming in parmas

import { NextRequest, NextResponse } from "next/server";
import { getVendors } from "../(db)/db";

export async function GET(request) {

    const plant = request.nextUrl.searchParams.get("plant")
    const res = await getVendors(plant)
    return NextResponse.json(res)
}