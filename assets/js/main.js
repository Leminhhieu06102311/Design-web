import { serviceHTML } from "./service/service.js"
import { homeHTML } from "./home/home.js"
import { priceHTML } from "./price/price.js"
import { projectHTML } from "./project/project.js"
import { transformNav } from "./navigation/navigation.js"
import { clickItem } from "./navigation/navigation.js"
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// call function clickitem navigation
clickItem()
var renderHTML = () => {
    serviceHTML()
    homeHTML()
    priceHTML()
    projectHTML()
}
renderHTML()
// click nav 
transformNav()