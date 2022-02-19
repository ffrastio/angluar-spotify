import { IArtists } from "../interfaces/IArtists";


export function newArtist(): IArtists{
    return {
        id: '',
        imageUrl: '',
        name: ''
    }
}