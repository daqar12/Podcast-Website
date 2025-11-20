'use client'

import { useState, useRef, useEffect } from 'react'

interface AudioPlayerProps {
  episode: {
    title: string
    duration: string
    audioUrl: string
  }
}

export default function AudioPlayer({ episode }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime
      const duration = audioRef.current.duration
      setProgress((currentTime / duration) * 100)
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg text-primary-black dark:text-white">
            Now Playing
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{episode.title}</p>
        </div>
        <button
          onClick={togglePlay}
          className="bg-primary-red hover:bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors"
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>

      {/* Waveform/Progress Bar */}
      <div className="mb-4">
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-red transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
          <span>{Math.floor((progress / 100) * 30)}:00</span>
          <span>{episode.duration}</span>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={episode.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  )
}