// banner button
const loadButton = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(res => res.json())
        .then(data => displayButton(data.categories))
        .catch(error => console.log(error));
}
const displayButton = (btns) => {
    console.log(btns)
    const buttonContainer= document.getElementById('banner-button')
    btns.forEach((btn) => {
        const button = document.createElement('button');
        button.innerHTML = `
            <img 
                class="w-10 h-10 rounded-full"
                src="${btn.category_icon}" 
                alt=""
            >

            <span>${btn.category}</span>
        `;

        button.className = `
            flex items-center gap-3
            border p-3 rounded-lg
        `;
      buttonContainer.appendChild(button)

    })
}
loadButton()



// banner section
const loadPets = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(res => res.json())
        .then(data => {
            displayPets(data.pets);
        })
        .catch(error => console.log(error));
};


const displayPets = (pets) => {

    const petContainer = document.getElementById('pet-container');

    petContainer.innerHTML = "";

    pets.forEach((pet) => {

        const card = document.createElement('div');

        card.innerHTML = `
            <div class="card bg-base-100 shadow-xl">
                <figure>
                    <img 
                        src="${pet.image}" 
                        alt="${pet.pet_name}"
                        class="w-full h-60 object-cover"
                    />
                </figure>

                <div class="card-body">

                    <h2 class="card-title">
                        ${pet.pet_name}
                    </h2>

                    <p>Breed: ${pet.breed || "Not available"}</p>

                    <p>Category: ${pet.category}</p>

                    <p>Gender: ${pet.gender || "Not available"}</p>

                    <p>Price: $${pet.price ?? "Not available"}</p>

                    <button class="btn btn-primary">
                        Details
                    </button>

                </div>
            </div>
        `;

        petContainer.appendChild(card);
    });
};


loadPets();