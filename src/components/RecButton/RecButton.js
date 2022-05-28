import React from "react";
import './RecButton.css';

const axios = require("axios"); 

class RecButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {status: "not started", button_name: "start recording"};
        
        navigator.mediaDevices.getUserMedia({audio:true})
        .then(stream => {this.handlerFunction(stream)})


        
        this.assembly = axios.create({
        baseURL: "https://api.assemblyai.com/v2",
        headers: {
            authorization: "9a5a49872617470188698664380c2cce",
            "content-type": "application/json",
            "transfer-encoding": "chunked",
        },
});
        
        this.handleClick = this.handleClick.bind(this);
    }
    audioChunks = []

    handlerFunction(stream) {
        this.rec = new MediaRecorder(stream);
        this.rec.ondataavailable = e => {
            this.audioChunks.push(e.data);
            if (this.rec.state === "inactive"){
                let blob = new Blob(this.audioChunks, {type:'audio/mpeg-3'});
                let myUrl = URL.createObjectURL(blob)
                //let blob = new File(tmp,"C:\\Users\\ghoey\\test_audio.mp3", {type:'audio/mpeg-3'});
                
                this.sendData(this.audioChunks)
            }
        }
    }

    sendData(data) {
        
            var url = this.assembly
                .post("/upload", data)
                .then((res) => res.data['upload_url'])
                .catch((err) => console.error(err));
        
            var data = url.then(data => {
                return this.assembly
                .post("/transcript", {
                    audio_url: data
                })
                .then((res) => res.data)
                .catch((err) => console.error(err));
        
            }).then(async (data) => {
                var id = data.id
                var flag = true
                while (flag){
                    var status = this.assembly
                    .get(`/transcript/${id}`)
                    .then((res) => res.data.status)
                    .catch((err) => console.error(err))
                    const status_resp = await status
        
                    flag = status_resp !== "completed"
                } 
                var transcript_p = this.assembly
                    .get(`/transcript/${id}`)
                    .then((res) => res.data)
                    .catch((err) => console.error(err))
                const transcript = await transcript_p
        
                this.setState({
                    button_name: transcript.text
                  });
                      
            });                       
    }

    handleClick() {
        if (this.state.status === "not started") {
            this.setState({
                status: "recording"
              });
            this.audioChunks = []    
            this.rec.start()
 
        
        } else if (this.state.status === "recording") {
            
            this.setState({
                status: "not started"
            });

            this.rec.stop()
        } else if (this.state.status === "done") {
            //grey it out or something
            this.setState({
                status: "not started"
              });
        }
    }

    render() {
        
        return (
            <p>
                <button onClick={this.handleClick}>{this.state.button_name}</button>
            </p>

        );
    }
}

export default RecButton;