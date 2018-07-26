import TClock from './tclock';
import TClockControllerButtons from './tClockControllerButtons';
import TClockViewDOM from './tClockViewDom';

const timeZones = [-4, 1, 2, 3, 9, 10];
const sities = ['Нью-Йорк (GMT-4)', 'Лондон (GMT+1)', 'Берлин (GMT+2)', 'Минск (GMT+3)', 'Токио (GMT+9)', 'Владивосток (GMT+10)'];

function createClock(timeZonesArray, sitiesArray, host) {
    for (let i = 0; i < timeZonesArray.length; i++) {
        const clock = new TClock(timeZonesArray[i]);
        const controller = new TClockControllerButtons(
            clock,
            new TClockViewDOM(clock, host, sitiesArray[i])
        );
    }
}
createClock(timeZones, sities, document.body);