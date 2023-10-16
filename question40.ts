/*Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return a Object
containing these two pieces of information. */

function makealbum(artistname:string,albumtitle:string){
    return {
        artistname,
        albumtitle,        
    }
}
console.log(makealbum("Artist","Albumtitle"))
/*Use the function to make three dictionaries representing different albums. Print each 
return value to show that Objects are storing the album information correctly. Add an 
optional parameter to make_album() that allows you to store the number of tracks on an album.
If the calling line includes a value for the number of tracks, add that value to the album’s
Object. Make at least one new function call that includes the number of tracks on an album.*/ 
interface Album{
    artist: string;
    title: string;
    tracks?: number; // Optional parameter for the number of tracks
}
function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist,
        title,
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Print each album's information
console.log(make_album("Allama Iqbal", "Shiqwa Jwab Shiqwa", 10))// Includes the number of tracks
console.log(make_album("Ustad Allah Bux", "Fantasy "))// Default: no number of tracks
console.log(make_album("Ed Sheeran", "Divide", 20))// Includes the number of tracks
