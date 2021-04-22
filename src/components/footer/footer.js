const footer = (context)=>{

    const footer = `<footer> footer content </footer>`

    context.insertAdjacentHTML("beforeend", footer)
    return ''
}
export default footer
