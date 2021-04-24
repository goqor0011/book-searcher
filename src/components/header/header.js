import bar from './search_bar/searchBar.js'
import {load,searchProp,searchResult} from "../../scripts/scripts.js";

const header = (context)=>{

    const header = `<header> ${bar()} </header>`

    context.insertAdjacentHTML("beforeend", header)

    document.getElementById('submit_btn').onclick = async () => {
        let searchValue = document.getElementById('search').value
        searchProp.q = searchValue || 'top'

        let cards = await searchResult(searchProp)

        load(cards)

        $('#goToMain').onclick = () => { load(cards) }
    }

    return ''
}
export default header