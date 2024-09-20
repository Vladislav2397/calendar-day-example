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
    let days = [];

    for (let i = 0; i < 7; ++i) {
        let day = new Date();
        let diff = i - day.getDay();
        day.setDate(day.getDate() + diff);
        days[i] = day.getFullYear() + "-" + _pad(day.getMonth()+1) + "-" + _pad(day.getDate());
    }

    console.log('days', days);

    const current = new Date().toISOString().slice(0, 10)

    console.log('current', current);

    return [
        {start: current + " 00:00", end: current + " 07:00", resourceId: 1, title: "Sleeping", color: '#0000ff'},
        {start: current + " 07:00", end: current + " 07:30", resourceId: 2, title: "Eating", color: '#ff0000'},
        {start: current + " 07:30", end: current + " 09:00", resourceId: 3, title: "Freetime", color: '#00ff00'},
        {start: current + " 09:00", end: current + " 09:30", resourceId: 2, title: "Eating", color: '#ff0000'},
        {start: current + " 09:30", end: current + " 10:00", resourceId: 3, title: "Freetime", color: '#00ff00'},
        {start: current + " 10:00", end: current + " 13:00", resourceId: 4, title: "Working", color: '#000000'},
        {start: current + " 14:00", end: current + " 19:00", resourceId: 4, title: "Working", color: '#000000'},
        {start: current + " 19:00", end: current + " 22:00", resourceId: 3, title: "Freetime", color: '#00ff00'},
        {start: current + " 22:00", end: current + " 23:00", resourceId: 3, title: "Nongadgettime", color: '#00ffff'},
        {start: current + " 23:00", end: current + " 23:59", resourceId: 1, title: "Sleeping", color: '#0000ff'},
    ];
}

function _pad(num) {
    let norm = Math.floor(Math.abs(num));
    return (norm < 10 ? '0' : '') + norm;
}