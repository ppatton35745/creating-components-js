const fragment = document.createDocumentFragment();

const messagesArticle = document.createElement("article");
messagesArticle.id = "messages";

const populateMessages = (numOfMessages) => {
    const messages = [];
    for (i = 0; i < numOfMessages; i++) {
        const curElmt = document.createElement("section");
        curElmt.id = "message" + (i+1);
        curElmt.className = "message"
        curElmt.textContent = "This is the text content of message " + (i + 1);
        messages.push(curElmt);
    }

    return messages
}

const messages = populateMessages(5);

messages.forEach( function(message){
    messagesArticle.appendChild(message);
});

fragment.appendChild(messagesArticle);

document.querySelector("body").insertBefore(fragment, document.querySelector("script"));