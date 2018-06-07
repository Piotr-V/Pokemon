import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from './pokemons.service';

@Component({
    selector: 'list-pokemon',
    templateUrl: './app/pokemons/list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit {

    private pokemons: Pokemon[];

    constructor(private router: Router, private pokemonsService: PokemonsService) { 
        
        // let pokemonsService = new PokemonsService(); SURTOUT A NE PAS FAIRE !!
        
        // 1. Le composant doit savoir comment créer le pkmnServ: si on modifie donc le constructeur par la suite,
        // on devra retrouver tous les composants qui instancient la classe service pour les modifier =ment.
        // 2. On créé une nvelle instance du service à chaque fois qu'on utilise le mot clé "new".
        // 3. Enfin, quand on dev un service, le consommateur du serv (component ou autre element) ne doit pas
        // savoir comment fonctionne le serv de l'intérieur: serv = boite noire prête à l'emploi.
        // SOLUCE: on injecte le service grace au provider. Angular nous garantit que l'instance du serv est unique
        // à travers tte l'app. 
    }

    ngOnInit(): void {
        this.pokemons = this.pokemonsService.getPokemons();
    }

    selectPokemon(pokemon: Pokemon): void {
        console.log('Vous avez selectionné ' + pokemon.name);
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }

}
