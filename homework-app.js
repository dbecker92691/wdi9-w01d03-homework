// //Easy Going 

// for(let i = 1; i <= 20; i++){
//     console.log(i);
// }

// // Get Even

// for(let j = 0; j < 201; j +=2){
//     console.log(j);
// }

// //Excited Kitten
// const randomCat = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', '...why does the red dot always get away...'];

// for(let k = 1; k < 21; k++) {
//     if(k % 2 === 0){
//     let randomPhrase = Math.floor(Math.random() * randomCat); // math.floor rounds down an integer math.random selects a random number from 0 up to but on includeing
//         console.log(randomCat[randomPhrase])
//     } else {
//         console.log('Love me, pet me! HSSSSS!')
//     }
// } 
    


// FizzBuzz



// for(let i = 1; i <= 100; i++){
//     if(i % 3 === 0) {
//         console.log('fizz'); 
        
//     } else {
//         if(i % 5 === 0){
//             console.log('buzz')
//         } else {
//             if(i % 15 === 0) {
//                 console.log('fizzbuzz');
//             } else {
//                 console.log(i)
//             }
//         }
//     }

// }

// Getting to Know You

// const shahzad = ["Shahzad", 1000, "Austin"];
// const jim = ["Jim", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const daniel = ["Daniel", 186, "Dallas"];
// const ryan = ["Ryan", 65, "Denver"];



// shahzad.pop("Shahzad");

// daniel[1] = 187;

// ryan[2] = "Gotham City";

// reuben.pop(2);
// reuben.push("Chicago")

// jim.pop(2);
// jim.push("Los Angeles, New York City, Minneapolis")
 

//Yell at all the Ninja Turtles

// let ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

// for(let i = 0; i < ninjaTurtles.length; i++) {
//     let upper = ninjaTulrtles[i].toUpperCase();
//     console.log(upper);
// }



// Return of the Closets


// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [


    // const kristynsCloset = [
    //     "left shoe",
    //     "cowboy boots",
    //     "right sock",
    //     "GA hoodie",
    //     "green pants",
    //     "yellow knit hat",
    //     "marshmallow peeps"
    //   ];
      
    //   // Thom's closet is more complicated. Check out this nested data structure!!
    //   const thomsCloset = [[
    //       // These are Thom's shirts
    //       "grey button-up",
    //       "dark grey button-up",
    //       "light blue button-up",
    //       "blue button-up",
    //     ],[
    //       // These are Thom's pants
    //       "grey jeans",
    //       "jeans",
    //       "PJs"
    //     ],[
    //       // Thom's accessories
    //       "wool mittens",
    //       "wool scarf",
    //       "raybans"
    //     ]
    //   ];

    
     // 1. Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! 
     //Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's 
     //lost shoe to Thom's accessories array.



    // const kristynsShoe =  kristynsCloset[0];

    // thomsCloset[2].push(kristynsShoe);

    // console.log(thomsCloset);

    // 2. Modify your code to put together 3 separate outfits for Kristyn and Thom. 
    // Put the output in a sentence to tell us what we'll be wearing. Mix and match!



  //   const thomsFirstOutfit = (`Thom's first outfit will be a ${thomsCloset[0][0]}, his ${thomsCloset[1][1]} and his ${thomsCloset[2][1]}.`);

  //   console.log(thomsFirstOutfit);

  //   const thomsSecondOutfit = (`Thom's second outfit will be a ${thomsCloset[0][1]}, his ${thomsCloset[1][1]} and his ${thomsCloset[2][2]}.`)
    
  //   console.log(thomsSecondOutfit);

  //  const thomnsThirdOutfit = (`Thom's third outfit will be a ${thomsCloset[0][2]}, his ${thomsCloset[1][2]}, and his ${thomsCloset[2][1]}`);

  //  console.log(thomnsThirdOutfit);


  // const kristynsFirstOutfit = (`Kristyn's first outfit will be her ${kristynsCloset[0]}, her ${kristynsCloset[2]}, and her ${kristynsCloset[3]}.`);

  // console.log(kristynsFirstOutfit);


  // const kristynsSecondOutfit = (`Kristyn's second outfit will be her ${kristynsCloset[2]}, her ${kristynsCloset[1]}, and her ${kristynsCloset[5]}.`);

  // console.log(kristynsSecondOutfit);


  // const kristynsThirdOutfit = (`Kristyn's first outfit will be her ${kristynsCloset[2]}, her ${kristynsCloset[6]}, and her ${kristynsCloset[4]}.`);

  // console.log(kristynsThirdOutfit);

  

  // 3. Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.




  // for(let i = 0; i < kristynsCloset.length; i++){
  //   console.log(`WHIRR: Now washing ${kristynsCloset[i]}`);
  // }



 // 4. Thom wants to do inventory on his closet. Using bracket notation, log the arrays (not the elements in the arrays) 
 // containing all of Thom's shirts, pants, and accessories.


//  console.log(`Thom's shirts: ${thomsCloset[0]}`);
//  console.log(`Thom's pants: ${thomsCloset[1]}`);
//  console.log(`Thom's accessories: ${thomsCloset[2]}`);
 



// Multiples of 3 and 5 

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

let multiples = [];
let reducer = ()

const getMultiples = () => {
for(let i = 0; i < 1000; i++){
  if(i % 3 === 0){
    multiples.push(i);
  } else if(i % 5 === 0){
    multiples.push(i);
  }
}

}

const sum = multiples.reduce((multiples[0], multiples[1]) => multiples + amount);

console.log(sum);