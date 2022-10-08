const modal=document.getElementById("emailModal");
const modalBtn=document.getElementById("modalBtn");
const closeBtn=document.getElementById("closeBtn");


$('#emailModal').appendTo("body").modal('show');

modalBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);

sendBtn=document.addEventListener("click", sendMail)

window.addEventListener("click", outsideClick);

function openModal(){
    modal.style.display = "overlay"
};

function closeModal(){
    modal.style.display = "none"
};

function outsideClick(e){
    if (e.target == modal){
        modal.style.display = "none"
    }
};


(function(){
    emailjs.init("kLiJJ2jWl1El1AaQf");
})();

const sendBtn=document.getElementById("submitBtn");
document.getElementById("modalForm")
.addEventListener("submit", (function (event){
    event.preventDefault();

    sendBtn.value="sending...";

    const serviceID = 'default_service';
    const templateID = 'template_6cvinyn'; 

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
            btn.value = 'Send Email';
            console.log("Sucess!");
            alert('Sent!');
        },
        (error) =>{
            console.log("failed", error);
            alert(JSON.stringify(err));
        }
    );
}));