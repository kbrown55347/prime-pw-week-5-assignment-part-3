console.log('***** Music Collection *****')

let collection = [];

console.log(`******** In addToCollection ********`);

function addToCollection(title, artist, yearPub) {
  let newAlbum = {
    title: title,
    artist: artist,
    yearPub: yearPub
  }
  collection.push(newAlbum);
  return newAlbum;
}

console.log('Album added:', addToCollection('reputation', 'Taylor Swift', 2017));
console.log('Album added:', addToCollection('Fearless', 'Taylor Swift', 2008));
console.log('Album added:', addToCollection('Let It Be', 'The Beatles', 1968));
console.log('Album added:', addToCollection('We Sing. We Dance. We Steal Things.', 'Jason Mraz', 2008));
console.log('Album added:', addToCollection('Waiting for My Rocket to Come', 'Jason Mraz', 2002));
console.log('Album added:', addToCollection('No Strings Attached', 'NSYNC', 2000));

console.log('Check out my collection:', collection);

console.log(`******** In showCollection ********`);

function showCollection(array) {
  console.log(`Number of albums: ${array.length}`);
  for (let info of array) {
    console.log(`${info.title} by ${info.artist}, published in ${info.yearPub}`);
  }
}

showCollection(collection);

console.log(`******** In findByArtist ********`);

function findByArtist(artist) {
  console.log(`Albums by ${artist}`);
  let artistList = [];
  for (let item of collection) {
    if (artist === item.artist) {
      artistList.push(item);
    }
  }
  return artistList;
}

console.log(findByArtist('Taylor Swift'));
console.log(findByArtist('Jimi Hendrix'));
console.log(findByArtist('Jason Mraz'));
console.log(findByArtist('The Beatles'));

console.log(`******** Stretch Goals ********`);

function search(artist, yearPub) {
  console.log(`Searching for ${artist} and ${yearPub}`);
  let list = [];
  for (let item of collection) {
    if (artist === item.artist && yearPub === item.yearPub) {
      list.push(item);
    } else if (artist === undefined || yearPub === undefined) {
      return collection;
    }
  }
  return list;
}

console.log(search('Taylor Swift', 2017));
console.log(search('Luke Bryan', 2000));
console.log(search('Jason Mraz'));
console.log(search());


addToCollection = function(title, artist, yearPub, tracks) {
  let newAlbum = {
    title: title,
    artist: artist,
    yearPub: yearPub,
    tracks: []
  }
  collection.push(newAlbum);
  return newAlbum;
}
