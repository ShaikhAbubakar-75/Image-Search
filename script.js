const accessKey = "Y1Gy-NtK5Rl9zAlCre_XxbZpy6uIhq9qcEB12aqNvlU"

const formEl = document.querySelector('form')
const searchInput = document.querySelector('#search-input')
const searchButton = document.querySelector('#search-button')

const imageContainer = document.querySelector('.search-result')

const showMoreBtn = document.querySelector('#more-button')

let inputData = ''
let page = 1

async function searchImage() {
    inputData = searchInput.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

    const res = await fetch(url)
    const data = await res.json()

    const results = data.results

    if (page === 1) {
        imageContainer.innerHTML = ''
    }

    results.map((result) => {
        const imageBox = document.createElement('div')
        imageBox.classList.add('image')

        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.urls.alt_description

        const link = document.createElement('a')
        link.href = result.links.html
        link.target = '_blank'
        link.innerText = result.alt_description

        imageBox.appendChild(image)
        imageBox.appendChild(link)
        imageContainer.appendChild(imageBox)
    })
    page++
    if (page > 1) {
        showMoreBtn.style.display = 'block'
    }
}

formEl.addEventListener('submit',(e)=>{
    e.preventDefault()
    page = 1
    searchImage()
})
showMoreBtn.addEventListener('click',()=>{
    searchImage()
})

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1000,
    elasticity: 600,
    delay: (el, i) => 360 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });