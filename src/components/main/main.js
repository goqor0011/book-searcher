import {searchResult,load,searchProp} from "../../scripts/scripts.js";

let cards = await searchResult(searchProp)

const main =(context)=> {
    let main = `<main>
                    <button id="goToMain" class="main-btn"></button>
                    <div id='content' class='content'></div>
                </main>`

    context.insertAdjacentHTML("beforeend", main)

    load(cards)

    $('#goToMain').onclick = () => { load(cards) }

    return ''
}

export default main