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

function createEvents() {
    const current = new Date().toISOString().slice(0, 10)

    console.log('current', current);

    return [
        {start: current + " 00:00", end: current + " 07:00", title: "Sleeping", color: '#0000ff'},
        {start: current + " 07:00", end: current + " 07:30", title: "Eating", color: '#ff0000'},
        {start: current + " 07:30", end: current + " 09:00", title: "Design", color: '#00ff00'},
        {start: current + " 09:00", end: current + " 09:30", title: "Eating", color: '#ff0000'},
        {start: current + " 09:30", end: current + " 10:00", title: "Freetime", color: '#00ff00'},
        {start: current + " 10:00", end: current + " 13:00", title: "Working", color: '#000000'},
        {start: current + " 13:00", end: current + " 14:00", title: "Eating", color: '#ff0000'},
        {start: current + " 14:00", end: current + " 19:00", title: "Working", color: '#000000'},
        {start: current + " 19:00", end: current + " 20:00", title: "Subwork", color: '#00ff00'},
        {start: current + " 20:00", end: current + " 22:00", title: "Freetime", color: '#00ff00'},
        {start: current + " 22:00", end: current + " 23:00", title: "Nongadgettime", color: '#00ffff'},
        {start: current + " 23:00", end: current + " 23:59", title: "Sleeping", color: '#0000ff'},
    ];
}
