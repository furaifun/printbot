const { pricePerPage } = require("./billing");

module.exports = {
  response: {
    initial: {
      message: "🤖*Bienvenid@!*👋 \n ```El precio por pagina es de $18```. \n ❗ Recordá que debe ser .PDF \n ❗ Para cuidar el papel y ahorrar, desactiva la hoja de control desde tu PC 👉 https://youtu.be/lNOV3o3TBEk \n 📤 *Por favor, enviame el archivo que deseas imprimir*",
      file: {
        function: "manageFile",
        functionMessages: {
          received: "✅Archivo recibido correctamente✅",
          invalidFile: "❌El archivo debe ser formato PDF❌",
        },
      },
    },
    createPayment: {
      function: "createPayment",
      functionMessages: {
        creating: "💲Creando link de pago...",
        created: "${url}\n Son ${pages} paginas y el valor es de *${price} ARS*",
      },
      next: "questPayment",
    },
    questPayment: {
      buttons: {
        title: "Realizar pago",
        footer: "",
        content: [{ body: "Realizado" }],
        body: "Aprete el boton cuando haya realizado el pago 👇",
      },
      options: [{ value: "Realizado", next: "checkPayment" }],
    },
    checkPayment: {
      message: "Verificando pago...⏳",
      function: "checkPayment",
      functionMessages: {
        notPaid: "❌El pago no se ha realizado correctamente.\nSi ya realizo el pago, reintentelo mas tarde",
        paid: "🥳Pago Recibido. \n 🖨️*Enviando a imprimir*🖨️",
      },
    },
    finish: {
      message: "Finalizado, Gracias😃",
    },
  }
};
