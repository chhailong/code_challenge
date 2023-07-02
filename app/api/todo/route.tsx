
import { NextResponse } from "next/server";
// import data from "./data";
import todos from './/../../dummy_data'
import uuid from "uuid";


// Get method
export async function GET(request: Request , response: Response) {
    return NextResponse.json({
        message : "All Todos" ,
        success : true ,
        data : todos , 


    }
      
    ) ;     
}

// Post Method
export async function POST(request: Request ) {
    // const id =  uuid.v4();
    const body = await request.json() ; 
    const todo = {
        id:Math.random().toString(36) ,
        // id: id,
        todo: String(body.todo) ,
        isCompleted: false ,
        createdAt: new Date()
    }
    todos.push(todo) ;
    return NextResponse.json({
        message: 'Todo added successfully',
        success: true,
        data: todo
    });


   
}







