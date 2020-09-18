import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPokemonsComponent } from './components/my-pokemons/my-pokemons.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/my-pokemons', pathMatch: 'full' },
    { path: 'my-pokemons', component: MyPokemonsComponent },
    { path: 'pokedex', component: PokemonListComponent },
    { path: '**', redirectTo: '/my-pokemons' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }