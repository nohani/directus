import { Directus } from '@directus/sdk';

const directus = new Directus('https://assignment-nicole.directus.app/');

async function loadData () {
    const publicData = await directus.items('transcripts').readByQuery({ sort: ['id'] });
    console.log(publicData)
}

window.addEventListener("load", () => {
data = loadData().data

for (let i = 0; i < data.length; i++){
    document.createElement("div");

    let l1 = document.createElement("li");
    let l2 = document.createElement("li");
    let l3 = document.createElement("li");

    let id = document.createElement(`ID: ${data[i].id}`)
    let request_id = document.createElement(`Request ID: ${data[i].request_id}`)
    let transcript = document.createElement(`Transcript: ${data[i].transcript}`)

    l1.appendChild(id);
    l2.appendChild(request_id);
    l3.appendChild(transcript);
}
})