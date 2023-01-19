let Nav = {  
    
    props : [  
        
        "values" 
    ],  
    
    template: `  
        <nav>
            <ul>
                <li v-for="value in values">{{ value }}</li> 
            </ul>
        </nav>
    `
}
  
export { Nav }