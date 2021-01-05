// OBJECT Destructuring
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Publisher' } = book.publisher;
console.log(`The puclisher name is ${publisherName}`);


// ARRAY Destructuring
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee = 'Coffee', ,mediumPrice = '$2.50'] = item;
console.log(`A medium ${coffee} cost ${mediumPrice}`)