import React,{useState} from 'react'

const Password_feature = () => {
    let [toggle, setToggle] = useState(false);
    let handle_button = ()=>{
        toggle ? toggle = false : toggle = true;
        setToggle(toggle);
    }
  return (
    <div className='flex flex-col p-10 border gap-4'>
      <input className='border p-2' type={toggle ? "text" : "password"} placeholder='enter password' />
      <button onClick={handle_button} className='bg-gray-300 broder cursor-pointer'>show password</button>
    </div>
  )
}

export default Password_feature;
