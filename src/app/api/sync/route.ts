import { NextRequest, NextResponse } from "next/server";
import { syncData } from "../(db)/db";
export async function GET(request: NextRequest) {
    syncData()
    return NextResponse.json({
        mesaage: "Sync Finished"
    })
}