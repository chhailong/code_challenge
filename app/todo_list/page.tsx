
'use client'

import { useState , useEffect } from "react"
import EnterKeyPress from "./enter_key" ; 
export default function TodoList() {


  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [showEditButton, setShowEditButton] = useState(false);
  const [markComplete, setMarkComplete] = useState(false);
  const [markIncomplete, setMarkIncomplete] = useState(false);
  const [editId  ,setEditId]  = useState(0)

    const [todos , setTodos] = useState("") ;
    const [items , setItems] = useState([] as any) ;
 
    // function addTodo
    function addTodo () {
      const item = {
        id:  Math.random().toString(20), 
        title: todos,
        isCompleted: false,
        createdAt: new Date()
      }

      //check empty input 
      if (!item.title) {
        alert('Empty  Please input todo...');
      }; 
     // check duplicate item
       const existed = items.find((item:any) => item.title === todos);
       if(existed) return alert("Duplicate Item , Please input another todo...");


       
      // check edit id before add  todo
      if(editId){
        const editTodo = items.find((i:any)=>i.id ===editId) ;
        const updateTodo = items.map((t:any) =>
        t.id === editTodo.id ? t = {id: t.id }: {id:t.id , title:t.title}
        );
        setItems( updateTodo.title) ;
        setEditId(0) ; 
        return ; 
  
      }
      

     // add item to list
      if (item.title) {
        setItems( [...items, item]);
        setTodos("");
        console.log(item);
      }

    }

    // function mark complete 

    // function makeComplete(title:any){
 
    // }

    // function edit todo
    function handleEdit(id:any){
      const editTodo = items.find((i:any)=>
      i.id === id
     ) ;
     setTodos(editTodo.title); 
    //  console.log(editTodo.tilte);
     console.log(editTodo);
    }

    // function hover item edit and remove
    const handleMouseEnter = () => {
      setShowRemoveButton(true);
      setShowEditButton(true);
      setMarkComplete(true);
      setMarkIncomplete(true);
    };
  
    const handleMouseLeave = () => {
      setShowRemoveButton(false);
      setShowEditButton(false);
      setMarkComplete(false);
      setMarkIncomplete(false);
    };
  

    // Add todo lsit by Enter key
    EnterKeyPress(addTodo , 'Enter') ; 


    return (
      <>
        <div className="container p-12 text-center ">
  
         <h1 className="text-2xl text-slate-900">Todo List</h1>
        
          <div className="">
            <label className="ml-4" htmlFor="text">Input Todo</label>
          <input type="text" className=" w-50 h-12 bg-slate-400 text-black rounded"  value={todos} onChange={(e) =>setTodos(e.target.value)}  placeholder="title todo..." 
          id="addInput"
          />
    
          <button type="submit" className="bg-blue-500 ml-4 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded" onClick={addTodo} id="submit-button" >Add</button>
  
          </div>
  
          <div className=" m-3">
        
            <h1>List of Todos</h1>


          {items.map((item:any) => (
            <li
              key={item.id}
              onMouseOver={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span>{item.title}</span>

              {showRemoveButton && (
                <button
                  className="bg-red-400 ml-10"
                  onClick={() => {
                    setShowRemoveButton(false);
                    items.splice(items.indexOf(item), 1);
                  }}
                >
                  Remove
                </button>
              )}
          
              {showEditButton && (
                <button className="bg-green-400 ml-5"
                  onClick={() => {
                    setShowEditButton(false);
                    handleEdit(item.id); 
                   
                  }}
                >
                  Edit
                </button>
              )}
          
              {markComplete && (
                <button className="bg-gray-400 ml-5"
                  onClick={() => {
                    setShowEditButton(false);

                   
                  }}
                >
                  Mark Complete
                </button>
              )}
            
              {markIncomplete && (
                <button className="bg-blue-400 ml-5"
                  onClick={() => {
                   
                   
                  }}
                >
                  Mark Incomplete
                </button>
              )}

          </li>
          ))}


       
          </div>
  
        </div>
      </>
    );
}