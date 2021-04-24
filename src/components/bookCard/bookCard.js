const card = (prop)=>{
    const card = `
                    <div class="card">
                        <a href="${prop.id}" class="card__link link" id="${prop.id}">
                             <div class="card__header">
                                <img class="card__image" src="${prop.volumeInfo?.imageLinks?.thumbnail || 'static/img/empty_thumbnail.gif'}" alt="${prop.volumeInfo.title}">
                             </div>
                             <hr class="card__hr">
                             <div class="card__body">
                                <h3>${prop.volumeInfo.title}</h3>
                                <p>${prop.volumeInfo.description || prop.volumeInfo.title}</p>
                            </div>
                            <hr class="card__hr">
                            <div class="card__footer">
                              <p> <em>${prop.volumeInfo.authors || 'No author'}</em></p>
                            </div>  
                        </a> 
                   </div>
                `


    return card
}



export default card