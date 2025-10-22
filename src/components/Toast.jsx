import React, { useEffect, useState } from 'react'

const Toast = ({ message, type = 'success', onClose }) => {
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev <= 0) {
          onClose()
          return 0
        }
        return prev - 1.67 
      })
    }, 50) 

    return () => clearInterval(timer)
  }, [onClose])

  return (
    <div className="toast toast-top toast-end z-50">
      <div className="alert bg-white text-gray-800 relative overflow-hidden border">
        <div 
          className="absolute bottom-0 left-0 h-1 bg-green-400"
          style={{ width: `${progress}%` }}
        />
        
        <div className="flex items-center justify-between w-full">
          <span>{message}</span>
          <button className="btn btn-sm btn-circle btn-ghost" onClick={onClose}>
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}

export default Toast