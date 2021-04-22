const searchBook = async (word)=>{
    let res=''
    await fetch(`https://www.googleapis.com/books/v1/volumes?q=${word}`).then(async res=> await res.json()).then(data => res = data)


    console.log('res',res)
    return res
}

export default searchBook

