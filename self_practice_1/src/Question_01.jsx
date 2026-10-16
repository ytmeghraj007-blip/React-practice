import React, { useState } from 'react'

const Question_01 = () => {
    let [count, setCount] = useState(0);

    let handle_plus = ()=>{
        count++;
        setCount(count);
    }
    let handle_minus = ()=>{
        count--;
        setCount(count);
    }
    let handle_reset = ()=>{
       
        setCount(0);
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">

      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl">

        <h1 className="mb-8 text-center text-3xl font-bold text-slate-800">
          Counter App
        </h1>

        <div className="mb-8 flex justify-center">
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-blue-100">
            <span className="text-5xl font-bold text-blue-600">
              {count}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">

          <button onClick={handle_minus} className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-2xl font-bold text-white transition hover:bg-red-600">
            −
          </button>

          <button onClick={handle_plus} className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-2xl font-bold text-white transition hover:bg-green-600">
            +
          </button>

        </div>

        <button onClick={handle_reset} className="mt-6 w-full rounded-xl bg-slate-800 px-4 py-3 font-semibold text-white transition hover:bg-slate-700">
          Reset
        </button>
      </div>

    </div>
  
  );
}

export default Question_01
