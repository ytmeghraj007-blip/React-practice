import React, { useState } from 'react'

const PortfolioCard = (props) => {
    console.log(props.name);
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">

      <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-xl">

        {/* Card Header */}
        <div className="flex flex-col items-center bg-blue-600 px-6 py-8">

          <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-blue-100 text-3xl font-bold text-blue-600">
            {props.shortName}
          </div>

          <h1 className="mt-4 text-2xl font-bold text-white">
            {props.name}
          </h1>

          <p className="mt-6 text-sm text-blue-100">
            {props.role}
          </p>

        </div>

        {/* Card Body */}
        <div className="space-y-8 p-6">

          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <span className="font-medium text-slate-500">Age</span>
            <span className="font-semibold text-slate-800">{props.age}</span>
          </div>

          <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <span className="font-medium text-slate-500">Role</span>
            <span className="font-semibold text-slate-800">{props.role}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium text-slate-500">City</span>
            <span className="font-semibold text-slate-800">{props.city}</span>
          </div>

        </div>

      </div>

    </div>
  )
}

export default PortfolioCard
