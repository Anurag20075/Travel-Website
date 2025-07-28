import React, { useState, useEffect, useRef } from "react";
import {
  Send,
  User,
  Bot,
  Phone,
  Mail,
  Clock,
  ArrowLeft,
  MoreVertical,
  Paperclip,
  Smile,
} from "lucide-react";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! 👋 Welcome to Happiness Plans – your personal vacation planning assistant.",
      sender: "bot",
      timestamp: new Date(),
    },
    {
      id: 2,
      text: "I can help you with holiday bookings, destination suggestions, and travel consultations. Where would you like to go next? 🌴✈️",
      sender: "bot",
      timestamp: new Date(Date.now() + 1000),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const autoResponses = {
    booking:
      "Sure! We offer customizable vacation packages to destinations around the world. 🏖️✈️\n\nLet me know your preferred dates, destination (e.g., Bali, Switzerland, Kerala), and budget range so I can assist you with booking.",
    consultation:
      "We offer free vacation consultations to help plan your perfect trip! 📅\n\nWould you like to book a call with our travel expert or receive a suggested itinerary based on your interests?",
    destination:
      "We cover a wide range of destinations, from tropical beaches to snowy mountains! 🏝️🏔️\n\nTell me what kind of experience you're looking for: adventure, relaxation, culture, or luxury?",
    packages:
      "Our travel packages include flights, accommodation, sightseeing, and even local guides. 🌍🧳\n\nLet me know your preferred location or type of vacation and I’ll suggest a package!",
    deals:
      "We currently have amazing travel deals! 🎉\n\n• Goa Getaway: 3 nights starting at ₹8,999\n• Dubai Escape: 4 nights + flights for ₹29,999\n• Bali Honeymoon: 5 nights + villa + activities\n\nWant more details on one of these?",
    contact:
      "You can reach us anytime!\n\n📞 Phone: +91-9876543210\n📧 Email: travel@happinessplans.com\n📍 Office: B-42, Travel Plaza, New Delhi\n\nOr just chat with us here!",
    hours:
      "Our team is available to assist you:\n\n🕘 Monday - Saturday: 9:00 AM to 7:00 PM IST\n🕒 Sunday: Closed\n\nThis chat is monitored 24/7 for urgent travel queries.",
    default:
      "I'm your vacation assistant! 😊 I can help you with travel bookings, destination ideas, vacation planning, and packages.\n\nPlease ask something related to travel. For other inquiries, kindly contact our support team.",
  };

  const keywordMap = {
    booking: ["book", "booking", "reserve", "trip"],
    consultation: ["consult", "talk", "plan", "call"],
    destination: ["place", "location", "destination", "go", "visit"],
    packages: ["package", "combo", "itinerary"],
    deals: ["offer", "discount", "deal", "promotion", "cheap"],
    contact: ["email", "phone", "contact", "address"],
    hours: ["open", "hours", "time", "available"],
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const generateResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    for (const [key, keywords] of Object.entries(keywordMap)) {
      if (keywords.some((word) => message.includes(word))) {
        return autoResponses[key];
      }
    }

    return autoResponses.default;
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: generateResponse(inputText),
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const formatDate = (date) => {
    const today = new Date();
    const messageDate = new Date(date);

    if (messageDate.toDateString() === today.toDateString()) {
      return "Today";
    }

    return messageDate.toLocaleDateString([], {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-4">
          <button className="lg:hidden p-2 hover:bg-gray-100 rounded-full">
            <ArrowLeft size={20} className="text-gray-600" />
          </button>

          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Bot size={24} className="text-white" />
              </div>
              {isOnline && (
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
              )}
            </div>

            <div>
              <h1 className="text-lg font-semibold text-gray-900">
                Vacation Assistant
              </h1>
              <p className="text-sm text-gray-500 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Online - Typically replies in minutes
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600 hover:text-gray-800 transition-colors">
            <Phone size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600 hover:text-gray-800 transition-colors">
            <Mail size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600 hover:text-gray-800 transition-colors">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        <div className="text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-xs text-gray-600">
            <Clock size={12} className="mr-1" />
            {formatDate(new Date())}
          </div>
        </div>

        {messages.map((message) => (
          <div key={message.id} className="space-y-2">
            <div
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex max-w-2xl ${
                  message.sender === "user" ? "flex-row-reverse" : "flex-row"
                } items-end space-x-2`}
              >
                <div
                  className={`flex-shrink-0 ${
                    message.sender === "user" ? "ml-2" : "mr-2"
                  }`}
                >
                  {message.sender === "bot" ? (
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Bot size={16} className="text-white" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <User size={16} className="text-gray-600" />
                    </div>
                  )}
                </div>

                <div
                  className={`px-4 py-3 rounded-2xl max-w-md lg:max-w-lg ${
                    message.sender === "user"
                      ? "bg-blue-600 text-white rounded-br-md"
                      : "bg-white text-gray-800 rounded-bl-md shadow-sm border border-gray-200"
                  }`}
                >
                  <div className="whitespace-pre-line leading-relaxed">
                    {message.text}
                  </div>
                  <div
                    className={`text-xs mt-2 ${
                      message.sender === "user"
                        ? "text-blue-100"
                        : "text-gray-500"
                    }`}
                  >
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Typing */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-end space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-2">
                <Bot size={16} className="text-white" />
              </div>
              <div className="bg-white text-gray-800 rounded-2xl rounded-bl-md shadow-sm border border-gray-200 px-4 py-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="bg-white border-t border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end space-x-3">
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
              <Paperclip size={20} />
            </button>

            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your travel question here..."
                rows="1"
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none max-h-32 min-h-[48px]"
                style={{ lineHeight: "1.5" }}
              />
            </div>

            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
              <Smile size={20} />
            </button>

            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
            >
              <Send size={20} />
            </button>
          </div>

          <div className="mt-2 text-xs text-gray-500 text-center">
            Press Enter to send • Ask about vacations, destinations or packages!
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
