let messages = [
  "Fetching content based on your personality",
  "Hmm.. interesting. We are looking for relateable content",
  "One sec, new journeys are loading",
  "Finding the right journey for you",
];

function getLoadingMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
export { getLoadingMessage };
