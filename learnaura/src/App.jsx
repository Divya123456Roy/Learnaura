import React from 'react'
import Index from './routes/Index'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/Counterslice'


function App() {
  const count=useSelector((state)=>state.counter.value)
  const user=useSelector((state)=>state.auth.isLogin)
  const dispatch=useDispatch()
  return (
    <>
    <Index/>
    <h1>{count}</h1>
<button onClick={()=>{dispatch(increment())}}>Increment</button>
<button onClick={()=>{dispatch(decrement())}}>Decrement</button>

    </>
  )
}

export default App