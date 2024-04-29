var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
//Personal Message: Store a person’s name in a variable, and print a message to that person. 
//Your message should be simple, such as, “Hello Eric, 
//would you like to learn some Python?
var firstname = "Eric";
console.log(__makeTemplateObject(["Hello ", ",\"would you like to learn some python today?\""], ["Hello ", ",\"would you like to learn some python today?\""]), firstname);
