export function generateFilters () {
  return {
    placeName: 'GLASBRUKSGRÄND',
    avaliblePlaces: ['GLASBRUKSGRÄND', 'BÄCKGATAN', 'KOMARKSBRON', '__\'EVENT@🇫🇷'],
    monthName: 'April',
    year: '2018',
    avalibleMonths: ['Mars', 'April', 'Maj'],
    types: ['car', 'ped', 'cyc'],
    mapLoaded: false,
    helping: false
  }
}
export function generateData () {
  return {
    pointA: {
      lat: 57.869040,
      lng: 11.983998
    },
    pointB: {
      lat: 57.869081,
      lng: 11.984159
    },
    countData: {
      thisMonth: [0, 0, 0], // [23, 98, 23],
      lastMonth: [0, 0, 0], // [59, 300, 90],
      sameMonth: [0, 0, 0] // [87, 45, 32]
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
    comment: '',
    number: 0, // 49031,
    total: 0, // 121345,
    topNotes: [
      {date: '01/1', count: 0},
      {date: '01/1', count: 0},
      {date: '01/1', count: 0}
      // {date: '22/4', count: 3435},
      // {date: '16/4', count: 3178},
      // {date: '27/4', count: 2998}
    ],
    car: 0, // 42,
    carFast: 0, // 67,
    bic: 0, // 16,
    count: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // [10, 15, 12, 13, 9, 6, 4, -1, -3, 5, 8, 10],
    position: [0, 0, 0, 0, 0, 0, 0, 0, 0] // [8000, 4050, 6200, 8234, 9452, 7153, 4244, 2855, 1235]
  }
}
