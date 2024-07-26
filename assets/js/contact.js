/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')
      

const sendEmail = (e) => {
  e.preventDefault()

  //serviceId - templateId - #form - publicKey
  emailjs.sendForm('service_227h4jo' , 'template_bbvmglr' , '#contact-form', 'ScnthE5zsiskn2Bg0') 
  .then(() => {
    contactMessage.textContent = 'Message sent successfully ✅'

    setTimeout(() => {
      contactMessage.textContent = ''
    },5000)

    contactForm.reset()
  }, () => {
    contactMessage.textContent = ' Message not sent (service error) ❌'
  })
}
console.log(contactMessage);

contactForm.addEventListener('submit' , sendEmail)