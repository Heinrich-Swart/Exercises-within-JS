//Check is the person is driving the speed limit. If they drive over the speedlimit, they will get a point. If they have more than 12 points their license is suspended
// checkSpeed(180);

// function checkSpeed(speed){
//     const speedLimit = 70;
//     const kmPerPoint = 5;
    
//     if(speed <= speedLimit + kmPerPoint){
//         console.log("OK");
//         return;
//     }

//     const points = Math.floor((speed - speedLimit) / kmPerPoint);
//     if(points >= 12){
//         console.log("License suspended");
//     }
//     else{
//         console.log(points);
        
//     }
// }


//To show if the number is Even or Odd in a sequence
// showNumbers(20);

// function showNumbers(limit){
//     for(let i = 0; i <= limit;i++){
//         if(i % 2 === 0){
//             console.log(i + ": " + "EVEN")
//         }
//         else{
//             console.log(i+ ": " + "ODD");
//         }
//     }
// }

//Show the string properties of a object
// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// };

// showProperties(movie);
// function showProperties(obj){
//     for(let key in obj){
//         if(typeof obj[key] === 'string')
//             console.log(key,obj[key]);
//     }

// }

//Calc grade of a student

const marks = [80,80,50];

console.log(calcGrade(marks));

function calcGrade(marks){
    // One way
     let grade = (marks[1] + marks[2] + marks[0]) / 3;

    // Another way
    // let grade = 0;
    // for(let mark of marks)
    //     grade += mark;
    // let  average = sum / marks.length;
    

     if(grade <= 59)
         console.log("F");
     if(grade >= 60 && grade <= 69)
         console.log("D");
     if(grade >= 70 && grade <= 79)
         console.log("C");
     if(grade >= 80 && grade <= 89)
         console.log("B");
     if(grade >= 90 && grade <= 100)
         console.log("A");

}