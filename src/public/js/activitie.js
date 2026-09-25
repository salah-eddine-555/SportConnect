

const Modal =  document.getElementById("addActivityModal");

const btnsAdd = document.querySelectorAll(".addBtn");
const closesModal = document.querySelectorAll(".modal-close")
const editBtns = document.querySelectorAll(".edit-activity-btn");

const activityForm = document.getElementById("activityForm");
const modalTitle = document.getElementById("activityModalTitle");
const activityName = document.getElementById("activityName");

const activityCapacity = document.getElementById("activityCapacity");

const activityPrice = document.getElementById("activityPrice");

const activityFacility = document.getElementById("activityFacility");

const activityId = document.getElementById("activityId");

const associationId = document.getElementById("activityAssociationId");

const submitBtn = document.getElementById("activitySubmit");

let editingId = null;



closesModal.forEach(close => {
    close.addEventListener("click", () => {
        Modal.style.display = 'none';
    })
})
btnsAdd.forEach(btn => {
    btn.addEventListener("click", () => {

        editingId = null;

        activityName.value = "";
        activityCapacity.value = "";
        activityPrice.value = "";
        activityFacility.value = "";

        modalTitle.textContent = "Ajouter une activité";
        submitBtn.textContent = "Ajouter";
        Modal.style.display = 'flex';
    })
})

editBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        Modal.style.display = "flex";

        editingId = btn.dataset.id;
        activityName.value = btn.dataset.name;
        activityCapacity.value = btn.dataset.maxCapacity;

        activityPrice.value = btn.dataset.basePrice;

        activityFacility.value = btn.dataset.facilityId;

        modalTitle.textContent = "Modifier une activité";

        submitBtn.textContent = "Modifier";
    });
});

activityForm.addEventListener("submit", async(e)=> {
    e.preventDefault();

    const data = {
        name: activityName.value,
        max_capacite: Number(activityCapacity.value),
        base_price: Number(activityPrice.value),
        association_id: Number(associationId.value),
        facility_id: Number(activityFacility.value)
    }


    try{
        let res;

        if(editingId === null){
            console.log(data);
            res = await fetch("/activities", {
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(data)
            })
        }else{
            res = await fetch(`/activities/${editingId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
        }

        if(!res.ok){
            throw new Error("Erreur au nievau de soumis des donnees !");
        }
        Modal.style.display = 'flex';
        window.location.reload();

    }catch(e){
        console.log(e.message);
    }
})