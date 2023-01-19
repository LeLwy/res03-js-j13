import { Nav } from './Nav.js'

let Header = {  
    
    data() {  
        
        return {
            
            values : [
                
                "Accueil",
                "À propos",
                "Contact"
                
            ]
        }
    },
    
    components : {
        
      Nav  
    },
    
    template: `  
        <header>
            <Nav :values="this.values"/>
        </header>
    `
};  
  
export { Header };