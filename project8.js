const textArea = document.querySelector("#text")
const nextBtn = document.querySelector("#btn")

const url = 'https://api.api-ninjas.com/v1/dadjokes';
const options = {
    headers: {
        'X-Api-Key': 'DYpjfqjIf1ji0BVPLasKCQ==7nnITdeJ5M6W7ORt',
    }
};


fetch(url, options)
    .then((resp) => resp.json())
    .then((value) => {
        textArea.value = value[0].joke
    })


nextBtn.addEventListener("click",function(e){
    e.preventDefault()
    window.location.reload()
})