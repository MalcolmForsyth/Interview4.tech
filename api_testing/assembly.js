const axios = require("axios"); 
const fs = require("fs");
const { url } = require("inspector");
const assembly = axios.create({
    baseURL: "https://api.assemblyai.com/v2",
    headers: {
        authorization: "9a5a49872617470188698664380c2cce",
        "content-type": "application/json",
        "transfer-encoding": "chunked",
    },
});
const file = "counting2.m4a";
fs.readFile(file, (err, data) => {
    if (err) return console.error(err);

    var url = assembly
        .post("/upload", data)
        .then((res) => res.data['upload_url'])
        .catch((err) => console.error(err));

    var data= url.then(data => {
        return assembly
        .post("/transcript", {
            audio_url: data,
            disfluencies: true
        })
        .then((res) => res.data)
        .catch((err) => console.error(err));

    }).then(async (data) => {
        var id = data.id
        var flag = true
        while (flag){
            var status = assembly
            .get(`/transcript/${id}`)
            .then((res) => res.data.status)
            .catch((err) => console.error(err))
            const status_resp = await status

            flag = status_resp != "completed"
        } 
        var transcript_p = assembly
            .get(`/transcript/${id}`)
            .then((res) => res.data)
            .catch((err) => console.error(err))
        const transcript = await transcript_p

        console.log(transcript)

        
        
    });

    
    
});

