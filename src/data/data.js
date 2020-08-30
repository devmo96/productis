import { database } from "firebase";

const data = [
  {
    id: 0,
    imgsource: require("../assets/photo/54.jpg"),
    audiosource: require("../assets/audio/heavy-rain.mp3"),
    label: "Heavy Rain",
  },
  {
    id: 1,
    imgsource: require("../assets/photo/61.jpg"),
    audiosource: require("../assets/audio/light-rain.mp3"),
    label: "Light Rain",
  },
  {
    id: 2,
    imgsource: require("../assets/photo/71.jpg"),
    audiosource: require("../assets/audio/rain-on-car.mp3"),
    label: "Rain On Car",
  },
  {
    id: 3,
    imgsource: require("../assets/photo/72.jpg"),
    audiosource: require("../assets/audio/rain-on-lake.mp3"),
    label: "Rain On Lake",
  },
  {
    id: 4,
    imgsource: require("../assets/photo/73.jpg"),
    audiosource: require("../assets/audio/rain-on-tin-roof.mp3"),
    label: "Rain On Tin Roof",
  },
  {
    id: 5,
    imgsource: require("../assets/photo/90.jpg"),
    audiosource: require("../assets/audio/summer-rain.mp3"),
    label: "Summer Rain",
  },
  {
    id: 6,
    imgsource: require("../assets/photo/60.jpg"),
    audiosource: require("../assets/audio/lake.mp3"),
    label: "Lake",
  },
  {
    id: 7,
    imgsource: require("../assets/photo/75.jpg"),
    audiosource: require("../assets/audio/river.mp3"),
    label: "River",
  },
  {
    id: 8,
    imgsource: require("../assets/photo/64.jpg"),
    audiosource: require("../assets/audio/stream.mp3"),
    label: "Stream",
  },
  {
    id: 9,
    imgsource: require("../assets/photo/26.jpg"),
    audiosource: require("../assets/audio/cave-river.mp3"),
    label: "Cave River",
  },
  {
    id: 10,
    imgsource: require("../assets/photo/47.jpg"),
    audiosource: require("../assets/audio/forest-river.mp3"),
    label: "Forest River",
  },
  {
    id: 11,
    imgsource: require("../assets/photo/55.jpg"),
    audiosource: require("../assets/audio/hudson-river.mp3"),
    label: "Hudson River",
  },
  {
    id: 12,
    imgsource: require("../assets/photo/87.jpg"),
    audiosource: require("../assets/audio/meadow-creek.mp3"),
    label: "Meadow Creek",
  },
  {
    id: 14,
    imgsource: require("../assets/photo/11.jpg"),
    audiosource: require("../assets/audio/babbling-creek.mp3"),
    label: "Babbling Creek",
  },
  {
    id: 15,
    imgsource: require("../assets/photo/99.jpg"),
    audiosource: require("../assets/audio/waterfall.mp3"),
    label: "Waterfall",
  },
  {
    id: 16,
    imgsource: require("../assets/photo/95.jpg"),
    audiosource: require("../assets/audio/tropical-waterfall.mp3"),
    label: "Tropical Waterfall",
  },
  {
    id: 17,
    imgsource: require("../assets/photo/49.jpg"),
    audiosource: require("../assets/audio/fountain.mp3"),
    label: "Fountain",
  },
  {
    id: 18,
    imgsource: require("../assets/photo/66.jpg"),
    audiosource: require("../assets/audio/outdoor-fountain.mp3"),
    label: "Outdoor Fountain",
  },
  {
    id: 19,
    imgsource: require("../assets/photo/101.jpg"),
    audiosource: require("../assets/audio/waves.mp3"),
    label: "Waves",
  },
  {
    id: 20,
    imgsource: require("../assets/photo/100.jpg"),
    audiosource: require("../assets/audio/waves-at-pier.mp3"),
    label: "Waves At Pier",
  },
  {
    id: 21,
    imgsource: require("../assets/photo/25.jpg"),
    audiosource: require("../assets/audio/cave-water.mp3"),
    label: "Cave Water",
  },
  {
    id: 22,
    imgsource: require("../assets/photo/97.jpg"),
    audiosource: require("../assets/audio/underwater.mp3"),
    label: "Under Water",
  },
  {
    id: 23,
    imgsource: require("../assets/photo/56.jpg"),
    audiosource: require("../assets/audio/ice-cube-melting.mp3"),
    label: "Melting Ice",
  },
  {
    id: 24,
    imgsource: require("../assets/photo/17.jpg"),
    audiosource: require("../assets/audio/boiling-water.mp3"),
    label: "Boiling Water",
  },
  {
    id: 25,
    imgsource: require("../assets/photo/88.jpg"),
    audiosource: require("../assets/audio/strong-wind.mp3"),
    label: "Wind",
  },
  {
    id: 26,
    imgsource: require("../assets/photo/105.jpg"),
    audiosource: require("../assets/audio/wind-at-sea.mp3"),
    label: "Wind At The Sea",
  },
  {
    id: 27,
    imgsource: require("../assets/photo/65.jpg"),
    audiosource: require("../assets/audio/mountain-wind.mp3"),
    label: "Mountain Wind",
  },
  {
    id: 28,
    imgsource: require("../assets/photo/34.jpg"),
    audiosource: require("../assets/audio/desert-wind.mp3"),
    label: "Desert Wind",
  },
  {
    id: 29,
    imgsource: require("../assets/photo/48.jpg"),
    audiosource: require("../assets/audio/forest-wind.mp3"),
    label: "Forest Wind",
  },
  {
    id: 30,
    imgsource: require("../assets/photo/28.jpg"),
    audiosource: require("../assets/audio/city-wind.mp3"),
    label: "Citty Wind",
  },
  {
    id: 31,
    imgsource: require("../assets/photo/18.jpg"),
    audiosource: require("../assets/audio/breathing-wind.mp3"),
    label: "Breathing Wind",
  },
  {
    id: 32,
    imgsource: require("../assets/photo/109.jpg"),
    audiosource: require("../assets/audio/automn-wind.mp3"),
    label: "Automn Wind",
  },
  {
    id: 33,
    imgsource: require("../assets/photo/32.jpg"),
    audiosource: require("../assets/audio/crickets.mp3"),
    label: "Crickets",
  },
  {
    id: 34,
    imgsource: require("../assets/photo/102.jpg"),
    audiosource: require("../assets/audio/whales.mp3"),
    label: "Whales",
  },
  {
    id: 35,
    imgsource: require("../assets/photo/23.jpg"),
    audiosource: require("../assets/audio/cat-purr.mp3"),
    label: "Catt Purr",
  },
  {
    id: 36,
    imgsource: require("../assets/photo/36.jpg"),
    audiosource: require("../assets/audio/dog-whining.mp3"),
    label: "Dog Whining",
  },
  {
    id: 37,
    imgsource: require("../assets/photo/21.jpg"),
    audiosource: require("../assets/audio/canary.mp3"),
    label: "Canary",
  },
  {
    id: 38,
    imgsource: require("../assets/photo/50.jpg"),
    audiosource: require("../assets/audio/geese.mp3"),
    label: "Geese",
  },
  {
    id: 39,
    imgsource: require("../assets/photo/57.jpg"),
    audiosource: require("../assets/audio/jungle-birds.mp3"),
    label: "Jungle Birds",
  },
  {
    id: 40,
    imgsource: require("../assets/photo/63.jpg"),
    audiosource: require("../assets/audio/magpie.mp3"),
    label: "Magpie",
  },
  {
    id: 41,
    imgsource: require("../assets/photo/76.jpg"),
    audiosource: require("../assets/audio/seagulls.mp3"),
    label: "Seagulls",
  },
  {
    id: 42,
    imgsource: require("../assets/photo/83.jpg"),
    audiosource: require("../assets/audio/sparrows.mp3"),
    label: "Sparrows",
  },
  {
    id: 43,
    imgsource: require("../assets/photo/84.jpg"),
    audiosource: require("../assets/audio/starlings.mp3"),
    label: "Starlings",
  },
  {
    id: 44,
    imgsource: require("../assets/photo/68.jpg"),
    audiosource: require("../assets/audio/park-ducks.mp3"),
    label: "Park Ducks",
  },
  {
    id: 45,
    imgsource: require("../assets/photo/110.jpg"),
    audiosource: require("../assets/audio/woodpecker.mp3"),
    label: "Wood Pecker",
  },
  {
    id: 46,
    imgsource: require("../assets/photo/15.jpg"),
    audiosource: require("../assets/audio/beach.mp3"),
    label: "Beach",
  },
  {
    id: 47,
    imgsource: require("../assets/photo/31.jpg"),
    audiosource: require("../assets/audio/coffee-shop.mp3"),
    label: "Coffee Shop",
  },
  {
    id: 48,
    imgsource: require("../assets/photo/45.jpg"),
    audiosource: require("../assets/audio/food-court.mp3"),
    label: "Food Court",
  },
  {
    id: 49,
    imgsource: require("../assets/photo/69.jpg"),
    audiosource: require("../assets/audio/park.mp3"),
    label: "Park",
  },
  {
    id: 50,
    imgsource: require("../assets/photo/78.jpg"),
    audiosource: require("../assets/audio/shopping-mall.mp3"),
    label: "Shopping Mall",
  },
  {
    id: 51,
    imgsource: require("../assets/photo/93.jpg"),
    audiosource: require("../assets/audio/train-station.mp3"),
    label: "Train Station",
  },
  {
    id: 52,
    imgsource: require("../assets/photo/77.jpg"),
    audiosource: require("../assets/audio/seminar.mp3"),
    label: "Seminar",
  },
  {
    id: 24,
    imgsource: require("../assets/photo/51.jpg"),
    audiosource: require("../assets/audio/gym.mp3"),
    label: "Gym",
  },
  {
    id: 53,
    imgsource: require("../assets/photo/9.jpg"),
    audiosource: require("../assets/audio/arcade-bar.mp3"),
    label: "Arcade Bar",
  },
  {
    id: 54,
    imgsource: require("../assets/photo/22.jpg"),
    audiosource: require("../assets/audio/carnival.mp3"),
    label: "Carnival",
  },
  {
    id: 55,
    imgsource: require("../assets/photo/27.jpg"),
    audiosource: require("../assets/audio/city-at-night.mp3"),
    label: "City At Night",
  },
  {
    id: 56,
    imgsource: require("../assets/photo/33.jpg"),
    audiosource: require("../assets/audio/crowd.mp3"),
    label: "Crowd",
  },
  {
    id: 57,
    imgsource: require("../assets/photo/8.jpg"),
    audiosource: require("../assets/audio/airplane.mp3"),
    label: "Airplane",
  },
  {
    id: 58,
    imgsource: require("../assets/photo/16.jpg"),
    audiosource: require("../assets/audio/boat.mp3"),
    label: "Boat",
  },
  {
    id: 59,
    imgsource: require("../assets/photo/82.jpg"),
    audiosource: require("../assets/audio/spaceship.mp3"),
    label: "Spaceship",
  },
  {
    id: 60,
    imgsource: require("../assets/photo/89.jpg"),
    audiosource: require("../assets/audio/submarine-interior.mp3"),
    label: "Submarine",
  },
  {
    id: 61,
    imgsource: require("../assets/photo/94.jpg"),
    audiosource: require("../assets/audio/train.mp3"),
    label: "Train",
  },
  {
    id: 62,
    imgsource: require("../assets/photo/92.jpg"),
    audiosource: require("../assets/audio/train-interior.mp3"),
    label: "Train Interior",
  },
  {
    id: 63,
    imgsource: require("../assets/photo/7.jpg"),
    audiosource: require("../assets/audio/air-condition.mp3"),
    label: "Air Conditioner",
  },
  {
    id: 64,
    imgsource: require("../assets/photo/59.jpg"),
    audiosource: require("../assets/audio/kitchen-sink.mp3"),
    label: "Kitchen Sink",
  },
  {
    id: 65,
    imgsource: require("../assets/photo/30.jpg"),
    audiosource: require("../assets/audio/coffee-brew.mp3"),
    label: "Coffee Brewer",
  },
  {
    id: 66,
    imgsource: require("../assets/photo/35.jpg"),
    audiosource: require("../assets/audio/dish-washer.mp3"),
    label: "Dish Washer",
  },
  {
    id: 67,
    imgsource: require("../assets/photo/98.jpg"),
    audiosource: require("../assets/audio/dryer.mp3"),
    label: "Dryer",
  },
  {
    id: 68,
    imgsource: require("../assets/photo/39.jpg"),
    audiosource: require("../assets/audio/fan.mp3"),
    label: "Fan",
  },
  {
    id: 69,
    imgsource: require("../assets/photo/42.jpg"),
    audiosource: require("../assets/audio/fish-tank.mp3"),
    label: "Fish Tank",
  },
  {
    id: 70,
    imgsource: require("../assets/photo/43.jpg"),
    audiosource: require("../assets/audio/flag-flicking.mp3"),
    label: "Flag Flicking",
  },
  {
    id: 71,
    imgsource: require("../assets/photo/74.jpg"),
    audiosource: require("../assets/audio/fridge.mp3"),
    label: "Fridge",
  },
  {
    id: 72,
    imgsource: require("../assets/photo/52.jpg"),
    audiosource: require("../assets/audio/hair-dryer.mp3"),
    label: "Hair Dryer",
  },
  {
    id: 73,
    imgsource: require("../assets/photo/53.jpg"),
    audiosource: require("../assets/audio/heart-beats.mp3"),
    label: "Heart Beat",
  },
  {
    id: 74,
    imgsource: require("../assets/photo/67.jpg"),
    audiosource: require("../assets/audio/paper-shredder.mp3"),
    label: "Paper Shredder",
  },
  {
    id: 75,
    imgsource: require("../assets/photo/79.jpg"),
    audiosource: require("../assets/audio/shower.mp3"),
    label: "Shower",
  },
  {
    id: 76,
    imgsource: require("../assets/photo/86.jpg"),
    audiosource: require("../assets/audio/stove-heater.mp3"),
    label: "Stove Heater",
  },
  {
    id: 77,
    imgsource: require("../assets/photo/96.jpg"),
    audiosource: require("../assets/audio/type-writer.mp3"),
    label: "Type Writer",
  },
  {
    id: 78,
    imgsource: require("../assets/photo/37.jpg"),
    audiosource: require("../assets/audio/washing-machine.mp3"),
    label: "Washing Machine",
  },
  {
    id: 79,
    imgsource: require("../assets/photo/103.jpg"),
    audiosource: require("../assets/audio/white-board.mp3"),
    label: "White Board",
  },
  {
    id: 80,
    imgsource: require("../assets/photo/29.jpg"),
    audiosource: require("../assets/audio/clock.mp3"),
    label: "Clock",
  },
  {
    id: 81,
    imgsource: require("../assets/photo/104.png"),
    audiosource: require("../assets/audio/white-noise.mp3"),
    label: "White Noise",
  },
  {
    id: 82,
    imgsource: require("../assets/photo/70.png"),
    audiosource: require("../assets/audio/pink-noise.mp3"),
    label: "Pink Noise",
  },
  {
    id: 83,
    imgsource: require("../assets/photo/19.png"),
    audiosource: require("../assets/audio/brown-noise.mp3"),
    label: "Brown Noise",
  },
  {
    id: 84,
    imgsource: require("../assets/photo/40.jpg"),
    audiosource: require("../assets/audio/fire.mp3"),
    label: "Fire",
  },
  {
    id: 85,
    imgsource: require("../assets/photo/41.jpg"),
    audiosource: require("../assets/audio/fireplace.mp3"),
    label: "Fire Place",
  },
  {
    id: 86,
    imgsource: require("../assets/photo/14.jpg"),
    audiosource: require("../assets/audio/beach-fire.mp3"),
    label: "Beach Fire",
  },
  {
    id: 87,
    imgsource: require("../assets/photo/80.jpg"),
    audiosource: require("../assets/audio/camp-fire.mp3"),
    label: "Camp Fire",
  },
  {
    id: 88,
    imgsource: require("../assets/photo/44.jpg"),
    audiosource: require("../assets/audio/flame-movement.mp3"),
    label: "Flame Movement",
  },
  {
    id: 89,
    imgsource: require("../assets/photo/20.jpg"),
    audiosource: require("../assets/audio/small-campfire.mp3"),
    label: "Small Camp Fire",
  },
  {
    id: 90,
    imgsource: require("../assets/photo/106.jpg"),
    audiosource: require("../assets/audio/wind-chimes.mp3"),
    label: "Wind Chimes",
  },

  {
    id: 91,
    imgsource: require("../assets/photo/107.jpg"),
    audiosource: require("../assets/audio/wind-chimes2.mp3"),
    label: "Wind Chimes 2",
  },
  {
    id: 92,
    imgsource: require("../assets/photo/108.jpg"),
    audiosource: require("../assets/audio/wind-chimes3.mp3"),
    label: "Wind Chimes 3",
  },
  {
    id: 93,
    imgsource: require("../assets/photo/13.jpg"),
    audiosource: require("../assets/audio/bamboo-windchimes.mp3"),
    label: "Bamboo Wind Chimes",
  },
  {
    id: 94,
    imgsource: require("../assets/photo/1.jpg"),
    audiosource: require("../assets/audio/9in-crystal.mp3"),
    label: "9in Crystal Bowl",
  },
  {
    id: 95,
    imgsource: require("../assets/photo/2.jpg"),
    audiosource: require("../assets/audio/11in-crystal.mp3"),
    label: "11in Crystal Bowl",
  },
  {
    id: 96,
    imgsource: require("../assets/photo/3.jpg"),
    audiosource: require("../assets/audio/13in-crystal.mp3"),
    label: "13in Crystal Bowl",
  },
  {
    id: 97,
    imgsource: require("../assets/photo/4.jpg"),
    audiosource: require("../assets/audio/14in-crystal.mp3"),
    label: "14in Crystal Bowl",
  },
  {
    id: 98,
    imgsource: require("../assets/photo/5.jpg"),
    audiosource: require("../assets/audio/16in-crystal.mp3"),
    label: "16in Crystal Bowl",
  },
  {
    id: 99,
    imgsource: require("../assets/photo/6.jpg"),
    audiosource: require("../assets/audio/18in-crystal.mp3"),
    label: "18in Crystal Bowl",
  },
];
export default data;
