import { IArtists } from "../interfaces/IArtists";
import { IMusic } from "../interfaces/IMusic";


export function newArtist(): IArtists{
    return {
        id: '',
        imageUrl: '',
        name: ''
    }
}

export function newMusic(): IMusic{
    return{
        id:'',
        album: {
            id:'',
            imageUrl:'',
            name:'',
        },
        artist:[],
        tempo:'',
        title:''
    }
}