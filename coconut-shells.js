/*
You have numCoconuts coconut shells that are initially full of water. You can exchange numExchange empty coconut shells from the market with one full coconut shell of water.
The operation of drinking a full coconut of water turns it into an empty coconut shell.
Given the two integers numCoconuts and numExchange, return the maximum number of coconut shells of water you can drink.

Example 1:
Input: numCoconuts = 9, numExchange = 3
Output: 13
Explanation: You can exchange 3 empty coconut shells for 1 full coconut of water. With 9 coconut shells, you can exchange them for 3 full coconuts of water. You can then drink the 9 full coconuts and have 3 empty coconut shells left. You can exchange 3 empty coconut shells for 1 full coconut of water, and now you have 1 full coconut and 2 empty shells. You can't exchange the 2 empty shells for another coconut, so you can only drink the 1 full coconut. In total, you can drink 9 + 1 + 1 + 1 + 1 = 13 coconut shells of water.

Example 2:
Input: numCoconuts = 15, numExchange = 4
Output: 19
Explanation: You can exchange 4 empty coconut shells for 1 full coconut of water. With 15 coconut shells, you can exchange them for 3 full coconuts of water and have 3 empty shells left. You can exchange the 3 empty shells for 1 more full coconut of water. You can then drink the 4 full coconuts and have 2 empty shells left. You can exchange the 2 empty shells for 1 more full coconut of water. You can then drink the last coconut of water. In total, you can drink 15 + 1 + 1 + 1 + 1 = 19 coconut shells of water.
*/

function maxCoconuts(numCoconuts, numExchange) {
    let drinkCoconuts = numCoconuts; // Initial water from full coconuts
    let emptyShells = numCoconuts; // Initial empty shells

    while (emptyShells >= numExchange) {
        const newCoconuts = Math.floor(emptyShells / numExchange); // Calculate how many full coconuts can be obtained
        drinkCoconuts += newCoconuts; // Add the water from exchanged coconuts
        emptyShells = newCoconuts + (emptyShells % numExchange); // Calculate the remaining empty shells
    }

    console.log(drinkCoconuts); 
}

maxCoconuts(9,3); //13
maxCoconuts(15,4); //19
maxCoconuts(11,5); //13

