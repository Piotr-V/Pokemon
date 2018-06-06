import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'pokemon-app',
  templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit { 
  private pokemons: Pokemon[];

  private title: string = "Liste de plusieurs Pokémons";

  ngOnInit() {
    this.pokemons = POKEMONS;
  }

  selectPokemon (pokemon: Pokemon) {
    alert("vous avez sélectionné le Pokemon " + pokemon.name);
  }

}