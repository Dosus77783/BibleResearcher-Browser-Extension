chrome.runtime.onInstalled.addListener( () => {
    chrome.contextMenus.create( {
        id: "lookupBible",
        title:"Lookup Bible Text",
        contexts:["selection"]
    } );
} );

chrome.contextMenus.onClicked.addListener( (data, tab) => {
    if(data.menuItemId === "lookupBible" && data.selectionText){
        chrome.tabs.sendMessage( tab!.id!, {
            action:"lookupBible",
            text: data.selectionText
        } );
    }
} );