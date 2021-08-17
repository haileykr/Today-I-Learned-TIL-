function Logger0(constructor: Function) {
  // common practice to capitalize the decorator name
  console.log("Logging...");
  console.log(constructor);
}

// decorator factory
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// building more useful decorators
function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hook_element = document.getElementById(hookId);

    const p = new constructor();
    if (hook_element) {
      hook_element.innerHTML = template;

      hook_element.querySelector("h1")!.textContent = p.name;
    }
  };
}

// @Logger0
// @Logger("LOGGING-PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Max";
  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

console.log(pers);
