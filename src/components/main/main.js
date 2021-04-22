import card from "../bookCard/bookCard.js";
import searchBook from "../../scripts/scripts.js";



// const state = await searchBook('j5iJQgAACAAJ')
const state = await searchBook('www')

let cards = !state.error ? state.items.map((i)=>card(i)).join('') : '404'

const main =(context)=> {
    const main = `<main> ${ cards } </main>`

    context.insertAdjacentHTML("beforeend", main)

    return ''
}

export default main