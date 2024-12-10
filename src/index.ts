//basic types
let id:number  = 5;
let company: string = 'Traversy Media'
let isPublished: boolean = false
let x:any = 'hello'


let ids:number[] = [1,2,3,4,5]

let arr: any[] = [1,true, 'hello', false]


// Tuple
let person:[number, string, boolean] = [1,'string', true]

//tuple array
let employee: [number, string][]

employee = [
    [1,'Brad'],
    [2,'john'],
    [3,'jill'],
]

//Union 
let pid: string | number

pid = '22'

//Enums
enum Direction1 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

//Objects
type User = {
    id:number,
    name:string
}

const user: User = {
    id:1,
    name:'john'
}

//Type Assertion

let cid: any = 1
let customerId = cid as  number

//Functions

function addNum(x:number, y:number): number{
    return x + y
}

function log(message: string | number):void{
console.log(message);
}

//Interfaces
interface UserInterface  {
   readonly id:number,
    name:string,
    age?:number
}

const user1: UserInterface = {
    id:1,
    name:'john',
 
}

interface MathFunc {
    (x: number, y:number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface  {
     id:number,
     name:string,
     register(): string
   
 }

//classes
class  Person implements PersonInterface  {
      id: number
    name: string

    constructor(id:number, name:string){
    this.id = id,
    this.name = name
     
    }

    register(){
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, 'Brad Traversy')
const Mike = new Person(2, 'Mike Jordan')
// console.log(brad.register());
// console.log(Mike.register());

class Employee extends Person {
    position: string

    constructor(id:number, name:string, position :string){
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn', 'Developper')


// Generics
function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4,5])
let strArray = getArray<string>(['brad', 'john', 'joe'])

strArray.push(1)



