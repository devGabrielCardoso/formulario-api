function sendEmail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_8sc7atg";
  const templateID = "template_uw6j32c";

  emailjs.send(serviceID, templateID, params).then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Mensagem enviada com sucesso!");
    })
    .catch((err) => console.log(err));
}
