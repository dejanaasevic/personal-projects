const nums = [1, 2, 3, 4, 5]
const squaredNums = nums.map((x) => (x*x));

const names = ["alice", "bob", 'charlie'];
const capNames = names.map((name) => name[0].toUpperCase() + name.substring(1,name.length))


const letters = ['a', 'b', 'c'];
const htmlLetters = letters.map((letter) => (<p>{letter}</p>))

const ninja = ["donatelo", "mikelandelo"]
const htmlh2 = ninja.map((ninjaName)=> (<h2>{ninjaName}</h2>))