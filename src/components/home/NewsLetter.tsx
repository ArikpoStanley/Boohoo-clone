'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribing email:', email)
    setSubmitted(true)
    setEmail('')
    
    // Reset the submission state after a few seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }
  
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Sign Up For 20% Off</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter and get 20% off your first purchase plus
          exclusive access to our sales & offers.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition"
          >
            SUBSCRIBE
          </button>
        </form>
        
        {submitted && (
          <p className="mt-4 text-green-600">
            Thank you for subscribing! Check your email for your 20% discount code.
          </p>
        )}
        
        <p className="mt-4 text-xs text-gray-500">
          By signing up, you agree to our Terms and Conditions and Privacy Policy.
        </p>
      </div>
    </section>
  )
}