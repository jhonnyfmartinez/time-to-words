// input 8:00
// Cases:
// close cases ex: 2:00, 12:00, 0:00, 3:00, 8:30 *
// first half cases: 2:12, 1:26
// second half cases: 2:56, 7:36
// 8:00
// h : m
// ## Examples

// - '0:00' > 'midnight' *
// - '0:30' > 'half past midnight' *
// - '12:00' > 'midday' *
// - '2:00' > 'two o'clock' *
// - '2:03' > 'three past two'
// - '2:11' > 'eleven past two'
// - '2:15' > 'quarter past two' 
// - '2:30' > 'half past two'
// - '2:33' > 'twenty seven to three'
// - '2:40' > 'twenty to three'
// - '2:45' > 'quarter to three' 
// - '2:55' > 'five to three'

const HOUR_NAMES = {
  0: "midnight",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "midday",
}

const MINUTE_NAMES = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "quarter",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  21: "twenty one",
  22: "twenty two",
  23: "twenty three",
  24: "twenty four",
  25: "twenty five",
  26: "twenty six",
  27: "twenty seven",
  28: "twenty eight",
  29: "twenty nine",
  30: "half",
}

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  // Split the time string into hours and minutes and parse them to numbers
  const [h, m] = time.split(':').map(v => parseInt(v, 10));
  // Convert hour value to hour name string
  const hourName = HOUR_NAMES[h];
  // Compare close cases when minutes are equal to 0
  if (m === 0) {
    // Compare close cases when hours equal to 12
    if (h === 0 || h === 12) {
      return hourName;
    } else {
      // Compare cases where hours different than 12
      return `${hourName} o'clock`;
    }
  } else {
    // Compare cases where minutes different than 30

    // Compare cases where minutes less or equal to 30
    if (m <= 30) {
      const minuteName = MINUTE_NAMES[m];
      return `${minuteName} past ${hourName}`;
    } else {
      // Compare cases where minutes greater to 30
      const pastMinutes = m - 30;
      const minuteName = MINUTE_NAMES[pastMinutes];
      const hourName = HOUR_NAMES[h + 1];
      return `${minuteName} to ${hourName}`;
    }
  }
}

module.exports = { convertTimeToWords };