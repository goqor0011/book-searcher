const bar = ()=>{
    const bar = `<div class="header__bar"> 
                     <input id="search" type="search" class="header__bar__input" autocomplete="off">
                     <input id="submit_btn" type="submit" class="header__bar__submit-btn" value="SEARCH">
                     <div id="search_suggestions" class="header__bar__suggestions">
                        <select id="search_suggestions_selects" hidden></select> 
                    </div>
                </div>
    `

    return bar
}

export default bar