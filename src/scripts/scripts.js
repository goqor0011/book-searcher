import bookPage from "../components/bookPage/bookPage.js";
import card from "../components/bookCard/bookCard.js";

const searchBook = async (prop)=>{
    return await fetch(`https://www.googleapis.com/books/v1/volumes?q=${prop.q}&${prop.searchLink}`)
        .then( res=> res.json())
        .then(data =>  data)
}

function load(cards){

    let content = $('#content')
    changeBtnStyle(false)
    $('main').lastElementChild.innerHTML = cards

    content.style.gridTemplateColumns = ' repeat(auto-fill,300px)'
    content.style.justifyContent = 'space-around'

    Array.from(document.getElementsByClassName('link')).forEach(i=> i.onclick = link)
}

function link(e){
    e.preventDefault()

    changeBtnStyle(true)

    content.style.gridTemplateColumns = 'none'
    content.style.justifyContent = 'unset'

    $('main').lastElementChild.innerHTML = bookPage(1)
    new google.books.Viewer(document.getElementById("viewerCanvas")).load(this.id.toString())
}

function changeBtnStyle(show){
    let mainBtn = $('.main-btn')

    if(show){
        mainBtn.innerHTML = '&#60'
        mainBtn.style.zIndex = '1'
        mainBtn.style.backgroundColor = '#e8dcab'
        mainBtn.style.border = 'none'

        mainBtn.style.borderTop = '2px solid black'
        mainBtn.style.borderBottom = '2px solid black'

        mainBtn.onmouseover = () => {
            mainBtn.style.backgroundColor = '#d6c47a'
        }

        mainBtn.onmouseleave = () => {
            mainBtn.style.backgroundColor = '#e8dcab'
        }

    } else {
        mainBtn.innerHTML = ''
        mainBtn.style.zIndex = '-1'
        mainBtn.style.backgroundColor = 'cornsilk'
        mainBtn.style.border = 'none'

        mainBtn.onmouseover = ()=>{}

        mainBtn.onmouseleave = ()=>{}
    }

}

const searchProp ={
    q: 'top',
    startIndex: 0,
    maxResults:40,
    filter:'partial',
    searchLink:''
}

function makeQueryLink(searchProp){
    searchProp.searchLink = Object.entries(searchProp).filter((k)=> k[0]!=='q' && k[1]).join('&').replaceAll(',','=')
}

function clearSearchLink(searchProp){
    searchProp.searchLink = ''
}

function makeCards(result){
    return !result.error ? result.totalItems > 0 ? result.items.map((i) => card(i)).join('') : 'Book Not Found' : '404'
}

 async function searchResult(search){
    makeQueryLink(search)

    let result = await searchBook(search)

    clearSearchLink(search)

    return makeCards(result)
}

export {searchResult,load,searchProp}

