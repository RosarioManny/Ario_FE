import { useState } from "react"

export const useFormHooks = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false) // Add this

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
    setError('')
    setSuccess(false) // Reset success if they edit after success
  }

  const handleClearData = () => {
    setFormData({
      name: '',
      email: '',
      description: ''
    })
    setError('')
    // DON'T reset success here - we want to keep showing the success message
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    // Trim all fields
    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      description: formData.description.trim()
    }
    
    // Validate fields aren't empty
    if (!trimmedData.name || !trimmedData.email || !trimmedData.description) {
      setError('All fields are required')
      setIsSubmitting(false)
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmedData.email)) {
      setError('Please enter a valid email')
      setIsSubmitting(false)
      return
    }

    // Success - log and clear
    console.log('Form submitted:', trimmedData)
    setSuccess(true)
    setIsSubmitting(false)
    handleClearData() // This clears the form but keeps success = true
  }

  return {
    handleSubmit,
    handleChange,
    handleClearData,
    formData,
    error,
    success,
    isSubmitting,
    setError,
    setFormData
  }
}