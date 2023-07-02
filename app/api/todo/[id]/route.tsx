import { NextResponse } from 'next/server' ;
import todos from './/../../../dummy_data' ;
import uuid from "uuid" ; 


// get method by id
export async function GET(request: Request , { params }: { params: { id: string } } ) {
    // return NextResponse.json(todos);

    //get todo by id
    const id = params.id;
 
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
        return NextResponse.json({ message: `Todo with id ${id} not found.` }, { status: 404 });
    }

    return NextResponse.json({
        message :"Get todo by id successfully",
        success:true, 
        data:todo 
    });
      
}




// Post Method
export async function PUT(request: Request , { params }: { params: { id: string } }) {

    const id = params.id;
    const todo_id = todos.find((todo) => todo.id === id);
    const {todo , isCompleted} = await request.json() ;
    if (todo_id) {
        todo_id.isCompleted = isCompleted ;
        todo_id.todo = todo ;

    }
    else {
        return NextResponse.json({ message: `Todo with id ${id} not found.` }, { status: 404 });
    }
    return NextResponse.json({
        message: `Todo with id ${id} updated.`,
        todo_id,
    }) ;

   
}

// Delete Method
export async function DELETE(request: Request , { params }: { params: { id: string } }) {

    const id = params.id;
    const todo_id = todos.find((todo) => todo.id === id);
    if (todo_id) {
        todos.splice(todos.indexOf(todo_id), 1);
    }
    else {
        return NextResponse.json({ message: `Todo with id ${id} not found.` }, { status: 404 });
    }
    return NextResponse.json({
        message: `Todo with id ${id} deleted.`,
    }) ;

   
}

