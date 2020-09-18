import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pokemonId'})
export class PokemonIdPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return '#' + String(value).padStart(3, '0');
    }
}