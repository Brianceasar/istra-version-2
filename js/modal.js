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










// function sendEmail(e) {
//     e.preventDefault();
//     sendBtn.value = "send....";
    
//     var params = {
//         from_name: document.getElementById("name").value,
//         email_id: document.getElementById("email_id").value,
//         message: document.getElementById("message").value,
//     };

//     console.log(`Thank you ${email_id}`)

//     emailjs.send("service_o6why5o, template_rrjoypv", params,"58_tngLq-Zuv2fhSr")
//     .then(
//         function(res) {
//             sendBtn.value = "sendEmail";
//             console.log("success", res.status, res.text)
//             alert("SUCCESS!" + response.status, response.text);
//         },
        
//         function(error) {
//             sendBtn.value = "sendEmail";
//             console.log('FAILED...', error);
//             alert(error.message)
//         }
//     );
// };

// submitBtn.addEventListener("click", function(e) {
//     e.preventDefault();

//     emailjs.sendForm("service_o6why5o, template_rrjoypv", params,"58_tngLq-Zuv2fhSr")
//     .then(
//         function(res) {
//             submitBtn.value = "sendEmail";
            // console.log("success", res.status, res.text)
            // alert("SUCCESS!" + response.status, response.text);
//         },
        
//         function(error) {
//             submitBtn.value = "sendEmail";
//             console.log('FAILED...', error);
//             alert(error.message)
//         }
//     );
// });
