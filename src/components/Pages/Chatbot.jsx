import React, { useState, useEffect } from "react";
import pic from "../../assets/images/profile-pic.jpg";
import UserMsg from '../utilities/userMsg';
import axios from "axios";

export const Chatbot = ({ setIsChatbotVisible }) => {
  const [email, setEmail] = useState("");
  const [gotEmail, setGotEmail] = useState(false);

  function getTime() {
    return new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  }

  const prevMessages = () => {
    if (localStorage.getItem('messages') === null) {
      return [
        { sender: 'agent-message', currentTime: getTime(), text: "Got any questions? I'm happy to help." }
      ];
    } else {
      return JSON.parse(localStorage.getItem('messages'));
    }
  };

  const [messages, setMessages] = useState(prevMessages());

  useEffect(() => {
    const chatbody = document.querySelector(".chat-body");
    chatbody.scrollTop = chatbody.scrollHeight;

    localStorage.setItem('messages', JSON.stringify(messages));

    axios.post('https://my-portfolio-backend-vyn8.onrender.com/chatbot', {
      email: email,
      messages: messages
    })
      .then(res => console.log('Received your message'))
      .catch(err => console.log(err));
  }, [messages]);

  useEffect(() => {
    const emailbtn = document.querySelector(".msg-btn");
    const submitbtn = document.querySelector(".chat-footer-btn");
    emailbtn.disabled = true;
    submitbtn.disabled = true;

    if (localStorage.getItem('Email') !== null) {
      setGotEmail(true);
    }

    if (messages.length > 1 && localStorage.getItem('Email') === null) {
      const bot = document.querySelector('.bot');
      bot.classList.remove('disable');
      const msgField = document.getElementById("messageField");
      msgField.disabled = true;
      msgField.placeholder = "Please first provide your Email!";
      msgField.style.cursor = 'not-allowed';
      submitbtn.style.cursor = 'not-allowed';
    }
  }, []);

  const toggle = () => {
    const msgSvg = document.querySelector(".toggle-btn-msg-svg");
    const chatbot = document.querySelector(".chatbot");
    const xSvg = document.querySelector(".toggle-btn-x-svg");
    const chatbody = document.querySelector(".chat-body");
    const openChatBtn = document.querySelector('.openChat-btn');

    setTimeout(() => {
      chatbody.scrollTop = chatbody.scrollHeight;
    }, 100);

    if (xSvg.classList.contains("disable")) {
      xSvg.style.animation = "icon-rotation .3s";
      chatbot.style.animation = "chatbot-animation-in 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both";
      xSvg.classList.remove('disable');
      chatbot.classList.remove('disable');
      msgSvg.classList.add('disable');
      if (openChatBtn) openChatBtn.innerHTML = 'Close Chat';
      setIsChatbotVisible(true);
    } else {
      msgSvg.style.animation = "icon-transformation .3s";
      chatbot.style.animation = "chatbot-animation-out 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
      xSvg.classList.add('disable');
      msgSvg.classList.remove('disable');
      setIsChatbotVisible(false);
      setTimeout(() => {
        if (openChatBtn) openChatBtn.innerHTML = 'Open Chat';
        chatbot.classList.add('disable');
      }, 300);
    }
  };

  const handleUserMessageField = (event) => {
    const submitbtn = document.querySelector(".chat-footer-btn");
    if (event.currentTarget.value.length > 0) {
      submitbtn.disabled = false;
      submitbtn.style.cursor = "pointer";
    } else {
      submitbtn.disabled = true;
      submitbtn.style.cursor = "not-allowed";
    }
  };

  const handleEmailField = (event) => {
    const emailbtn = document.querySelector(".msg-btn");
    const isValid = event.target.checkValidity();
    const isPlaceholderShown = event.target.placeholder === event.target.value;
    if (isValid && !isPlaceholderShown) {
      emailbtn.disabled = false;
      emailbtn.style.cursor = "pointer";
    } else {
      emailbtn.disabled = true;
      emailbtn.style.cursor = "not-allowed";
    }
  };

  const handleSend = () => {
    const msgInput = document.getElementById("messageField").value.trim();
    if (msgInput !== "") {
      const newMessage = { response: gotEmail, sender: 'user-message', text: msgInput, currentTime: getTime() };
      setMessages([...messages, newMessage]);
      document.getElementById("messageField").value = "";

      if (!gotEmail) {
        setTimeout(() => {
          const bot = document.querySelector('.bot');
          bot.classList.remove('disable');
          const msgField = document.getElementById("messageField");
          msgField.disabled = true;
          msgField.placeholder = "Please first provide your Email!";
          msgField.style.cursor = 'not-allowed';
          document.querySelector(".chat-footer-btn").style.cursor = 'not-allowed';
        }, 1000);
      }
    }
  };

  const handleEmailSubmit = () => {
    const emailInput = document.querySelector("#emailInput").value.trim();

    if (emailInput !== "" && email === "") {
      setEmail(emailInput);
      document.querySelector(".bot").innerHTML = `...`;

      const msgField = document.getElementById("messageField");
      msgField.disabled = false;
      msgField.placeholder = "Write a message...";
      msgField.style.cursor = 'text';

      setTimeout(() => {
        document.querySelector(".bot").classList.add('disable');
        const newMessage = {
          sender: 'agent-message',
          text: `Email provided: ${emailInput}. <br/>Thank you for providing your email. <br/>We'll get back to you soon.`,
          currentTime: getTime()
        };
        setMessages([...messages, newMessage]);
      }, 1000);

      localStorage.setItem('Email', emailInput);
      setGotEmail(true);
    } else {
      console.log("Email already is provided");
    }
  };

  return (
    <div className="chatbot-wrapper">
      <div className="chatbot disable">
        <div className="chat-container">

          <div className="chat-header">
            <div className="agent-info">
              <img src={pic} alt="Agent" className="agent-avatar" />
              <div className="agent-details">
                <span className="agent-name">Rohan Gaikwad</span>
                <span className="return-time">We'll get back to you soon</span>
              </div>
            </div>
          </div>

          <div className="chat-body">
            <UserMsg messages={messages} />

            <div className="bot disable">
              <div className="bot-response">
                <p>
                  Don’t have time to wait for a response? Leave your email and we’ll
                  be in touch as soon as possible.
                </p>
                <div className="chat-input">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    id="emailInput"
                    onChange={handleEmailField}
                  />
                  <button className="msg-btn" onClick={handleEmailSubmit}>
                    <svg width="50%" height="50%" fill="currentcolor" viewBox="0 0 24 24">
                      <path d="M21.158.222L2.568 11.815c-.8.498-.749 1.215.113 1.591l4.406 1.923 10.395-9.903c1.377-1.296 1.569-1.119.426.395L8.254 18.215v4.927c0 .953.5 1.141 1.113.418l4.473-5.282 5.055 2.207c.861.376 1.643-.092 1.736-1.04l1.81-18.404c.094-.949-.484-1.317-1.283-.819" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="chat-footer">
            <input
              id="messageField"
              type="text"
              placeholder="Write a message"
              onChange={handleUserMessageField}
            />
            <button onClick={handleSend} className="chat-footer-btn">
              <svg fill="currentcolor" viewBox="0 0 24 24">
                <path d="M21.158.222L2.568 11.815c-.8.498-.749 1.215.113 1.591l4.406 1.923 10.395-9.903c1.377-1.296 1.569-1.119.426.395L8.254 18.215v4.927c0 .953.5 1.141 1.113.418l4.473-5.282 5.055 2.207c.861.376 1.643-.092 1.736-1.04l1.81-18.404c.094-.949-.484-1.317-1.283-.819" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
