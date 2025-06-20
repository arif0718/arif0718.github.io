//callback function : a function taking a function as an argument

const f1 = () => {
    console.log("Hello")
}
const main = (x) => {
    x()
}
main(f1);