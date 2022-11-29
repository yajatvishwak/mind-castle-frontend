let messagesJourney = [
  "Fetching content based on your personality",
  "Hmm.. interesting. We are looking for relateable content",
  "One sec, new journeys are loading",
  "Finding the right journey for you",
];
let messagesTroops = [
  "Fetching content based on your personality",
  "Hmm.. interesting. We are looking for relateable content",
  "One sec, new journeys are loading",
  "Finding the right journey for you",
];
let messagesChat = [
  "Fetching content based on your personality",
  "Hmm.. interesting. We are looking for relateable content",
  "One sec, new journeys are loading",
  "Finding the right journey for you",
];

function getLoadingMessage(mode) {
  if (mode && mode === "journey")
    return messagesJourney[Math.floor(Math.random() * messagesJourney.length)];
  else if (mode && mode === "troops")
    return messagesTroops[Math.floor(Math.random() * messagesTroops.length)];
  else if (mode && mode === "chat")
    return messagesChat[Math.floor(Math.random() * messagesChat.length)];
  else return "Loading content, please wait";
}
export { getLoadingMessage };
