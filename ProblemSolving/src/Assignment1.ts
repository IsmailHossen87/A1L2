{
  function formatString(input: string, toUpper?: boolean): string {
    let result :string;
    if (toUpper == false) {
        result =input.toLocaleLowerCase()
    }else{
        result = input.toUpperCase();
    }
    console.log(result)
    return result;
    
  }
 formatString("Hello",true)



  // Problem solving 2
  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    const result =  (items.filter((item) => item.rating >= 4))  
    console.log(result)
    return result
  }

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];
 filterByRating(books)

// Problem solbing 3
function concatenateArrays<T>(...arrays: T[][]): T[] {
   const result = arrays.flat() 
   console.log(result )
   return result
}
concatenateArrays([1, 2], [3, 4], [5]); 
// Problen solving 4
class Vehicle {
    private _make:string;
    year:number;
   constructor(_make:string,year:number){
    this._make = _make;
    this.year = year
   }
   getInfo(){
    console.log( `Make: ${this._make}, Year: ${this.year}`)
   }
}
class Car extends Vehicle {
    private _model:string;
    constructor(_make:string,year:number,_model:string){
        super(_make,year)
        this._model = _model
    }
    getModel(){
         console.log(`Model: ${this._model}`)
    }
}

const myCar = new Car("Toyota",2020,"corola")
myCar.getInfo()
// myCar.getModel()

// practice 5 
function processValue(value: string | number): number{
    if(typeof value === "number"){
        console.log(value*2)
        return value *2
    }else if(typeof value === "string"){
        const result = value.split("")
        console.log(result.length )
        return result.length
    }
    return 0;
}
// Practice 6
interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null{ 
    if(products.length === 0){
        return null;
    }
    const sorted = products.sort((a,b)=>b.price - a.price)
     console.log(sorted[0])
     return sorted[0]
  }

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];
// Problem solving 7
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string{ 
  let result = "";
  if(day === Day.Saturday || day === Day.Sunday){
    result = "Weekend"
  }else{
    result = "Weekday"
  }
  console.log(result)
  return result
}
getDayType(Day.Sunday)

// Problem 8
async function squareAsync(n: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(`after 1s: ${n * n}`);
        console.log(`after 1s: ${n * n}`)
      }
    }, 1000);
  });
}
 squareAsync(4)













}
