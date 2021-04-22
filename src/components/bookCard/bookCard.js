const card = (prop)=>{
    const card = `
                    <div class="card">
                        <a href="https://books.google.am/books?id=${prop.id}&printsec=frontcover&#v=onepage&q&f=false" class="card__link">
                             <div class="card__header">
                                <img class="card__image" src="${prop.volumeInfo.imageLinks.thumbnail}" alt="${prop.volumeInfo.title}">
                             </div>
                             <hr class="card__hr">
                             <div class="card__body">
                                <h3>${prop.volumeInfo.title}</h3>
                                <p>${prop.volumeInfo.description}</p>
                            </div>
                            <hr class="card__hr">
                            <div class="card__footer">
                              <p> <em>${prop.volumeInfo.authors ? prop.volumeInfo.authors[0] : 'No author'}</em></p>
                            </div>  
                        </a> 
                   </div>
                `
    return card
}

export default card