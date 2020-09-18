import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
    selector: 'poke-pokemon-list',
    templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent implements OnInit {
    public pokemons: Pokemon[] = [];

    constructor(private _pokemonService: PokemonService) {}

    ngOnInit(): void {
        this._pokemonService.list()
            .subscribe(pokemons => {
                pokemons.map(pokemon => {
                    this._pokemonService.get(pokemon).subscribe(pokemon => { 
                        this.pokemons.push(pokemon);
                        this.pokemons.sort((a, b) => a.id - b.id);
                    });
                })
            });
    }
}
