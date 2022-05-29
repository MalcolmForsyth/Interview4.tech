import React from "react";
import './RecButton.css';
import Transcibed from "../../views/globals";
const axios = require("axios"); 

const backend_path = "http://127.0.0.1:5000/transcribe"

class RecButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {status: "not started", button_name: "Record"};
        
        this.audioChunks = []    

        navigator.mediaDevices.getUserMedia({audio:true})
        .then(stream => {this.handlerFunction(stream)})

        const { Configuration, OpenAIApi } = require("openai");
        
        const configuration = new Configuration({
            apiKey: '',
        });
        const openai = new OpenAIApi(configuration);

        
        this.assembly = axios.create({
        baseURL: "https://api.assemblyai.com/v2",
        headers: {
            authorization: "9a5a49872617470188698664380c2cce",
            "content-type": "application/json",
            //"transfer-encoding": "chunked",
        },
});
        
        this.handleClick = this.handleClick.bind(this);
    }
    audioChunks = []

    
    

    handlerFunction(stream) {
        this.rec = new MediaRecorder(stream, {type: 'video/webm'});
        this.rec.ondataavailable = e => {
            
            this.audioChunks.push(e.data)
            if (this.rec.state === "inactive"){
                let blob = new Blob(this.audioChunks, {type:this.rec.mimeType});
                let myUrl = URL.createObjectURL(blob)
                //let blob = new File(tmp,"C:\\Users\\ghoey\\test_audio.mp3", {type:'audio/mpeg-3'});
                console.log(blob)
                this.sendData(blob)
            }
        }

        
        /*
        this.rec.onstop = function(e) {
            console.log("data available after MediaRecorder.stop() called.");
        
            //var audio = document.createElement('audio');
            //audio.controls = true;
           
            console.log("recorder stopped");
          }
          */
    }


    sendData(blob) {
       
        /*
        console.log(blob)
        var reader = new FileReader();
        reader.readAsArrayBuffer(blob);
        reader.onloadend = (event) => {
        // The contents of the BLOB are in reader.result:
            console.log(reader.result);
            axios({
                method: 'POST',
                url: backend_path,
                data: {
                  audio: reader.result
                }, 
                headers: {
                    "content-type": "application/json"
                }
              }).then((response) => {
                console.log(response);
              })
        }
        */

        var reader = new FileReader();
        reader.readAsArrayBuffer(blob);
        reader.onloadend = (event) => { 
           
            var data = reader.result
            console.log(data)
            console.log(reader.result)
          
            var url_p = this.assembly
                .post("/upload", data)
                .then((res) => { 
                    console.log("b")
                    console.log(data)
                    return res.data['upload_url']

            })
                .catch((err) => console.error(err));
        
            var pending_response = url_p.then(url => {
                return this.assembly
                .post("/transcript", {
                    audio_url: url
                })
                .then((res) => { 
                    console.log(res.data)
                    return res.data})
                .catch((err) => console.error(err));
        
            }).then(async (pending_response) => {
                var id = pending_response.id
                var flag = true
                while (flag){
                    var status = this.assembly
                    .get(`/transcript/${id}`)
                    .then((res) => res.data)
                    .catch((err) => console.error(err))
                    const status_resp = await status
                    console.log(status_resp)
                    flag = status_resp.status !== "completed"

                   if (status_resp.status === "error") {
                       console.log("error reached")
                       console.log(status_resp)
                       break;
                   }
                } 
                var transcript_p = this.assembly
                    .get(`/transcript/${id}`)
                    .then((res) => res.data)
                    .catch((err) => console.error(err))
                const transcript = await transcript_p
                // console.log(transcript.text)
                Transcibed.text = transcript.text;
                this.setState({
                    button_name: "Done",
                  });

                      
            });
        }
       
        
    }

    handleClick() {
        if (this.state.status === "not started") {
            this.setState({
                status: "recording", button_name: "Stop"
              });
            
            this.rec.start()
 
        
        } else if (this.state.status === "recording") {
            
            this.setState({
                status: "not started", button_name: "Wait"
            });
            this.rec.stop()
           
            
        } else if (this.state.status === "done") {
            this.setState({
                status: "not started",
              });
        }
    }

    render() {
        
        return (

            <div className={"rec-button"} onClick={this.handleClick}>
            <div> {this.state.button_name} </div>
            </div>

        );
    }
}

export default RecButton;
export  {Transcibed};