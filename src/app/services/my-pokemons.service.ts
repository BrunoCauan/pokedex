import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MyPokemonsService {
    constructor() {}

    get () {
        const myPokemons = JSON.parse(localStorage.getItem('my-pokemons'));
        
        if (!myPokemons) {
            this.store([]);
        }
        
        return myPokemons;
    }

    store (myPokemons: string[]) {
        localStorage.setItem('my-pokemons', JSON.stringify(myPokemons));
    }
}
