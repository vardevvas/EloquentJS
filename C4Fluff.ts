import { JOURNAL } from `/Users/devas/development/Elquent JS/journal.js`;

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}
function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}

console.log(journalEvents(JOURNAL));
for (let event of journalEvents(JOURNAL)) {
    console.log(event + ":", phi(tableFor(event, JOURNAL)));
}