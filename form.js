emailjs.init({
  publicKey: "ТВОЙ_PUBLIC_KEY",
});

const orderForm = document.querySelector("#orderForm");
const formMessage = document.querySelector(".form_message");

orderForm.addEventListener("submit", function (event) {
  event.preventDefault();

  formMessage.textContent = "Отправляем заявку...";

  emailjs
    .sendForm("ТВОЙ_SERVICE_ID", "ТВОЙ_TEMPLATE_ID", orderForm)
    .then(() => {
      formMessage.textContent = "Заявка отправлена. Мы скоро свяжемся с вами.";
      orderForm.reset();
    })
    .catch(() => {
      formMessage.textContent = "Не удалось отправить заявку. Попробуйте позже.";
    });
});
