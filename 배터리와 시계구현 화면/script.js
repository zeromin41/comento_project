let batteryLevel = 100;
let alarms = [];
let memoList = [];

function updateBattery() {
    const batteryElement = document.getElementById('battery');
    const batteryLevelText = document.getElementById('battery-text');

    batteryElement.style.width = `${batteryLevel}%`;
    batteryLevelText.innerText = `배터리: ${batteryLevel}%`;

    if (batteryLevel === 0) {
        document.getElementById('clock').style.backgroundColor = 'black';
    }
}

function decreaseBattery() {
    if (batteryLevel > 0) {
        batteryLevel -= 1;
        updateBattery();
    }
}

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
}

function addAlarm() {
    const alarmTime = document.getElementById('alarmTime').value;
    if (alarms.length < 3 && alarmTime !== '') {
        alarms.push(alarmTime);
        updateAlarms();
    }
}

function updateAlarms() {
    const alarmsContainer = document.getElementById('alarms');
    alarmsContainer.innerHTML = '';
    alarms.forEach(alarm => {
        const alarmItem = document.createElement('div');
        alarmItem.innerText = alarm;
        alarmsContainer.appendChild(alarmItem);
    });
}

function addMemo() {
    const memoText = document.getElementById('memoText').value;
    if (memoText !== '') {
        memoList.push(memoText);
        updateMemoList();
    }
}

function updateMemoList() {
    const memoListContainer = document.getElementById('memoList');
    memoListContainer.innerHTML = '';
    memoList.forEach(memo => {
        const memoItem = document.createElement('li');
        memoItem.innerText = memo;
        memoListContainer.appendChild(memoItem);
    });
}

updateBattery();
setInterval(decreaseBattery, 1000);
setInterval(updateClock, 1000);
