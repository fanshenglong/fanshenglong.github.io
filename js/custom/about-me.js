fetch("/json_data/record.json").then(res => {
    return res.json();
}).then(records => {
    records.forEach(record => {
        let itemLi = document.createElement("li");
        itemLi.className = "time-axis-item";
        let dataDiv = document.createElement("div");
        dataDiv.className = "time-axis-date";
        dataDiv.textContent = record.date;
        let spanDiv = document.createElement("span");
        dataDiv.append(spanDiv);
        let titleDiv = document.createElement("div");
        titleDiv.className = "time-axis-title";
        titleDiv.textContent = record.title;
        let achievementDiv = document.createElement("div");
        achievementDiv.className = "time-axis-achievement";
        achievementDiv.textContent = record.achievement;
        itemLi.append(dataDiv,titleDiv,achievementDiv);
        document.querySelector(".time-axis").append(itemLi);
    });
});

