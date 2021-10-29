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


// Only added a few tracks from each album
let reputationTracks = [{
    name: '...Ready for It?',
    duration: '3:28',
  },
  {
    name: 'End Game',
    duration: '4:04',
  },
  {
    name: 'I Did Something Bad',
    duration: '3:58',
  },
]

let fearlessTracks = [{
    name: 'Fearless',
    duration: '4:03',
  },
  {
    name: 'Fifteen',
    duration: '4:55',
  },
  {
    name: 'Love Story',
    duration: '3:55',
  },
]

let letItBeTracks = [{
    name: 'Two Of Us',
    duration: '3:37',
  },
  {
    name: 'Dig a Pony',
    duration: '3:55',
  },
  {
    name: 'Across The Universe',
    duration: '3:48',
  },
]

let weSingTracks = [{
    name: 'Make It Mine',
    duration: '3:08',
  },
  {
    name: "I'm Yours",
    duration: '4:03',
  },
  {
    name: 'Lucky',
    duration: '3:10',
  },
]

let waitingForTracks = [{
    name: 'You and I Both',
    duration: '3:39',
  },
  {
    name: "I'll Do Anything",
    duration: '3:12',
  },
  {
    name: "The Remedy (I Won't Worry)",
    duration: '4:16',
  },
]

let noStringsTracks = [{
    name: 'Bye Bye Bye',
    duration: '3:20',
  },
  {
    name: "It's Gonna Be Me",
    duration: '3:12',
  },
  {
    name: 'Space Cowboy',
    duration: '4:23',
  },
  {
    name: 'Just Got Paid',
    duration: '4:10',
  },
]

console.log('Album added:', addToCollection('reputation', 'Taylor Swift', 2017, reputationTracks));
console.log('Album added:', addToCollection('Fearless', 'Taylor Swift', 2008, fearlessTracks));
console.log('Album added:', addToCollection('Let It Be', 'The Beatles', 1968, letItBeTracks));
console.log('Album added:', addToCollection('We Sing. We Dance. We Steal Things.', 'Jason Mraz', 2008, weSingTracks));
console.log('Album added:', addToCollection('Waiting for My Rocket to Come', 'Jason Mraz', 2002, waitingForTracks));
console.log('Album added:', addToCollection('No Strings Attached', 'NSYNC', 2000, noStringsTracks));

console.log('Check out my collection:', collection);

console.log(`******** In showCollection ********`);

function showCollection(array) {
  console.log(`Number of albums: ${array.length}`);
  for (let info of array) {
    console.log(`${info.title} by ${info.artist}, published in ${info.yearPub}: `);
    for (let i=0; i<info.tracks.length; i++) {
      let trackString = `${i+1}. ${info.tracks[i].name}: ${info.tracks[i].duration}`;
      console.log(`${trackString}`);
    }
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
console.log(findByArtist('NSYNC'));

console.log(`******** Stretch Goals ********`);


function search(artist, yearPub, trackName) {
  console.log(`Searching for ${artist} and ${yearPub} and ${trackName}`);
  let list = [];
  for (let album of collection) {
    //within collection - going through each album
    for (let aTrack of album.tracks) {
      if (artist === album.artist && yearPub === album.yearPub && trackName === aTrack.name) {
      list.push(album);
      }
      else if (artist === undefined || yearPub === undefined || trackName === undefined) {
      return collection;
    }
  }
  }
  return list;
}

// should return array with 'Waiting for My Rocket to Come' album info
console.log(search('Jason Mraz', 2002, 'You and I Both'));
// should return array with 'reputation' album info
console.log(search('Taylor Swift', 2017, 'I Did Something Bad'));
// should return empty array
console.log(search('Luke Bryan', 2000, 'Light It Up'));
// should return array of all albums in collection
console.log(search('Jason Mraz'));
// should return array of all albums in collection
console.log(search());
