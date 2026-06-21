Lottie to MP4 & GIF Converter (Node.js)

This project converts Lottie JSON animations into MP4 videos and GIF files using Node.js, enabling easy export of animations for web and social media use.

📖 About

A Node.js utility that converts Lottie animations into MP4 and GIF formats for video and web usage.

🚀 Features
Convert Lottie JSON to MP4
Convert Lottie JSON to GIF
High-quality rendering
Custom resolution support
Frame control (FPS settings)
Lightweight Node.js implementation
🏗️ How It Works
Load Lottie JSON file
Render animation frame-by-frame
Convert frames into video (MP4)
Or compile frames into GIF
Save output file locally
⚙️ Technologies Used
Node.js
Lottie Files (lottie-web / lottie-node)
FFmpeg
Canvas / Puppeteer (for rendering frames)
GIF Encoder
📂 Project Structure
LOTTIE-TO-MP4-GIF
│
├── input/
│   └── animation.json
│
├── output/
│   ├── output.mp4
│   └── output.gif
│
├── src/
│   ├── converter.js
│   ├── mp4-generator.js
│   └── gif-generator.js
│
├── package.json
└── index.js
🔧 Setup Instructions
1. Clone Repository
git clone <repo-url>
2. Install Dependencies
npm install
3. Install FFmpeg

Make sure FFmpeg is installed and added to PATH:

https://ffmpeg.org/download.html
4. Run Project
node index.js
📤 Output Formats
.mp4 (video export)
.gif (animation export)
