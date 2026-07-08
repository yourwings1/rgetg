emailjs.init({
    publicKey: "AQmfi9-hc69bzSx0r",
});


const orderForm = document.querySelector("#orderForm");
const formMessage = document.querySelector(".form_message");


orderForm.addEventListener("submit", function (event) {

    event.preventDefault();


    document.querySelector("#orderTime").value =
        new Date().toLocaleString("ru-RU");


    formMessage.textContent = "Отправляем заявку...";


    emailjs
        .sendForm(
            "service_vp8s9az",
            "template_x07xy8c",
            orderForm
        )
        .then(() => {

            formMessage.textContent =
                "Заявка отправлена. Мы скоро свяжемся с вами.";

            orderForm.reset();

        })
        .catch((error) => {

            console.error("EmailJS error:", error);

            formMessage.textContent =
                "Не удалось отправить заявку.";

        });

});
