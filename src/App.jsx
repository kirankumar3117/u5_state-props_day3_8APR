import logo from './logo.svg';
import './App.css';
import { useState, version } from 'react';

function App() {
  const [pen,pencount]=useState(Math.floor(20*Math.random()))
  const [book,bookcount]=useState(Math.floor(20*Math.random()))
  const [Note,Notecount]=useState(Math.floor(20*Math.random()))
  const [total,totalcount]=useState(pen+book+Note)

  const items=['Inventory','Quantity','Add or Remove','Total']
  const updateditems= items.map(el =>{
    return <p className={`${el == 'Add or Remove' ? "head1":"head" }`}>{el}</p>
  })
  const addpen = value =>{
   
    pencount (pen + value)
    totalcount(total + value)
  }
  const removepen =value =>{
    if(pen == 0){
    return 
    }
    pencount (pen + value)
    totalcount(total + value)
  }
  const addbook = v =>{
    bookcount(book + v)
    totalcount (total + v)
  }
  const removebook = v =>{
    if(book == 0){
      return
    }
    bookcount(book + v)
    totalcount(total + v)
  }
  const addnote =v =>{
    Notecount(Note + v)
    totalcount(total+v)
  }
  const removenote = v =>{
    if(Note == 0 ){
      return 
    }
    Notecount(Note + v)
    totalcount(total + v)
  }
  return (
    <div className="App">
    {/* head  */}
        <div className='top'>
          {updateditems}
        </div>
{/* pens row */}
        <div className='Pen'>
         <p>Pens</p>
         <p>{pen}</p>
         <button onClick={()=>{addpen(1)}}>add</button>
         <button onClick={()=>{removepen(-1)}}>remove</button>
        </div>

        {/* books row */}
        <div className='Pen' id='book'>
         <p>Books</p>
         <p>{book}</p>
         <button onClick={()=> addbook(1)}>add</button>
         <button onClick={() => removebook(-1)}>remove</button>
        </div>

        {/* note books row */}
        <div className='Pen' id='notebook'>
         <p>Notebooks</p>
         <p>{Note}</p>
         <button onClick={() => addnote(1)}>add</button>
         <button onClick={() => removenote(-1)}>remove</button>
        </div>
        <div className='total'>
          {total}
        </div>
      
    </div>
  );
}

export default App;
