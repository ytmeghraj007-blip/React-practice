import React, { useState } from 'react'

const Like_feature = (props) => {
            let [like, setLike] = useState(props.initialLikes);

            let handle_btn = ()=>{
                like++;
                setLike(like);
            }
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">

      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-lg">

        {/* Header */}
        <h1 className="mb-6 text-center text-2xl font-bold text-slate-800">
          Like Button ❤️
        </h1>

        {/* Profile */}
        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 text-xl font-bold text-purple-600">
            MS
          </div>

          <div>
            <h2 className="font-bold text-slate-800">
              Meghraj Singh
            </h2>

            <p className="text-sm text-slate-500">
              Frontend Developer
            </p>
          </div>

        </div>

        {/* Post */}
        <div className="my-6 rounded-xl bg-slate-100 p-5">
          <p className="text-slate-700">
            Learning React is fun! 🚀 Keep practicing and keep growing.
          </p>
        </div>

        {/* Like Section */}
        <div className="flex items-center justify-between">

          <span className="text-lg font-semibold text-slate-700">
            ❤️ {like} Likes
          </span>

          <button onClick={handle_btn}  className="rounded-xl bg-pink-500 px-6 py-2 font-semibold text-white transition hover:bg-pink-600 active:scale-95">
            ❤️ Like
          </button>

        </div>

      </div>

    </div>
  )
}

export default Like_feature
