const isWinner: boolean = true

const age: number = 15
const currency: number = 15.25
const hex: number = 0x3223 // Detects hex
const binary: number = 0b1010 // Binary

const username: string = "Benny"
const password: string = "123"

const scoreList: number[] = [0, 1, 2]
const nameList: Array<string> = ["Benny", "Frida"]

let x: [string, number, boolean]
x = ["test", 0, true]

enum Color {
  Red,
  Blue,
  Green,
}

let myColor = Color.Blue

let unknown: any = "" // Try to avoid as much as possible
unknown = true

function whiteSpace(): void {
  // some logic
}

function addition(x: number, y: number): number {
  return x + y
}

addition(2, 2)

function callbackFunction(func: () => void) {
  func()
}

callbackFunction(whiteSpace) // TODO - Check if this is correct

const myObject: {} = {}
const benny: { name: string } = { name: "Benny" }

interface Student {
  firstName: string
  lastName: string
  age: number
  subjects: string[]
  book: {
    title: string
    author: string
    pages: number
  }

  printStudentDetails: () => Student
  getFirstLastName: () => string
}

const frida: Student = {
  firstName: "Frida",
  lastName: "Andersson",
  age: 15,
  subjects: ["Biology", "Math", "Music"],
  book: {
    title: "Me",
    author: "Me",
    pages: 1550,
  },
  printStudentDetails: function (): Student {
    return this
  },
  getFirstLastName: function (): string {
    return this.firstName + this.lastName
  },
}
