/* General Reset */
body, html {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  background-color: #0f111a;
  color: #c5c6c7;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app {
  width: 80%;
  max-width: 600px;
  text-align: center;
}

/* Typing Area */
#prompt-area {
  margin-bottom: 20px;
}

#prompt {
  font-size: 18px;
  color: #ffffff;
  line-height: 1.5;
}

#input-area {
  width: 100%;
  height: 100px;
  background-color: #16191f;
  color: #ffffff;
  font-size: 18px;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 8px;
}

#speed-info {
  margin-top: 20px;
  font-size: 16px;
  color: #ffcc00;
}

#error-message {
  color: #ff0000;
  font-size: 14px;
  margin-top: 5px;
}

/* Control Buttons */
#controls {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.control-button {
  font-size: 20px;
  padding: 10px;
  background-color: #ffcc00;
  border: none;
  cursor: pointer;
  border-radius: 8px;
}

.control-button:hover {
  background-color: #ff9900;
}

.control-button:disabled {
  background-color: #777;
  cursor: not-allowed;
}
