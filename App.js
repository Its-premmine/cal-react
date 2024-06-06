import React, { useState } from 'react'
import './App.css'


function App() {
  const [value,setValue] = useState('');
  return(

  <div className='calBOdy' >
    <form action="" className='calculaters'>
      <input type="text" value={value} className='inputfild'/>
      <div className='lay1'>
        <input type="button" className='num_oper' value='AC' onClick={e => setValue('')} />
        <input type="button" className='num_oper' value='%' onClick={e => setValue(value + e.target.value)} />
        <input type="button" className='num_oper' value='C' onClick={e => setValue(value.slice(0,-1))} />
        <input type="button" className='num_operator' value='/' onClick={e => setValue(value + e.target.value)} />
      </div>
      <div className='lay1'>
        <input type="button" className='num_oper' value='7' onClick={e => setValue(value + e.target.value)} />
        <input type="button" className='num_oper' value='8' onClick={e => setValue(value + e.target.value)} />
        <input type="button" className='num_oper' value='9' onClick={e => setValue(value + e.target.value)} />
        <input type="button" className='num_operator' value='*' onClick={e => setValue(value + e.target.value)} />
      </div>
      <div className='lay1'>
        <input type="button" className='num_oper' value='4' onClick={e => setValue(value + e.target.value)} />
        <input type="button" className='num_oper' value='5' onClick={e => setValue(value + e.target.value)} />
        <input type="button" className='num_oper' value='6' onClick={e => setValue(value + e.target.value)} />
        <input type="button" className='num_operator' value='-' onClick={e => setValue(value + e.target.value)} />
      </div>
      <div className='lay1'>
        <input type="button" className='num_oper' value='1' onClick={e => setValue(value + e.target.value)} />
        <input type="button" className='num_oper' value='2' onClick={e => setValue(value + e.target.value)} />
        <input type="button" className='num_oper' value='3' onClick={e => setValue(value + e.target.value)} />
        <input type="button" className='num_operator' value='+' onClick={e => setValue(value + e.target.value)} />
      </div>
      <div className='lay1'>
        <input type="button" className='num_oper' value='00' onClick={e => setValue(value + e.target.value)} />
        <input type="button" className='num_oper' value='0' onClick={e => setValue(value + e.target.value)} />
        <input type="button" className='num_oper' value='.' onClick={e => setValue(value + e.target.value)} />
        <input type="button" className='num_operator' value='=' onClick={e => setValue(eval(value))} />
      </div>
    </form>
  </div>
  )

}


export default App

