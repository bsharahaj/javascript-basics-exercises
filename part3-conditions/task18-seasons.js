// Task 18: Season detector with switch
//
// Stacked cases without break "fall through" — they all run the same code.
// switch uses STRICT equality (===).

let month = 7;
let season;

switch (month) {
  case 12:
  case 1:
  case 2:
    season = "Winter";
    break;
  case 3:
  case 4:
  case 5:
    season = "Spring";
    break;
  case 6:
  case 7:
  case 8:
    season = "Summer";
    break;
  case 9:
  case 10:
  case 11:
    season = "Autumn";
    break;
  default:
    season = "Invalid month";
}

console.log(season);  // Summer
