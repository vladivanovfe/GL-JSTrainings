function buildTable(data) {
    let table = document.createElement('table'),
        tr = document.createElement('tr'),
        fields = Object.keys(data[0]);

    fields.forEach(function(text){
        let th = document.createElement('th');
        th.appendChild(document.createTextNode(text));
        tr.appendChild(th);
    })
    table.appendChild(tr);

    data.forEach(function(object){
        let row = document.createElement('tr');
        fields.forEach(function(field){
            let td = document.createElement('td');
            td.appendChild(document.createTextNode(object[field]));
            row.appendChild(td);
        })    
        if (typeof object[field] == "number") {
            td.style.textAlign = "right";
        }
    })
    table.appendChild(row);

    return table;
}