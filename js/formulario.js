const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_nd4x7pi';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'ENVIAR';
    }, (err) => {
      btn.value = 'ENVIAR';
      alert(JSON.stringify(err));
    });
});

btn.addEventListener("click", () => {
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Email enviado correctamente!',
        showConfirmButton: false,
        timer: 2800,
        background: '#554836',
        color: 'white',
      })

  });

const btn_scrolltop = document.getElementById("btn_scrolltop")
btn_scrolltop.addEventListener('click', () => {
window.scrollTo(0, 0)
})

window.onscroll = () => {
  add_btn_scrolltop()
}
