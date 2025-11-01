"use client"
import React, { useState, useRef, useEffect } from "react"

// Main Dropdown container
export function DropdownMenu({ children }) {
  return <div className="relative inline-block text-left">{children}</div>
}

// The button that triggers the menu
export function DropdownMenuTrigger({ children }) {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef(null)

  // We'll store state in context-like pattern
  const toggle = () => setOpen(!open)

  return (
    <DropdownMenuContext.Provider value={{ open, setOpen }}>
      <button
        ref={triggerRef}
        onClick={toggle}
        className="inline-flex items-center justify-center gap-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {children}
      </button>
    </DropdownMenuContext.Provider>
  )
}

// Context setup (simple prop drilling alternative)
const DropdownMenuContext = React.createContext({ open: false, setOpen: () => {} })

// The content panel
export function DropdownMenuContent({ children }) {
  const { open, setOpen } = React.useContext(DropdownMenuContext)
  const ref = useRef(null)

  // close when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [setOpen])

  if (!open) return null

  return (
    <div
      ref={ref}
      className="absolute right-0 z-20 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
    >
      <div className="py-1">{children}</div>
    </div>
  )
}

// Each dropdown item
export function DropdownMenuItem({ children, onClick }) {
  const { setOpen } = React.useContext(DropdownMenuContext)
  return (
    <button
      onClick={() => {
        onClick?.()
        setOpen(false)
      }}
      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
    >
      {children}
    </button>
  )
}
