function createEventItemFactory(title, color) {
    return (timeStart, timeEnd) => {
        const current = new Date().toISOString().slice(0, 10)

        return {
            start: current + ' ' + timeStart,
            end: current + ' ' + timeEnd,
            title,
            color,
        }
    }
}

const sleepingEvent = createEventItemFactory('Sleeping', '#0000ff')
const eatingItem = createEventItemFactory('Eating', '#ff0000')
const designItem = createEventItemFactory('Design', '#00ff00')
const freetimeItem = createEventItemFactory('Freetime', '#00ff00')
const workingItem = createEventItemFactory('Working', '#000000')
const subworkItem = createEventItemFactory('Subwork', '#ffffff')
const nongadgettimeItem = createEventItemFactory('Nongadgettime', '#00ffff')


function createEvents() {
    const current = new Date().toISOString().slice(0, 10)

    console.log('current', current);

    return [
        sleepingEvent('00:00', '07:00'),
        eatingItem('07:00', '07:30'),
        designItem('07:30', '09:00'),
        freetimeItem('09:30', '10:00'),
        workingItem('10:00', '13:00'),
        eatingItem('13:00', '14:00'),
        workingItem('14:00', '19:00'),
        subworkItem('19:00', '20:00'),
        freetimeItem('20:00', '22:00'),
        nongadgettimeItem('22:00', '23:00'),
        sleepingEvent('23:00', '23:59'),
    ];
}

const ec = new EventCalendar(document.getElementById('ec'), {
    view: 'timeGridDay',
    headerToolbar: {
        start: 'prev,next today',
        center: 'title',
        end: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek resourceTimeGridWeek,resourceTimelineWeek'
    },
    resources: [
        {id: 1, title: 'Resource A'},
        {id: 2, title: 'Resource B'},
    ],
    scrollTime: '09:00:00',
    events: createEvents(),
    views: {
        timeGridWeek: {pointer: true},
        resourceTimeGridWeek: {pointer: true},
        resourceTimelineWeek: {
            pointer: true,
            slotMinTime: '09:00',
            slotMaxTime: '21:00',
            slotWidth: 80,
            resources: [
                {id: 1, title: 'Resource A'},
                {id: 2, title: 'Resource B'},
                {id: 3, title: 'Resource C'},
                {id: 4, title: 'Resource D'},
                {id: 5, title: 'Resource E'},
                {id: 6, title: 'Resource F'},
                {id: 7, title: 'Resource G'},
                {id: 8, title: 'Resource H'},
                {id: 9, title: 'Resource I'},
                {id: 10, title: 'Resource J'},
            ]
        }
    },
    dayMaxEvents: true,
    nowIndicator: true,
    selectable: true
});
