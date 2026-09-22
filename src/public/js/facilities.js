const modal = document.getElementById('facilityModal');

const addFacilityBtn = document.getElementById('addFacilityBtn');

const closeModal = document.getElementById('closeModal');

const cancelModal = document.getElementById('cancelModal');

const editButtons = document.querySelectorAll('.edit-facility-btn');

const facilityName = document.getElementById("facilityName");
const facilityCapacity = document.getElementById("facilityCapacity");
const modalTitle = document.getElementById("modalTitle");
const facilityForm = document.getElementById("facilityForm");

let editingId = null;

// button pour ovrire le modal 
addFacilityBtn.addEventListener("click", () => {

    editingId = null;
    facilityName.value = "";
    facilityCapacity.value = "";
    modal.style.display = 'flex';

})

// event pour close modal 
cancelModal.addEventListener("click", () => {

    modal.style.display = 'none';
})

closeModal.addEventListener('click', () => {

    modal.style.display = 'none';

});




editButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        editingId = btn.dataset.id;
        facilityName.value = btn.dataset.name;
        facilityCapacity.value = btn.dataset.capacity;
        modalTitle.textContent = "Modifier Facilities";

        modal.style.display = 'flex';

    })
})




facilityForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = { name: facilityName.value, capacity: facilityCapacity.value }

    try {

        let res;
        if (editingId === null) {

            res = await fetch("/facilities", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

        } else {
            //update
             res = await fetch(`/facilities/${editingId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
        }

        if (!res.ok) {
            throw new Error("Erreur lors de l'enregistrement")
        }

        modal.style.display = 'none';
        window.location.reload();
    }catch(e){
        console.log(e);
    }
}
)
