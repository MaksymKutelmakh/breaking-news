import { Deserializable } from './deserializable.model';
import { PokemonModel } from './pokemon.model';

export class PokemonListModel implements Deserializable<PokemonListModel> {

    nextPage: string;
    previous: string;
    pokemonList: PokemonModel[];

    deserialize(input: any): PokemonListModel {
        Object.assign(this, input);
        this.nextPage = input.next;
        this.previous = input.previous;
        if (input.results.length) {
            this.pokemonList = input.results.map(p => new PokemonModel().deserialize(p));
        }
        return this;
    }
}

