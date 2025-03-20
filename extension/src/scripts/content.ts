chrome.runtime.onMessage.addListener( message => {
    if( message.action === "lookupBible" ){
        // bibleTextPopup(message.text);
    }

})

function bibleTextPopup( text: string, x: number, y: number ){

    document.getElementById("bibleResearcherPopup")?.remove();

    const biblePopup = document.createElement("div");
    biblePopup.id = "bibleResearcherPopup";
    biblePopup.className = "fixed bg-white p-4 border shadow-lg rounded-lg z-50 w-64";

    biblePopup.style.position = "absolute";
    biblePopup.style.top = `${y + 10}px`;
    biblePopup.style.left = `${x + 10}px`;

    biblePopup.innerHTML = `
        <button id="close" type="button">X</button>
        <div>
            <h1 id="bibleVersion">Current Bible Version: My_Bible</h1>
            <h2 id="searchedVerse">Verse number</h2>
            <div id="verseText">
                Current Verse to display...
            </div>
        </div>
    `
}