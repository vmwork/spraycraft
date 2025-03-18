export function Api() {
  const TELEGRAM_BOT_TOKEN = '7791493580:AAFzvdb9mwn-nqZHi0pk82OFlP1IU35g_Eo';
  const TELEGRAM_CHAT_ID = '@ContraFlowGroupe';
  const APIMessage = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  return {
    TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID,
    APIMessage,
  };
}
