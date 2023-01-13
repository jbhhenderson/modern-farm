export const harvestedFoods = (foodArray) => {
    let htmlString = ''

    for (const food of foodArray) {
        htmlString += `<section class="plant">${food.type}</section>`
    }

    const parentHTMLElement = document.querySelector(".container")
    console.log(parentHTMLElement.innerHTML = htmlString)

}