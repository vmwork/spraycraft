const TELEGRAM_BOT_TOKEN = "7238758343:AAHfmkPs5_hjivpMOwdT5tMsBveB1L85mdE";
const TELEGRAM_CHAT_ID = "@spray_groupe";
const APIMessage = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

const sendMessageToTg = async (message, userData) => {
  let newMessage = [];
  message.forEach((item) => {
    const text = `
Назва товару: 
${item.product_name.trim()}
Артикул: ${item.artical}
Кількість: ${item.product_count_to_buy}
Ціна: ${item.price}
____________________`;
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
Имя: ${userData.name}
Телефон: ${userData.phone}
Місто: ${userData.city}
Спосіб доставки: ${userData.delivery.trim()}
Відділення: 
${userData.postomat}
Оплата : ${userData.payment}
Коментар : ${userData.comment}
Товари до замовлення:
${newMessage}
Повна ціна : ${userData.totalPrice}`,
      }),
    });
  } catch (error) {
    console.error(error);
  }
};
