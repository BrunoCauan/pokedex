import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { MyPokemonsService } from './my-pokemons.service';
import { Pokemon } from '../models/pokemon.model';

@Injectable({ providedIn: 'root' })
export class PokemonService {
    constructor(private httpClient: HttpClient, private _myPokemonsService: MyPokemonsService) {}

    list() {
        return this.httpClient.get(environment.API_URL + '/pokemon?limit=151')
            .pipe(map((response: any) => response.results.map(pokemon => pokemon.name)));
    }
    
    get(name: string) {
        return this.httpClient.get(environment.API_URL + '/pokemon/' + name)
            .pipe(
                map((response: any) => {
                    const { id, types } = response;

                    const pokemon: Pokemon = {
                        id,
                        name,
                        image: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
                        types: types.map(current => current.type.name),
                        captured: !!this._myPokemonsService.get().find(current => current === name)
                    }
                    
                    return pokemon;
                }
            ));
    }
}
