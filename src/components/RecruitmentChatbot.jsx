import React, { useState, useRef, useEffect } from 'react';
import chatFlow from '../data/chatFlow';

const RecruitmentChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState('start');
  const [isTyping, setIsTyping] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const chatBodyRef = useRef(null);

  // Initialize chat with welcome message
  useEffect(() => {
    const welcomeMessage = {
      id: Date.now(),
      text: chatFlow.start.message,
      type: 'bot',
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  }, []);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = (text, isUser = false, action = null) => {
    const newMessage = {
      id: Date.now(),
      text: text,
      type: isUser ? 'user' : 'bot',
      timestamp: new Date(),
      action: action,
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  const handleOptionClick = async (option) => {
    // Send user message
    sendMessage(option.label, true);

    // Send interaction to Web3Forms
    await sendWeb3FormsLead(option.label);

    if (option.next) {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentStep(option.next);
        const nextStep = chatFlow[option.next];
        if (nextStep) {
          sendMessage(nextStep.message, false);
        }
        setIsTyping(false);
      }, 1000);
    }
  };

  const handleActionClick = async (action) => {
    // Send interaction to Web3Forms
    await sendWeb3FormsLead(action);

    switch (action) {
      case 'apply':
        window.open('https://altitudeglobal.com/jobs', '_blank');
        break;
      case 'whatsapp':
        const whatsappUrl =
          'https://wa.me/94771902998?text=Hello%20I%20want%20job%20information';
        window.open(whatsappUrl, '_blank');
        break;
      case 'calendly':
        const calendlyUrl = 'https://calendly.com/fintechdigital1/30min';
        window.open(calendlyUrl, '_blank');
        break;
      case 'cvForm':
        setShowForm(true);
        break;
    }
  };

  const sendWeb3FormsLead = async (interaction) => {
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
          subject: 'Chatbot Lead - Altitude Global',
          message: `User interaction: ${interaction}`,
          name: formData.name || 'Chatbot User',
          email: formData.email || 'chatbot@altitudeglobal.com',
        }),
      });
    } catch (error) {
      console.error('Failed to send Web3Forms lead:', error);
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '26c0c484-0f08-44f4-9b53-85677e50cfd5',
          subject: 'CV Submission - Altitude Global',
          name: formData.name,
          email: formData.email,
          message: `CV Submission: ${formData.message}`,
        }),
      });

      sendMessage(
        'Thank you! Your message has been sent. We will get back to you soon.',
        false,
      );
      setFormData({ name: '', email: '', message: '' });
      setShowForm(false);
    } catch (error) {
      console.error('Failed to submit form:', error);
      sendMessage(
        'Sorry, there was an error sending your message. Please try again.',
        false,
      );
    }
  };

  const resetChat = () => {
    setCurrentStep('start');
    setShowForm(false);
    const welcomeMessage = {
      id: Date.now(),
      text: chatFlow.start.message,
      type: 'bot',
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const currentStepData = chatFlow[currentStep];

  return (
    <>
      {/* Floating Chat Button */}
      <div className='chatbot-fab' onClick={() => setIsOpen(!isOpen)}>
        <div className='chatbot-icon border'>💬</div>
        <span className='chatbot-text'>Chat with us</span>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className='chatbot-container'>
          <div className='chatbot-window'>
            {/* Header */}
            <div className='chatbot-header'>
              <div className='chatbot-header-content'>
                <div className='chatbot-avatar border'>
                  <img src='/brandlogos/8.svg' alt='Chatbot Avatar' />
                </div>
                <div className='chatbot-info'>
                  <h3 className='font-body '>Altitude Group Assistant</h3>
                  <div className='status-indicator'>
                    <span className='status-dot'></span>
                    <span className='status-text'>Online</span>
                  </div>
                </div>
              </div>
              <div className='chatbot-controls'>
                <button
                  className='chatbot-control-btn'
                  onClick={resetChat}
                  title='New Chat'
                >
                  🔄
                </button>
                <button
                  className='chatbot-control-btn'
                  onClick={() => setIsOpen(false)}
                  title='Close'
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className='chatbot-body' ref={chatBodyRef}>
              {messages.map((message) => (
                <div key={message.id} className={`message ${message.type}`}>
                  <div className='message-content'>
                    <p>{message.text}</p>
                    <span className='message-time'>
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className='message bot'>
                  <div className='message-content'>
                    <div className='typing-indicator'>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}

              {/* Form */}
              {showForm && (
                <div className='message bot'>
                  <div className='message-content'>
                    <form onSubmit={handleSubmitForm} className='cv-form'>
                      <h4>Send us your details</h4>
                      <div className='form-group'>
                        <input
                          type='text'
                          placeholder='Your Name'
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className='form-group'>
                        <input
                          type='email'
                          placeholder='Your Email'
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className='form-group'>
                        <textarea
                          placeholder='Your Message'
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          rows='3'
                          required
                        ></textarea>
                      </div>
                      <div className='form-actions'>
                        <button type='submit' className='form-submit-btn'>
                          Send Message
                        </button>
                        <button
                          type='button'
                          className='form-cancel-btn'
                          onClick={() => setShowForm(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>

            {/* Footer with Options */}
            <div className='chatbot-footer'>
              {currentStepData && currentStepData.options && (
                <div className='chatbot-options'>
                  {currentStepData.options.map((option, index) => (
                    <button
                      key={index}
                      className='chatbot-option-btn'
                      onClick={() => handleOptionClick(option)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}

              {currentStepData && currentStepData.actions && (
                <div className='chatbot-actions'>
                  {currentStepData.actions.map((action, index) => (
                    <button
                      key={index}
                      className={`chatbot-action-btn ${action}`}
                      onClick={() => handleActionClick(action)}
                    >
                      {action === 'apply' && 'Apply for Jobs'}
                      {action === 'whatsapp' && 'Contact on WhatsApp'}
                      {action === 'calendly' && 'Book Meeting'}
                      {action === 'cvForm' && 'Send Message'}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Floating Button */
        .chatbot-fab {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          color: black;
          padding: 12px 16px;
          border-radius: 50px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
        }

        .chatbot-fab:hover {
          background: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
        }

        .chatbot-icon {
          font-size: 20px;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
        }

        .chatbot-text {
          font-size: 14px;
        }

        /* Chat Window */
        .chatbot-container {
          position: fixed;
          bottom: 90px;
          right: 20px;
          z-index: 9998;
          animation: slideUp 0.3s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .chatbot-window {
          width: 320px;
          height: 420px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid #e5e7eb;
        }

        /* Header */
        .chatbot-header {
          padding: 16px;
          background: #f8fafc;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chatbot-header-content {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .chatbot-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #ffffff;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .chatbot-info h3 {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          color: #1f2937;
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 4px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
          }
        }

        .status-text {
          font-size: 12px;
          color: #6b7280;
        }

        .chatbot-controls {
          display: flex;
          gap: 8px;
        }

        .chatbot-control-btn {
          background: none;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.2s;
        }

        .chatbot-control-btn:hover {
          background: #e5e7eb;
        }

        /* Body */
        .chatbot-body {
          flex: 1;
          padding: 16px;
          overflow-y: auto;
          background: #ffffff;
        }

        .message {
          margin-bottom: 12px;
          display: flex;
          justify-content: flex-start;
        }

        .message.user {
          justify-content: flex-end;
        }

        .message-content {
          max-width: 80%;
          padding: 10px 12px;
          border-radius: 12px;
          position: relative;
        }

        .message.bot .message-content {
          background: #f3f4f6;
          color: #1f2937;
          border-bottom-left-radius: 4px;
        }

        .message.user .message-content {
          background: #2563eb;
          color: white;
          border-bottom-right-radius: 4px;
        }

        .message p {
          margin: 0;
          font-size: 14px;
          line-height: 1.4;
        }

        .message-time {
          display: block;
          font-size: 10px;
          color: #9ca3af;
          margin-top: 4px;
          text-align: right;
        }

        .typing-indicator {
          display: flex;
          gap: 4px;
          align-items: center;
        }

        .typing-indicator span {
          width: 8px;
          height: 8px;
          background: #9ca3af;
          border-radius: 50%;
          display: inline-block;
          animation: typing 1.4s infinite;
        }

        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-6px);
            opacity: 1;
          }
        }

        /* Form */
        .cv-form {
          background: #f8fafc;
          padding: 16px;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
        }

        .cv-form h4 {
          margin: 0 0 12px 0;
          font-size: 14px;
          color: #374151;
        }

        .form-group {
          margin-bottom: 12px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .form-actions {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
        }

        .form-submit-btn,
        .form-cancel-btn {
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 14px;
          cursor: pointer;
          border: 1px solid #d1d5db;
          transition: all 0.2s;
        }

        .form-submit-btn {
          background: #2563eb;
          color: white;
          border-color: #2563eb;
        }

        .form-submit-btn:hover {
          background: #1d4ed8;
          border-color: #1d4ed8;
        }

        .form-cancel-btn {
          background: white;
          color: #6b7280;
        }

        .form-cancel-btn:hover {
          background: #f3f4f6;
          border-color: #9ca3af;
        }

        /* Footer */
        .chatbot-footer {
          padding: 12px;
          background: #ffffff;
          border-top: 1px solid #e5e7eb;
          display: flex;
          flex-direction: column;
          gap: 8px;
          max-height: 200px;
          overflow-y: auto;
        }

        .chatbot-options {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .chatbot-option-btn {
          background: #f3f4f6;
          border: 1px solid #e5e7eb;
          color: #374151;
          padding: 10px 12px;
          border-radius: 8px;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
          text-align: left;
        }

        .chatbot-option-btn:hover {
          background: #e5e7eb;
          border-color: #d1d5db;
        }

        .chatbot-actions {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .chatbot-action-btn {
          padding: 10px 12px;
          border-radius: 8px;
          font-size: 14px;
          cursor: pointer;
          border: none;
          font-weight: 600;
          transition: all 0.2s;
        }

        .chatbot-action-btn.apply {
          background: #22c55e;
          color: white;
        }

        .chatbot-action-btn.apply:hover {
          background: #16a34a;
        }

        .chatbot-action-btn.whatsapp {
          background: #25d366;
          color: white;
        }

        .chatbot-action-btn.whatsapp:hover {
          background: #128c7e;
        }

        .chatbot-action-btn.calendly {
          background: #0b6cff;
          color: white;
        }

        .chatbot-action-btn.calendly:hover {
          background: #0052cc;
        }

        .chatbot-action-btn.cvForm {
          background: #6366f1;
          color: white;
        }

        .chatbot-action-btn.cvForm:hover {
          background: #4f46e5;
        }

        /* Mobile Responsive */
        @media (max-width: 480px) {
          .chatbot-container {
            bottom: 90px;
            right: 10px;
            left: 10px;
          }

          .chatbot-window {
            width: 100%;
            height: 500px;
          }

          .message-content {
            max-width: 90%;
          }
        }
      `}</style>
    </>
  );
};

export default RecruitmentChatbot;
