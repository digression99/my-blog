import React from "react";

const TWITTER_INTENT_URL = "https://twitter.com/intent/tweet";

const generateIntentUrl = (url: string) => `${TWITTER_INTENT_URL}?url=${url}`;

function TwitterShareButton({ url }) {
  return <a href={generateIntentUrl(url)}>Share on Twitter!</a>;
}

export default TwitterShareButton;
