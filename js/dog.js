console.log("Dog JavaScript is working!");

const randomDogButton = document.getElementById("random-dog-button");
const threeDogsButton = document.getElementById("three-dogs-button");
const dogContainer = document.getElementById("dog-container");

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

threeDogsButton.addEventListener("click", function () {
    fetch("https://dog.ceo/api/breeds/image/random/3")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            dogContainer.innerHTML = "";

            data.message.forEach(function (dog) {
                const dogImage = document.createElement("img");
                dogImage.src = dog;
                dogImage.alt = "A random dog";

                dogContainer.appendChild(dogImage);
            });
        })
        .catch(function () {
            dogContainer.innerHTML = "<p>Sorry, we couldn't find the dogs.</p>";
        });
});
