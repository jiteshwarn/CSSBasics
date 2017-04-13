//in build module
const event = require("events");
const AppEventEmitter=new event.EventEmitter();

var cb1=(str)=>console.log("CB1 Event Occured"+str);
var cb2=(str)=>console.log("CB2 Event Occunred"+str);
// passing the event name cgEvent so that when cgEvent will be called it will trigger it.
// to call event we have emit method
AppEventEmitter.addListener('cgEvent',cb1);
//once will allow one time to run even if we have called many times
AppEventEmitter.once('cgEvent',cb2);

AppEventEmitter.removeListener('cgEvent',cb1);

setTimeout(function(){
AppEventEmitter.emit('cgEvent',"Hi");
AppEventEmitter.emit('cgEvent',"Hi");
},2000);
