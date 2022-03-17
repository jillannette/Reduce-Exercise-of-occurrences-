var beers = [
  { name: 'Guiness', type: 'Stout' },
  { name: 'Smithwicks', type: 'Ale' },
  { name: 'Murphys', type: 'Stout' },
  { name: 'Kilkennys', type: 'Ale' },
  { name: 'OHaras', type: 'Stout' }
]

var beerStyles = beers.reduce(function (acc, beer) {

  if (acc.hasOwnProperty(beer.type)) {

    acc[beer.type] += 1
  } else {

    acc[beer.type] = 1;
  }

  return acc}, {});

  console.log(beerStyles);
  //  {Stout: 3, Ale: 2}
