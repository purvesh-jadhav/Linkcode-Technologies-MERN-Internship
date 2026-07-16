const input = document.getElementById("user-input");
const btn = document.getElementById("send-btn");
const messages = document.getElementById("messages");


const API_KEY = "";

btn.addEventListener("click", sendMessage);

input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        sendMessage();
    }
});

function addMessage(text, sender){
    const div = document.createElement("div");
    div.className = sender;
    div.innerText = text;
    messages.appendChild(div);

    messages.scrollTop = messages.scrollHeight;
}

async function sendMessage(){

    const text = input.value.trim();

    if(text === "") return;

    addMessage(text,"user");

    input.value = "";

    try{

        const response = await fetch("https://api.groq.com/openai/v1/chat/completions",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer " + API_KEY
            },
            body:JSON.stringify({
                model:"llama-3.3-70b-versatile",
                messages:[
                    {
                        role:"user",
                        content:text
                    }
                ]
            })
        });

        const data = await response.json();

        if(data.error){
            addMessage(data.error.message,"bot");
            return;
        }

        addMessage(data.choices[0].message.content,"bot");

    }
    catch(error){
        console.log(error);
        addMessage("Error connecting to API","bot");
    }

}