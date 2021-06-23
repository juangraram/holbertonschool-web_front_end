function welcomeMessage(fullName) {
    alert('Welcome ' + fullName);
}

let guillaume1 = welcomeMessage("Guillaume");
let alex1 = welcomeMessage("Alex");
let fred1 = welcomeMessage("Fred")

guillaume = function() {welcomeMessage("Guillaume")};
alex = function() {welcomeMessage("Alex")};
fred = function() {welcomeMessage("Fred")};