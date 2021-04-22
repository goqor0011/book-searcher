import bar from './search_bar/searchBar.js'

const header = (context)=>{

    const header = `<header> ${bar()} </header>`

    context.insertAdjacentHTML("beforeend", header)

    return ''
}
export default header