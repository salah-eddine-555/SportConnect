console.log("hello assocaiations");

const modal = document.getElementById("associationModal");

const btnAdd = document.getElementById("addAssociationBtn");
const modalTitle  =  document.getElementById("modalTitle");
const btnClose = document.getElementById("closeModal");
const cancelModal= document.getElementById("cancelModal");

const associationName = document.getElementById("associationName");
const associationEmail  = document.getElementById("associationEmail");
const associationAddress  = document.getElementById("associationAddress");
const editBtns = document.querySelectorAll(".edit-association-btn");
const associationForm = document.getElementById("associationForm");


let editingId;


btnAdd.addEventListener("click", () => {

    editingId = null;
    associationName.value = "";
    associationEmail.value = "";
    associationAddress.value = "";


    modal.style.display = 'flex';
})

editBtns.forEach(btn => {
    btn.addEventListener("click", () =>{

        modal.style.display = "flex";

        editingId = btn.dataset.id;
        associationName.value = btn.dataset.name;
        associationEmail.value = btn.dataset.email;
        associationAddress.value = btn.dataset.address;

        modalTitle.textContent = 'Modifier';
    })
})

btnClose.addEventListener("click", () => {

    modal.style.display = 'none';
})

cancelModal.addEventListener("click", () => {

    modal.style.display = 'none';
})


associationForm.addEventListener("submit", async(e) => {
    e.preventDefault(); 

    const data = {
            name: associationName.value,
            email: associationEmail.value,
            address: associationAddress.value
    }

    try{
        let res;
        if(editingId === null){
            res = await fetch('/associations', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
        }else{

            res = await fetch(`/associations/${editingId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })  
        }

        if(!res.ok){
            throw new Error("erreur lorsque le submit des donnees");
        }
        modal.style.display = 'none';
        window.location.reload();
    }catch(e){
        console.log(e)
    }

})


