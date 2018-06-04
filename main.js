const fragment = document.createDocumentFragment();

const messagesArticle = document.createElement("article");
messagesArticle.id = "messages";

const populateMessages = (numOfMessages) => {
    const messages = [];
    for (i = 0; i < numOfMessages; i++) {
        const curElmnt = document.createElement("section");
        curElmt.id = "message" + toString(numOfMessages);
        curElmt.className = "message"
        curElmt.textContent = "This is the text content of message " + numOfMessages
        messages.push(curElmnt);
    }

    return messages
}

const messages = populateMessages(5);

messagesArticle.appendChild(messages);

messagesArticle.insertBefore(document.querySelector("body").querySelector("script"));