import bcrypt from "bcrypt"
// const pwd = "pass1234"
// const hashedpwd = await bcrypt.hash(pwd,10)
// console.log(hashedpwd);

const check = await bcrypt.compare("pass1234","$2b$10$HawEU2RAm6rr9qDPuMFyguYn4JfdQ4/z0A2R2Gc/f69vS1ClvvPlC")
console.log(check);