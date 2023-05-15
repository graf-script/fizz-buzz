function getPhrase(fizBuzzContainer, num) 
    {
        for (let k = 0; k < fizBuzzContainer.length; k++) {
            const { phrase, equal } = fizBuzzContainer[k];
            if ( num % equal === 0) {  
                return phrase;
            }
        } return num;
    }

const fizBuzzContainer = [
    {
        phrase: 'Fizz',
        equal: 3
    }, 
    {
        phrase: 'Buzz',
        equal: 5
    }, 
]

for(let i = 1; i <= 100; i++) {
    console.log(getPhrase(fizBuzzContainer, i));
}
