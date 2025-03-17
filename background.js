chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("📨 Message received in background:", message);

    if (message.action === "enableSignVideo") {
        console.log("✅ Enabling Sign Language Video");
        sendResponse({ status: "success", message: "Sign Language Video Enabled" });
    }

    return true; // Needed if using sendResponse asynchronously
});
