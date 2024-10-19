'use client'

import React, { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import TextSlide from '../components/TextSlide'
import CodeSlide from '../components/CodeSlide'
import Button from '../components/Button'
import { slides } from '../data/slides'

export default function Course() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToNextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1))
  }

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        {slides[currentSlide].type === 'text' ? (
          <TextSlide content={slides[currentSlide].content} />
        ) : (
          <CodeSlide 
            content={slides[currentSlide].content} 
            commentary={slides[currentSlide].commentary}
          />
        )}
      </div>
      <div className="mt-6 flex justify-between w-full max-w-3xl">
        <Button
          onClick={goToPreviousSlide}
          disabled={currentSlide === 0}
          className="flex items-center"
        >
          <ChevronLeftIcon className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button
          onClick={goToNextSlide}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center"
        >
          Next <ChevronRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}