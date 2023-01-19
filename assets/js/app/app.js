import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";  
import { Footer } from "./components/Footer.js";  
  
let App = {  
    
    components : {  
        
      Header, 
      Main, 
      Footer  
    },  
    
    template: `  
    <Header />
    <Main />  
    <Footer />
    `  
};  
  
export { App };