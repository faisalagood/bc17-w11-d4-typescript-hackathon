import React from 'react'
import ReactMarkdown from 'react-markdown'

type TextSlideProps = {
  content: string
}

export default function TextSlide({ content }: TextSlideProps) {
  return (
    <div className="prose prose-sm sm:prose lg:prose-lg mx-auto">
      <ReactMarkdown className="markdown">{content}</ReactMarkdown>
    </div>
  )
}