const TELEGRAM_BOT_TOKEN = "7238758343:AAHfmkPs5_hjivpMOwdT5tMsBveB1L85mdE";
const TELEGRAM_CHAT_ID = "@spray_groupe";
const APIMessage = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

const sendMessageToTg = async (message, userData) => {
  let newMessage = [];
  message.forEach((item) => {
    const text = `
        Назва товару: ${item.product_name},

        Артикул: ${item.artical},

        Кількість: ${item.product_count_to_buy}
        ________________________________________
        `;
    newMessage.push(text);
  });
  try {
    const response = await fetch(APIMessage, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: `
  📩 Вам нова заявка:

  Имя: ${userData.name},

  Телефон: ${userData.phone},

  Почта: ${userData.email},

  Місто: ${userData.city},

  Спосіб доставки: ${userData.delivery},

  Відділення: ${userData.postomat},

  Оплата : ${userData.payment},

  Товари до замовлення:
  ${newMessage}`,
      }),
    });
    console.log(response);
    // if (response.ok) notifySuccess();
    // if (!response.ok) notifyFlail();
  } catch (error) {
    console.error(error);
  }
};
