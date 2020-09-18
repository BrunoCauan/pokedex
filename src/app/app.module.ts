import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule  } from './app.routing';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

import { PokemonIdPipe } from './pipe/pokemon-id.pipe';
import { MyPokemonsComponent } from './components/my-pokemons/my-pokemons.component';

@NgModule({
    declarations: [AppComponent, PokemonListComponent, PokemonComponent, PokemonIdPipe, MyPokemonsComponent],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
