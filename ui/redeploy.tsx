'use client'

import { useState, useRef } from 'react'

const duration = (s: number) => {
  var minutes = Math.floor(s / 60);
  var remainingSeconds = s % 60;
  return minutes + "m " + remainingSeconds + "s";
}

export const Redeploy = (
  { redeployHook }: {redeployHook: string}
) => {
  const [isRedeploying, setIsRedeploying] = useState(false)
  const redeployTime = 120 // seconds
  const timeLeft = useRef(redeployTime)
  const [time, setTime] = useState(redeployTime)
  const spinner = (
    <span className="flex items-center gap-2">
      &nbsp;
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="animate-spin w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
      <p>{duration(timeLeft.current)}</p>
    </span>
  )
  
  const redeploy = async () => {
    const res = await fetch(redeployHook)
    setIsRedeploying(true)
    let interval = setInterval(() => {
      timeLeft.current -= 1
      setTime(timeLeft.current)
    }, 1000)
    setTimeout(() => {
      setIsRedeploying(false)
      clearInterval(interval)
      timeLeft.current = redeployTime
    }, redeployTime * 1000)
    return res.json()
  }
  
  
  return (
    <button 
      type="button" 
      className={`w-24 text-sm rounded-full transition-all hover:bg-akairosu-brown ${isRedeploying? 'bg-akairosu-brown': 'bg-akairosu-blue'} text-akairosu-white`} 
      onClick={() => redeploy()} 
      disabled={isRedeploying}
    >
      {isRedeploying? spinner : 'Restart'}
    </button>
  )
}