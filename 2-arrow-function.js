import { monitorEventLoopDelay } from "perf_hooks";

const square = function (x) {
    return x * x;
}
const cube = (x) => {
    return x * x * x;
}
const event = {
    name: 'birthday party',
    guestList: ['andrew', 'jen', 'mike'],
    printGuestList: function () {
        console.log('guest list for ' + this.name);
        this.guestList.forEach(function (guest) {
            console.log(guest + ' is attending ' + this.name)
        })
    }  

}
event.printGuestList();