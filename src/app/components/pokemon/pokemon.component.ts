import { Component, OnInit, Input } from '@angular/core';

import { MyPokemonsService } from '../../services/my-pokemons.service';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
    selector: 'poke-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
    @Input() pokemon: Pokemon;
    @Input() enableToggle: boolean;

    constructor(private _myPokemonsService: MyPokemonsService) {}

    ngOnInit(): void {}

    toggleCapture(name) {
        const myPokemons = this._myPokemonsService.get();
        const index = myPokemons.indexOf(name);

        if (index > -1) {
            myPokemons.splice(index, 1);
        } else {
            myPokemons.push(name);
        }

        this.pokemon.captured = !this.pokemon.captured;
        this._myPokemonsService.store(myPokemons);
    }
}
