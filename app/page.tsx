import Image from 'next/image'
import Link from 'next/link'

import TodoList from './todo_list/page';
import { useState } from "react"


export default function Home() {
  return (

    <>
    <TodoList/>
    </>
   
  )
}
