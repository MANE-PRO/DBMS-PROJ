// add get route that accepts cancer name and allergies from request params

import { NextRequest, NextResponse } from "next/server";
import { search } from "../(db)/db";

export async function GET(request: NextRequest) {
    const cancer = request.nextUrl.searchParams.get("cancer");
    const plant = request.nextUrl.searchParams.get("plant");
    const res = await search(cancer);
    return NextResponse.json(res);
    
}