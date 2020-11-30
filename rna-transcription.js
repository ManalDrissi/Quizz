//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (rna = "") => {
  let newRna=""
  rna.split("").forEach((character) => {
    switch (character) {
      case "C":
        newRna += "G";
        break;
      case "G":
        newRna += "C";
        break;
      case "A":
        newRna += "U";
        break;
      case "T":
        newRna += "A";
        break;
      default: newRna += character; break;
    }
  });
  return newRna;
};
