

const familleSelect = document.getElementById("famille_id");
const newFamilyGroup = document.getElementById("newFamilyGroup");
const newFamilyName = document.getElementById("new_family_name");


const memberForm = document.querySelector(".member-form");

    memberForm.addEventListener("submit", async (e) => {
        // Empêche le navigateur de recharger la page
        e.preventDefault();

        // Récupérer les valeurs du formulaire
        const first_name = document.querySelector("#first_name").value;
        const last_name = document.querySelector("#last_name").value;
        const email = document.querySelector("#email").value;
        const birth_date = document.querySelector("#birth_date").value;
        const famille_id = document.querySelector("#famille_id").value;
        const new_family_name = document.querySelector("#new_family_name").value;

        // Créer l'objet à envoyer au serveur
        const data = {
            first_name,
            last_name,
            email,
            birth_date,
            famille_id,
            new_family_name
        };

        // console.log(data);

        try {
            console.log(data)
                const response = await fetch("/membres", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });


                if (!response.ok) {
                    throw new Error("Erreur lors de l'ajout du membre");
                }

                const result = await response.json();

                console.log("Membre ajouté :", result);

                // Exemple : vider le formulaire
                memberForm.reset();

                // Recharger la page pour afficher le nouveau membre
                window.location.reload();

            } catch (error) {
                console.error("Erreur :", error);
                alert("Impossible d'ajouter le membre");
            }
        });



    familleSelect.addEventListener("change", () => {

        if (familleSelect.value === "new") {

            newFamilyGroup.style.display = "flex";
            newFamilyName.required = true;

        } else {

            newFamilyGroup.style.display = "none";
            newFamilyName.required = false;
            newFamilyName.value = "";
        }
    });