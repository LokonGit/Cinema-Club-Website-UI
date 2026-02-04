import React, { useState } from 'react'
import './CineBot.css'

const CineBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hey there! I\'m CineBot 🎬 Tell me what you\'re in the mood for, and I\'ll suggest the perfect movie!'
    }
  ])
  const [isLoading, setIsLoading] = useState(false)

  const handleSuggest = async () => {
    if (!userInput.trim()) return

    const newMessages = [...messages, { role: 'user', content: userInput }]
    setMessages(newMessages)
    setUserInput('')
    setIsLoading(true)

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          messages: [
            {
              role: 'user',
              content: `You are a friendly movie recommendation assistant called CineBot for Cinema Club IIT Roorkee. Based on this request: "${userInput}", suggest 2-3 movies with brief descriptions (2-3 sentences each). Be enthusiastic and conversational. Format your response with movie titles in bold using **Title**.`
            }
          ]
        })
      })

      const data = await response.json()
      const botResponse = data.content.map(item => item.text || '').join('\n')

      setMessages([...newMessages, { role: 'assistant', content: botResponse }])
    } catch (error) {
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: 'Oops! I\'m having trouble connecting right now. But I\'d love to help you find a great movie! Try describing your mood or a genre you like.'
        }
      ])
    }

    setIsLoading(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSuggest()
    }
  }

  const formatMessage = (text) => {
    return text.split('**').map((part, index) => {
      if (index % 2 === 1) {
        return <strong key={index}>{part}</strong>
      }
      return part
    })
  }

  return (
    <>
      <button
        className={`cinebot-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle CineBot"
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <circle cx="8.5" cy="10.5" r="1.5"/>
            <circle cx="15.5" cy="10.5" r="1.5"/>
            <path d="M12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
          </svg>
        )}
      </button>

      <div className={`cinebot-panel ${isOpen ? 'open' : ''}`}>
        <div className="cinebot-header">
          <div className="cinebot-title">
            <h3>CineBot</h3>
            <span className="ai-badge">AI POWERED RECOMMENDATIONS</span>
          </div>
          <p className="cinebot-subtitle">
            Describe your current mood, a specific vibe, or what you just finished watching.
          </p>
        </div>

        <div className="cinebot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.role}`}>
              <div className="message-content">
                {formatMessage(message.content)}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message assistant">
              <div className="message-content typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
        </div>

        <div className="cinebot-input">
          <input
            type="text"
            placeholder="e.g. A dark rainy night in Neo-Tokyo..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="cinebot-textarea"
          />
          <button
            onClick={handleSuggest}
            className="suggest-btn"
            disabled={!userInput.trim() || isLoading}
          >
            Suggest Movies
          </button>
        </div>
      </div>
    </>
  )
}

export default CineBot
