const modal=document.getElementById("emailModal");
const modalBtn=document.getElementById("modalBtn");
const closeBtn=document.getElementById("closeBtn");


$('#emailModal').appendTo("body").modal('show');

modalBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);

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


