"use strict";
chrome.runtime.onMessage.addListener(message => {
    if (message.action === "lookupBible") {
        bibleTextPopup(message.text);
    }
});
function bibleTextPopup(selectedText) {
}
