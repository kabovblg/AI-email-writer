#AI Email Writer - Chrome Extension
AI Email Writer is a productivity-focused Chrome extension designed to help users quickly craft high-quality email responses using AI. By analyzing the content of received emails, the extension generates smart replies with a customizable tone (friendly, casual, professional, etc.). Currently, the extension works with Gmail, with plans to support additional email platforms in the future.

🚀 Features
* AI-Powered Email Replies
Automatically generate suggested replies based on the content of incoming emails.

* Tone Customization
Choose from various tones like friendly, casual, professional, and more to match your communication style.

* Seamless Gmail Integration
A reply button is injected directly into Gmail’s response textbox for a smooth user experience.

* Extensible Design
Backend built with Java Spring Boot and modular frontend using JavaScript for easy future expansion.

🛠️ Tech Stack
Frontend (Chrome Extension):
JavaScript
Chrome Extensions API
DOM manipulation to integrate into Gmail’s UI

Backend (AI Reply Generation):
Java Spring Boot
Model–Controller–Service architecture
Google Gemini API to interact with the AI
Handles email parsing, tone logic, and AI integration

🧠 AI & Privacy
This extension uses AI models to process the content of received emails for generating replies. Email data is not stored or used beyond the purpose of reply generation.
