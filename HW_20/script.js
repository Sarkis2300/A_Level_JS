let records = [];

class Record{
    constructor(title, body){
        this._title = title;
        this._body = body;
    }
    delete(){
        this._isDeleted = true;
    }
    restore(){
        this._isDeleted = false;
    }
    get isDeleted(){
        return this._isDeleted;
    }
    get title(){
        return this._isDeleted ? '' : this._title;
    }
    get body(){
        return this._isDeleted ? '' : this._body;
    }
}



function render(records){
    let id = 1;
    const tbody = document.querySelector('tbody');

    tbody.innerHTML = '';
    for (let record of records){
        tbody.innerHTML += renderRecord(id++,record);
    }
}

function renderRecord(id, record) {

    const deleteButton= `
    <button class="btn-delete" style="background-color: coral" data-id="${id}">delete</button>
    `;

    const restoreButton= `
    <button class="btn-restore" style="background-color: green" data-id="${id}">restore</button>
    `;

    const button = record.isDeleted ? restoreButton : deleteButton;

    return `
    <tr>
        <td>${id}</td>
        <td>${record.title}</td>
        <td>${record.body}</td>
        <td>
            ${button}
        </td>
    </tr>
    `;
}

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

xhr.onload = function (){
    for(let object of JSON.parse(xhr.response)){
        let record = new Record(object.title, object.body);
        records.push(record);
    }
    render(records);
}

xhr.send();

document.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains("btn-delete")) {
       records[target.dataset.id-1].delete();
       console.log(records[target.dataset.id-1]);
       render(records);
    }
});

document.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains("btn-restore")) {
       records[target.dataset.id-1].restore();
       render(records);
    }
});

const form = document.getElementById('form');
const $title = document.getElementById('title');
const $body = document.getElementById('body');

form.addEventListener('submit', function(event){
    event.preventDefault();
    let record = new Record(title.value, body.value);
    records.unshift(record);
    title.value = '';
    body.value = '';
    render(records);
})