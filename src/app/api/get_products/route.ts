import Product from "@/libs/model/Product";
import { connectMongoDb } from "@/libs/MongoConnect";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        await connectMongoDb()

        const data = await Product.find()

        return NextResponse.json(data)
    }catch(error){
        return NextResponse.json({
            error,
            msg:'something Went Wrong'
        }, {status: 400})
    }
}