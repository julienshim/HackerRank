function timeConversion(s) {
    let hour = parseInt(s[0]+s[1]);
    let day = s[s.length-2]+s[s.length-1];
    let military = ""
    for (let i = 2; i < s.length - 2; i++) {
        military += s[i];
    }
    if (day === 'AM') {
        return hour < 12 ? ("0" + hour) + military : ("0" + (hour - 12)) + military;
    } else {
        return hour < 12 ? (hour + 12) + military : hour + military;
    }
}

timeConversion('12:00:00AM');
timeConversion('03:00:00AM');
timeConversion('06:00:00AM');
timeConversion('09:00:00AM');
timeConversion('12:00:00PM');
timeConversion('03:00:00PM');
timeConversion('06:00:00PM');
timeConversion('09:00:00PM');