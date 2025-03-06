import React from 'react'

export const Tag = (props: {text:string, className?:string | undefined}) => {
  return (
    <div className={`text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg traking-tight ${props.className ? props.className : ''}`}>
        {props.text}
    </div>
  )
}
