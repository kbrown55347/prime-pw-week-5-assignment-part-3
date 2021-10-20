console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPub) {
  let newAlbum = {
    title: title,
    artist: artist,
    yearPub: yearPub
  }
  collection.push(newAlbum);
  return newAlbum;
}

console.log('Added album to collection:', addToCollection('reputation', 'Taylor Swift', 2017));
console.log('Added album to collection:', addToCollection('Fearless', 'Taylor Swift', 2008));
console.log('Added album to collection:', addToCollection('Let It Be', 'The Beatles', 1968));
console.log('Added album to collection:', addToCollection('We Sing. We Dance. We Steal Things.', 'Jason Mraz', 2008));
console.log('Added album to collection:', addToCollection('Waiting for My Rocket to Come', 'Jason Mraz', 2002));
console.log('Added album to collection:', addToCollection('No Strings Attached', 'NSYNC', 2000));

console.log(collection);

let showCollection([]) {
  console.log(showCollection.length());
  for (info of showCollection) {
    return `${title} by ${artist}, published in ${yearPub}.`;
  }
}

showCollection(collection);
