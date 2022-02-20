import { addMilliseconds, format } from "date-fns";
import { IArtists } from "../interfaces/IArtists";
import { IMusic } from "../interfaces/IMusic";
import { IPlaylist } from "../interfaces/IPlaylist";
import { IUser } from "../interfaces/IUser";
import { newMusic } from "./factories";


export function SpotifyUserParams(user: SpotifyApi.CurrentUsersProfileResponse): IUser{
    return{
        id: user.id,
        name: user.display_name,
        imageUrl: user.images.pop().url
    }
}

export function SpotifyPlaylistParams(playlist: SpotifyApi.PlaylistObjectSimplified): IPlaylist{
    return{
        id: playlist.id,
        name: playlist.name,
        imageUrl: playlist.images.pop().url
    };
}
export function SpotifyArtistsParams(artist: SpotifyApi.ArtistObjectFull): IArtists{
    return{
        id: artist.id,
        imageUrl: artist.images.sort((a,b) => a.width - b.width).pop().url,
        name: artist.id
    }
}

export function SpotifyMusicParams(music: SpotifyApi.TrackObjectFull): IMusic{
    
    if(!music)
    return newMusic()
    
    const musicMinute = (ms: number)=>{
        const data = addMilliseconds(new Date(0), ms);
        return format(data, 'mm:ss');
    }
    return{
        id: music.uri,
        title: music.name,
        album:{
            id: music.id,
            imageUrl: music.album.images.shift().url,
            name: music.name
        },
        artist: music.artists.map(artista =>({
            id: artista.id,
            name: artista.name,
        })),
        tempo: musicMinute(music.duration_ms),
    }
}