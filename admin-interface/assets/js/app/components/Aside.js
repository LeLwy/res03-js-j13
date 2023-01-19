import { Nav } from "./Nav.js";

let Aside = {  
    
    data() {
        
        return {
            
            navListsContents : [
                	{
                		title : "Utilisateurs",
                		links : [
                			"Liste des utilisateurs",
                			"Ajouter un utilisateur",
                			"Statistiques utilisateurs"
                		]
                	},
                	
                	{
                		title : "Produits",
                		links : [
                			"Liste des produits",
                			"Ajouter un produit",
                			"Statistiques produits"
                		]
                	},
                	
                	{
                		title : "Catégories",
                		links : [
                			"Liste des catégories de produit",
                			"Ajouter une catégorie de produit"
                		]
                	},
                ]
            }
        },  
    
    components : {
        
      Nav  
    },
    
    
    template: `  
        <aside>
            <Nav v-for="navListsContent in this.navListsContents" :navListsContent="navListsContent" />
        </aside>
    `
}
  
export { Aside }