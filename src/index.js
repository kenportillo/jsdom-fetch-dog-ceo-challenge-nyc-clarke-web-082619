console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', function() {
    fetchDogImg();
    fetchDogBreed();

    let selectChange = document.getElementById('breed-dropdown')

    selectChange.addEventListener('change', function(event){
        let breedList = document.querySelectorAll('li')
        breedList.forEach(breed => {
            if (event.target.value === breed.innerText[0]){
                // the list to be updated to only show breeds that start with the letter
                breed.style.display = 'block'
            }
            else {
                breed.style.display = 'none'
            }

        })
    })
})

function fetchDogImg(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
	fetch(imgUrl)
    .then(resp => resp.json())
	.then(json => addDogImages(json) );
}

function addDogImages(json){
    const imageContainer = document.getElementById('dog-image-container')
    json.message.forEach( dog =>{
        const newDog = document.createElement('img')
        newDog.src = dog;
        imageContainer.appendChild(newDog)
    })
}


function fetchDogBreed(){
    const breedUrl = "https://dog.ceo/api/breeds/list/all"
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
        json = Object.keys(json.message);
        addDogBreed(json);
    });
}

function addDogBreed(breed){
    const breedContainer = document.getElementById('dog-breeds')
    breed.forEach( breed => {
        const newBreed = document.createElement('li')
        newBreed.innerText = breed;
        newBreed.style.cursor = 'pointer';
        breedContainer.appendChild(newBreed)
        newBreed.addEventListener('click', function(event){
            event.target.style.color = 'blue'
        })
    })
}


