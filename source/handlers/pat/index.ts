export const PatResponse = {
  setupHandlers: function (bot: any) {
    bot.hears("/pat", pat);
    bot.hears("/Pat", pat);
  }
};

export function pat(ctx) {
  // If there's no @mention, use the sender's username
  const receiver: string =
    typeof ctx.message.reply_to_message !== "undefined"
      ? ctx.message.reply_to_message.from.username
      : ctx.from.username;
  const replies = [
    `On the other hand, ${receiver} tried REALLY hard...`,
    `Well, ${receiver} did give it their best`,
    `Let's just politely move on from what ${receiver} just did`,
    `${receiver} must feel a bit embarassed about that`,
    `It took me a moment to get it...oh dear ${receiver}`,
    `Wow...${receiver}, I just can't...`,
    `I feel a little bad for ${receiver}`,
    `If I had an award for pity I'd give it to ${receiver}`,
    `${receiver} took second place in the pity olympics, but only because the judges felt guilty`,
    `${receiver}...not having a good day`,
    `There there ${receiver}, there there...`,
    `I'm a little disappointed ${receiver}, not going to lie...`
  ];
  const index = Math.floor(Math.random() * replies.length);
  ctx.reply(replies[index]);
}
