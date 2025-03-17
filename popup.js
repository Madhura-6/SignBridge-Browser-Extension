document.getElementById("toggleSignVideo").addEventListener("click", function () {
    console.log(" Enable Sign Language button clicked");

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (!tabs || tabs.length === 0) {
            console.error(" No active tab found!");
            return;
        }

        chrome.scripting.executeScript(
            {
                target: { tabId: tabs[0].id },
                files: ["content.js"],
            },
            () => {
                if (chrome.runtime.lastError) {
                    console.error("Failed to inject content script:", chrome.runtime.lastError);
                    alert(" Extension needs access to this page. Try reloading.");
                } else {
                    console.log(" Content script injected!");

                    // Send message after injection
                    chrome.tabs.sendMessage(tabs[0].id, { action: "enableSignVideo" }, function (response) {
                        if (chrome.runtime.lastError) {
                            console.error("Failed to communicate with content script:", chrome.runtime.lastError);
                        } else {
                            console.log("Response from content script:", response);
                        }
                    });
                }
            }
        );
    });
});
