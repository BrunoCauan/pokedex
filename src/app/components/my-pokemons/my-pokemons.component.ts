import { Component, OnInit } from '@angular/core';

import { MyPokemonsService } from '../../services/my-pokemons.service';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'poke-my-pokemons',
  templateUrl: './my-pokemons.component.html'
})
export class MyPokemonsComponent implements OnInit {
    public pokemons: Pokemon[] = [];

    constructor(private _pokemonService: PokemonService, private _myPokemonsService: MyPokemonsService) {}

    ngOnInit(): void {
        this._myPokemonsService.get().map(pokemon => {
            this._pokemonService.get(pokemon).subscribe(pokemon => { 
                this.pokemons.push(pokemon);
                this.pokemons.sort((a, b) => a.id - b.id);
            });
        });
    }
}
