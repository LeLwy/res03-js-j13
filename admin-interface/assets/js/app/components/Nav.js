let Nav = {  
    
    props : [  
        
        "navListsContent" 
    ],
    
    data() {
        
        return {
            
            open : false
        }
    },
    
    methods : {  
        
        openList () {  
            
            if(!this.open){
                
                this.open = true  
            }else{
                
                this.open = false
            }
        }  
    },
    
    template: `  
        <nav>
            <h2 @click="this.openList()">{{ navListsContent.title }}<span aria-hidden="true" class="bi-caret-down"></span></h2>
            <ul v-if="this.open === false" class="d-none">
                <li v-for="link in navListsContent.links">{{ link }}</li> 
            </ul>
            <ul v-else>
                <li v-for="link in navListsContent.links">{{ link }}</li> 
            </ul>
        </nav>
    `
}
  
export { Nav }


/*
<nav>
    <h2>utilisateurs<span aria-hidden="true" class="bi-caret-down"></span></h2>
    <ul class="d-none">
        <li><a href="#">liste des utilisateurs</a></li>
        <li><a href="#">ajouter un utilisateur</a></li>
        <li><a href="#">statistiques des utilisateurs</a></li>
    </ul>
</nav>
<nav>
    <h2>produits<span aria-hidden="true" class="bi-caret-down"></span></h2>
    <ul class="d-none">
        <li><a href="#">liste des produits</a></li>
        <li><a href="#">ajouter un produit</a></li>
        <li><a href="#">statistiques des produits</a></li>
    </ul>
</nav>
<nav>
    <h2>catégories<span aria-hidden="true" class="bi-caret-down"></span></h2>
    <ul class="d-none">
        <li><a href="#">liste des catégories de produits</a></li>
        <li><a href="#">ajouter une catégorie de produits</a></li>
    </ul>
</nav>
*/