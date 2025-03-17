# SignBridge-Browser-Extension


##  Overview
SignBridge Browser Extension enhances video accessibility for the deaf community by overlaying pre-recorded sign language videos on web content. It helps users understand educational and entertainment videos more effectively by displaying a corresponding sign language video for recognized content.

##  Problem Statement
Many online videos, including educational content, are not fully accessible to the deaf community. Even with closed captions, understanding can be challenging. SignBridge provides an intuitive solution by displaying sign language videos alongside existing video content.

##  Features
- Detects video content on web pages.
- Displays an overlay with a sign language interpretation.
- Supports pre-recorded sign language videos.
- Lightweight and easy to use.

##  How It Works
1. The extension identifies the title of the currently playing video.
2. It maps the title to a corresponding sign language video.
3. If a matching sign language video is found, it displays an overlay with the sign language interpretation.
4. Users can play, pause, and close the overlay video as needed.

##  Technologies Used
- JavaScript (Manifest V3)- for extension logic.
- HTML & CSS- for UI components.
- Chrome Extension API- for video detection and overlay management.

##  Project Structure

SignBridge-Browser-Extension/
│── manifest.json      # Chrome Extension Manifest V3 file
│── popup.html         # Extension popup UI
│── popup.js           # Popup script for user interactions
│── content.js         # Main script for injecting sign language video
│── styles.css         # Styling for overlay and popup
│── videos/            # Folder containing pre-recorded sign language videos
│── icons/             # Extension icons
│── README.md          # Documentation




##  Installation & Usage

1. **Clone the Repository:**
   
   git clone https://github.com/your-username/SignBridge-Browser-Extension.git
  
2. **Load the Extension in Chrome:**
 
   - Open Chrome and go to `chrome://extensions/`.
   - Enable **Developer Mode** (top right corner).
   - Click **Load Unpacked** and select the project folder.
     
3. **Activate SignBridge:**
   
   - Visit a webpage with a supported video.
   - Click the extension icon and enable sign language support.

##  Future Scope
- AI-powered real-time sign language translation.
- Support for more video platforms.
- User-configurable sign language video database.


##  Contributing

Feel free to contribute to SignBridge! Submit a pull request or open an issue for suggestions.


 **Let's make web content more inclusive!**
