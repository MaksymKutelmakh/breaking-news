import { Deserializable } from './deserializable.model';

export class PokemonModel implements Deserializable<PokemonModel> {

    id: number;
    name: string;
    details: string;

    deserialize(input: any): PokemonModel {
        Object.assign(this, input);
        this.details = input.url;
        return this;
    }
}

