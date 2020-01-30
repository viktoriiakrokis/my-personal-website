// create a new Promise object

const executorFunction = (resolve, reject) => { };
const myFirstPromise = new Promise(executorFunction);

// example executor function in a Promise constructo
const executorFunction = (resolve, reject) => {
  if (someCondition) {
      resolve('I resolved!');
  } else {
      reject('I rejected!'); 
  }
}
const myFirstPromise = new Promise(executorFunction);


// exercise
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

const myExecutor = (resolve, reject) => {
    if(inventory.sunglasses > 0){
      resolve('Sunglasses order processed.');
      } else {
        reject('That item is sold out.');
      }
}

const orderSunglasses =() => { 
  return new Promise (myExecutor)};

const orderPromise = orderSunglasses();

console.log(orderPromise); 

// to execute code and check the results write in terminal (node + name of file)