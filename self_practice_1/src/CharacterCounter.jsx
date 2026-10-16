import React,{useState} from 'react'

const CharacterCounter = () => {
    let [count, setCount] = useState(0);
        let handleChange = (e)=>{
          let characters = e.target.value;
          let len = characters.length;
         len <= 100 ? setCount(len) : setCount(100);
        }
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-5">

      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-800">
            Character Counter ✍️
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Start typing to count your characters.
          </p>
        </div>

        {/* Textarea */}
        <div>
          <label className="mb-2 block font-semibold text-slate-700">
            Your Text
          </label>

          <textarea onChange={handleChange} 
            placeholder="Write something amazing..."
            rows="5"
            maxLength={100}
            className="w-full resize-none rounded-xl border border-slate-300 p-4 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          ></textarea>
        </div>

        {/* Character Count */}
        <div className="mt-3 flex items-center justify-between">

          <p className="text-sm text-slate-500">
            Maximum 100 characters
          </p>

          <p className="font-semibold text-blue-600">
            {count} / 100
          </p>

        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">

          <button className="flex-1 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700">
            Clear Text
          </button>

          <button className="flex-1 rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-100">
            Copy Text
          </button>

        </div>

      </div>

    </div>
  )
}

export default CharacterCounter;
