const breedsButton = document.getElementById("breeds-button");
const randomDogButton = document.getElementById("random-dog-button");
const dogContainer = document.getElementById("dog-container");

breedsButton.addEventListener("click", function () {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            dogContainer.innerHTML = "<h2>Dog Breeds</h2>";

            const breedsList = document.createElement("ul");

            for (const breed in data.message) {
                const breedItem = document.createElement("li");
                breedItem.textContent = breed;
                breedsList.appendChild(breedItem);
            }

            dogContainer.appendChild(breedsList);
        })
        .catch(function () {
            dogContainer.innerHTML = "<p>Sorry, we couldn't find the dog breeds.</p>";
        });
});

randomDogButton.addEventListener("click", function () {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            dogContainer.innerHTML = "";

            const dogImage = document.createElement("img");
            dogImage.src = data.message;
            dogImage.alt = "A random dog";

            dogContainer.appendChild(dogImage);
        })
        .catch(function () {
            dogContainer.innerHTML = "<p>Sorry, we couldn't find a dog.</p>";
        });
});
