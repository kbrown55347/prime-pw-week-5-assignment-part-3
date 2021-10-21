console.log('***** Music Collection *****')

let collection = [];

console.log(`******** In addToCollection ********`);

function addToCollection(title, artist, yearPub, tracks) {
  let newAlbum = {
    title: title,
    artist: artist,
    yearPub: yearPub,
    tracks: tracks,
  }
  collection.push(newAlbum);
  return newAlbum;
}

console.log('Album added:', addToCollection('reputation', 'Taylor Swift', 2017,
['...Ready for It?: 3:28', 'End Game: 4:04', 'I Did Something Bad: 3:58']));
console.log('Album added:', addToCollection('Fearless', 'Taylor Swift', 2008,
['Fearless: 4:03', 'Fifteen: 4:55', 'Love Story: 3:55']));
console.log('Album added:', addToCollection('Let It Be', 'The Beatles', 1968,
['Two Of Us: 3:37', 'Dig A Pony: 3:55', 'Across The Universe: 3:48']));
console.log('Album added:', addToCollection('We Sing. We Dance. We Steal Things.', 'Jason Mraz', 2008,
['Make It Mine: 3:08', "I'm Yours: 4:03", 'Lucky: 3:10']));
console.log('Album added:', addToCollection('Waiting for My Rocket to Come', 'Jason Mraz', 2002,
['You and I Both: 3:39', "I'll Do Anything: 3:12", 'Who Needs Shelter: 3:12']));
console.log('Album added:', addToCollection('No Strings Attached', 'NSYNC', 2000,
['Bye Bye Bye: 3:20', "It's Gonna Be Me: 3:12", 'Space Cowboy: 4:23']));

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
