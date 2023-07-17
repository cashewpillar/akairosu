'use client'

import { useState } from 'react'

export const EditableText = (
  { text }: { text: string }
) => {
  const [ isEditing, setIsEditing ] = useState(false)
  const [ currentText, setCurrentText ] = useState(text)
  
  return (
    <span className="w-full">
      {isEditing? (
        <input 
          className="w-full"
          type="text" 
          value={currentText}
          onChange={e => setCurrentText(e.target.value)}
          onBlur={() => setIsEditing(false)}
          onKeyDown={e => setIsEditing(e.key !== 'Enter')}
          autoFocus
        />
      ):(
        <span 
          className="hover:text-akairosu-brown hover:cursor-pointer transition-all" 
          onClick={() => setIsEditing(true)}
        >
          {currentText}
        </span>
      )}
    </span>
  )
}