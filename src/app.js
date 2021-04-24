import footer from './components/footer/footer.js'
import main from "./components/main/main.js";
import header from "./components/header/header.js";
import bookPage from "./components/bookPage/bookPage.js";



const app = (context) =>{
    header(context)

    main(context)

    footer(context)


}

export default app