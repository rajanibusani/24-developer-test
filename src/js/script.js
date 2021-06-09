console.log("")
const text = document.getElementById("text");
const originalText = text.innerHTML;
const input = document.getElementById("input");
const button = document.getElementById("button");

// getting a random number to display a rabbit image from  images array
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rabbitsImages = ["img/rabbit-0.jpg", "img/rabbit-1.jpg", "img/rabbit-2.jpg", "img/rabbit-3.jpg", "img/rabbit-4.jpg",
    "img/rabbit-5.jpg", "img/rabbit-6.jpeg", "img/rabbit-7.jpg", "img/rabbit-8.jpg", "img/rabbit-9.jpeg", "img/rabbit-10.jpg",
    "img/rabbit-11.jpg", "img/rabbit-12.jpg", "img/rabbit-13.jpg", "img/rabbit-14.jpg", "img/rabbit-15.jpg"]

// to get a new rabbit image 
function choosePic() {
    const randomNum = getRandomInt(0, 15)
    console.log(randomNum)
    document.getElementById("image").src = rabbitsImages[randomNum];
}
window.onload = choosePic;

// highlighting search word
function highlightWord() {
    const inputValue = input.value.trim();
    if (inputValue) {
        const regexp = new RegExp(inputValue, 'gi')
        text.innerHTML = originalText.replace(regexp, `<span>${inputValue}</span>`)

    } else {
        return text.textContent;
    }
}
button.addEventListener("click", highlightWord);

// for pagination 

const articles = document.querySelectorAll(".article");

articles.forEach((article, index) => {

    article.addEventListener("click", () => {
        // console.log(item, item.textContent)

        switch (true) {
            case (Number(article.textContent) === 1):
                document.querySelectorAll(".article-text").forEach((text) => {
                    text.classList.add("hide");

                })
                console.log(article, index)
                document.querySelector("#image1").src = rabbitsImages[index];
                document.getElementById("first").classList.remove("hide");
                break;
            case (Number(article.textContent) === 2):
                document.querySelectorAll(".article-text").forEach((text) => {
                    text.classList.add("hide")
                    // console.log(rabbitsImages[index], index)
                })
                console.log(article, index, document.querySelector(".article-text img").src)
                console.log(rabbitsImages[index])
                document.querySelector("#image2").src = rabbitsImages[2]
                document.getElementById("second").classList.remove("hide");
                break;
            case (Number(article.textContent) === 3):
                document.querySelectorAll(".article-text").forEach((text) => {
                    text.classList.add("hide")
                })
                document.querySelector("#image3").src = rabbitsImages[index];
                document.getElementById("three").classList.remove("hide");
                break;
            case (Number(article.textContent) === 4):
                document.querySelectorAll(".article-text").forEach((text) => {
                    text.classList.add("hide")
                })
                document.querySelector("#image4").src = rabbitsImages[index];
                document.getElementById("four").classList.remove("hide");
                break;
            case (Number(article.textContent) === 5):
                document.querySelectorAll(".article-text").forEach((text) => {
                    text.classList.add("hide")
                })
                document.querySelector("#image5").src = rabbitsImages[index];
                document.getElementById("five").classList.remove("hide");
                break;
            case (Number(article.textContent) === 6):
                document.querySelectorAll(".article-text").forEach((text) => {
                    text.classList.add("hide")
                })
                document.querySelector("#image6").src = rabbitsImages[index];
                document.getElementById("six").classList.remove("hide");
                break;
            case (Number(article.textContent) === 7):
                document.querySelectorAll(".article-text").forEach((text) => {
                    text.classList.add("hide")
                })
                document.querySelector("#image7").src = rabbitsImages[index];
                document.getElementById("seven").classList.remove("hide");
                break;
            case (Number(article.textContent) === 8):
                document.querySelectorAll(".article-text").forEach((text) => {
                    text.classList.add("hide")
                })
                document.querySelector("#image8").src = rabbitsImages[index];
                document.getElementById("eight").classList.remove("hide");
                break;
            case (Number(article.textContent) === 9):
                document.querySelectorAll(".article-text").forEach((text) => {
                    text.classList.add("hide")
                })
                document.querySelector("#image9").src = rabbitsImages[index];
                document.getElementById("nine").classList.remove("hide");
                break;
            case (Number(article.textContent) === 10):
                document.querySelectorAll(".article-text").forEach((text) => {
                    text.classList.add("hide")
                })
                document.querySelector("#image10").src = rabbitsImages[index];
                document.getElementById("ten").classList.remove("hide");
                break;
            case (Number(article.textContent) === 11):
                document.querySelectorAll(".article-text").forEach((text) => {
                    text.classList.add("hide")
                })
                document.querySelector("#image11").src = rabbitsImages[index];
                document.getElementById("eleven").classList.remove("hide");
                break;
            case (Number(article.textContent) === 12):
                document.querySelectorAll(".article-text").forEach((text) => {
                    text.classList.add("hide")
                })
                document.querySelector("#image12").src = rabbitsImages[index];
                document.getElementById("twelve").classList.remove("hide");
                break;
            case (Number(article.textContent) === 13):
                document.querySelectorAll(".article-text").forEach((text) => {
                    text.classList.add("hide")
                })
                document.querySelector("#image13").src = rabbitsImages[index];
                document.getElementById("thirteen").classList.remove("hide");
                break;
            case (Number(article.textContent) === 14):
                document.querySelectorAll(".article-text").forEach((text) => {
                    text.classList.add("hide")
                })
                document.querySelector("#image14").src = rabbitsImages[index];
                document.getElementById("fourteen").classList.remove("hide");
                break;
            case (Number(article.textContent) === 15):
                document.querySelectorAll(".article-text").forEach((text) => {
                    text.classList.add("hide")
                })
                document.querySelector("#image15").src = rabbitsImages[index];
                document.getElementById("fifteen").classList.remove("hide");
                break;
        }
    })
})