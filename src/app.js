import footer from './components/footer/footer.js'
import main from "./components/main/main.js";
import header from "./components/header/header.js";

const app = (context) =>{
    header(context)
    main(context)
    footer(context)
}

export default app