//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (word = "") => {
  let reversedWord = "";
  const c = [...word].reverse().map((element) => {
    return (reversedWord += element);
  });
  return reversedWord;
};
