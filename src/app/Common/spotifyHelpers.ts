import { IArtists } from "../interfaces/IArtists";
import { IPlaylist } from "../interfaces/IPlaylist";
import { IUser } from "../interfaces/IUser";


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