let age = 25;
let hasLicense = true;
let hasExperience = true;

if (age >= 18 && hasLicense && hasExperience) {
  console.log("You are eligible to drive.");
} else if (age >= 16 && hasLicense) {
  console.log("You can drive under supervision.");
} else {
  console.log("You are not eligible to drive.");
}
