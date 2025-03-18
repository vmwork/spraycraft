import { Api } from '~/composables/api/api';
export default () => {
  const API = '';
  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, APIMessage } = Api();
  type IMessage = {
    firstName: string;
    email: string;
    message: string;
  };

  const sendMessage = async (message: IMessage) => {
    const notifySuccess = () => {
      useNuxtApp().$toast.success(
        `Hellow ${message?.firstName}\n <b>You message was send</b>`,
        {
          autoClose: 2000,
          dangerouslyHTMLString: true,
        }
      );
    };
    const notifyFlail = () => {
      useNuxtApp().$toast.error(
        `Hellow ${message?.firstName}\n <b>Somtsing Wrong, try again</b>`,
        {
          autoClose: 2000,
          dangerouslyHTMLString: true,
        }
      );
    };
    try {
      const response = await fetch(APIMessage, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: `
📩 Вам новая заявка:
Имя: ${message.firstName}
Почта: ${message.email}
Сощбщение:
${message.message}`,
        }),
      });
      if (response.ok) notifySuccess();
      if (!response.ok) notifyFlail();
    } catch (error) {
      console.error(error);
    }
  };
  return { sendMessage };
};
