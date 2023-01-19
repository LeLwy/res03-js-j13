import { Aside } from "./components/Aside.js";
  
let App = {  
    
    components : {  
        
      Aside 
    },  
    
    template: `  
    <header>
        <h1 class="d-none">Interface administrateur</h1>
        <section id="header-logo-section" class="open">
            <figure>
                <img src="https://res03.sites.3wa.io/assets/files/js/j5/demo/assets/logo.svg" alt="Le logo du site, une explosion du pointillés bleus">
                <figcaption class="d-none">
                    <p>Le logo du site.</p>
                </figcaption>
            </figure>
        </section>
        <nav>
            
        </nav>
    </header>
    <main> 
    <Aside />
        <button id="show-aside-btn"><span class="bi-chevron-bar-left"></span></button>
        <section id="users-list">
            <h2>Liste des utilisateurs</h2>
            <section>
                <h3 class="d-none">Ajouter un utilisateur</h3>
                <button id="add-btn"><span class="bi-person-fill-add"></span>Ajouter un utilisateur</button>
            </section>
            <section id="users-data">
                <h3 class="d-none">Données des utilisateurs</h3>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nom</th>
                            <th>Age</th>
                            <th>Actif</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </section>
        </section>
        <section id="delete-modal" class="d-none">
            <h3 class="d-none">Fenêtre de confirmation</h3>
            <section id="confirm-delete">
                <h3>Êtes-vous sûr-e de vouloir supprimer cet utilisateur ?</h3>
                <h4></h4>
                <section id="modal-btns">
                    <h4 class="d-none">Confirmation de suppression</h4>
                    <button id="modal-cancel-btn">Annuler</button>
                    <button id="modal-delete-btn">Supprimer</button>
                </section>
            </section>
        </section>
    </main>
    <footer></footer>
    `  
};  
  
export { App };
