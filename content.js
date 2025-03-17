//  Prevent multiple script executions
if (!window.hasRunSignBridge) {
    window.hasRunSignBridge = true;
    console.log(" Content script is running...");

    //  Mapping of video titles to sign language videos
    const videoMap = {
        "Learn English Greetings - English Greetings Explained in Detail": "videos/Greetings.mp4",
         "Nice to meet you (A1)":"videos/Nice to meet you.mp4",
        "classroom objects #shorts #viral #trending #vocabulary":"videos/Classroom Object.mp4"
    };

    //  Function to sanitize and match video titles
    function sanitizeTitle(title) {
        return title.replace(/ - YouTube$/, "").trim(); //  Remove "- YouTube" from the title
    }

    //  Function to check and inject sign language video
    function checkAndInjectSignVideo() {
        let videos = document.querySelectorAll("video");

        if (videos.length === 0) {
            console.warn(" No videos found on this page.");
            return;
        }

        let pageTitle = sanitizeTitle(document.title);
        console.log(" Processed Video Title:", pageTitle);

        if (videoMap[pageTitle]) {
            injectSignVideo(videoMap[pageTitle]);
        } else {
            console.warn(" No sign language video found for:", pageTitle);
        }
    }

    //  Function to inject the sign language overlay video
    function injectSignVideo(signVideoSrc) {
        if (document.getElementById("signVideoOverlay")) {
            console.log("Sign language video already exists.");
            return;
        }

        let overlay = document.createElement("div");
        overlay.id = "signVideoOverlay";

        let videoPath = chrome.runtime.getURL(signVideoSrc);
        console.log(" Loading Sign Video:", videoPath);

        overlay.style = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 300px;
            height: 200px;
            border-radius: 10px;
            z-index: 999999;
            background-color: black;
            padding: 5px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
        `;

        let video = document.createElement("video");
        video.src = videoPath;
        video.autoplay = true;
        video.controls = true;
        video.muted = false;
        video.style = "width: 100%; height: 100%; border-radius: 10px;";

        let closeButton = document.createElement("button");
        closeButton.innerText = "✖";
        closeButton.style = `
            position: absolute;
            top: 5px;
            right: 5px;
            background-color: red;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 50%;
            width: 25px;
            height: 25px;
            font-size: 14px;
        `;
        closeButton.onclick = () => overlay.remove();

        overlay.appendChild(video);
        overlay.appendChild(closeButton);
        document.body.appendChild(overlay);
        console.log("Sign language video displayed!");
    }

    // Listen for messages from `popup.js`
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        console.log("📨 Message received in content.js:", message);

        if (message.action === "enableSignVideo") {
            checkAndInjectSignVideo();
            sendResponse({ status: "Sign language video enabled!" });
        }

        return true; //  Keeps the message channel open for async response
    });

    console.log(" Content script loaded successfully.");
}
