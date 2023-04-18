let names = ["Jon", "Bob", "Carl"];

function writeCards(names, event) {
    let cards = []

    for (let i = 0; i < names.length; i++) {
        cards[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }

    return cards
}

writeCards(names)

function countDown(nums) {
    let i = nums;
    while (i >= 0) {
        console.log(i);
        i--;

    }

    return nums;
}

