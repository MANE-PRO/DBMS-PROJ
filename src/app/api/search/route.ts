// add get route that accepts cancer name and allergies from request params

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const cancer = request.nextUrl.searchParams.get("cancer");
    
}