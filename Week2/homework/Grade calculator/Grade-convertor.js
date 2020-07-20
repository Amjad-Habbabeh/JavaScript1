function convertor(dgree) {
  let gradePrecentage = Math.round((dgree / 100) * 100); //calculate the precentage and round the result
  let grade;
  if (gradePrecentage >= 90 && gradePrecentage <= 100) {
    //write the code to calculate what grade corresponds with that percentage
    grade = 'A';
  } else if (gradePrecentage >= 80 && gradePrecentage <= 89) {
    grade = 'B';
  } else if (gradePrecentage >= 70 && gradePrecentage <= 79) {
    grade = 'C';
  } else if (gradePrecentage >= 60 && gradePrecentage <= 69) {
    grade = 'D';
  } else if (gradePrecentage >= 50 && gradePrecentage <= 59) {
    grade = 'E';
  } else {
    grade = 'F';
  }

  console.log(`You got a ${grade} (${gradePrecentage}%)!`); // log the result of the function in a template string
}
convertor(89.66666); //test the code by calling the function in many diffirent values for the dgree
convertor(89.33334);
convertor(79.33);
convertor(69.33);
convertor(59.33);
convertor(49.7);
convertor(49.33);
