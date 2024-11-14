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
  overflow: hidden;
}

#app {
  width: 80%;
  max-width: 900px;
  text-align: center;
}

/* Header Logo */
header h1#logo {
  font-size: 24px;
  font-weight: bold;
  color: #ffcc00;
  margin-bottom: 20px;
}

/* Navigation Menu */
nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
}

.menu-item {
  color: #c5c6c7;
  cursor: pointer;
  font-size: 14px;
}

.menu-item.active {
  color: #ffcc00;
  text-decoration: underline;
}

/* Typing Area */
main #typing-area {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #16191f;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}

#arrow {
  color: #ffcc00;
  font-size: 18px;
}

#prompt {
  display: flex;
  gap: 2px;
  font-size: 22px;
  line-height: 1.5;
  color: rgba(197, 198, 199, 0.4);
  white-space: nowrap; /* Keep text on one line */
  overflow: hidden;
  text-overflow: ellipsis;
}

#prompt span.correct {
  color: #ffffff;
}

#prompt span.incorrect {
  color: #ff0000;
}

#input-area {
  margin-top: 10px;
  width: 100%;
  height: 40px;
  background-color: transparent;
  color: #c5c6c7;
  font-size: 18px;
  border: 1px solid #72767d;
  border-radius: 4px;
  padding: 5px;
  outline: none;
}

#stats {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  color: #ffcc00;
  font-size: 16px;
}

#controls {
  margin-top: 20px;
}

#controls button {
  padding: 8px 15px;
  font-size: 16px;
  margin: 0 5px;
  color: #ffffff;
  background-color: #ffcc00;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

#controls button:hover {
  background-color: #e6b800;
}

















