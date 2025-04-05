let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;
    text_speak.lang="bn-wb";
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    console.log(hours);
    if(hours>=0 && hours<12){
    
        speak("Good Morning!")
    }
    else if(hours>=12 && hours<17){
        
        speak("Good Afternoon!")
    }
    else{
        
        speak("Good Evening!")
    }
}
window.addEventListener("load",()=>{
    wishMe()
})
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
    let transcript = event.results[event.resultIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
};

recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    speak("Sorry, I couldn't understand that. Please try again.");
};

btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display="none"
    voice.style.display="block"
});

function takeCommand(message) {
    btn.style.display="flex"
    voice.style.display="none"
    if (message.includes("hello")||message.includes("hi")||message.includes("hey")) {
        speak("Hello! How can I help you today ?");
    } else if (message.includes("who are you")) {
        speak("Hello human, I am Bob, your virtual AI assistant launched by Tiiithhhi.");
    } else if (message.includes("open youtube")) {
        speak("Opening YouTube");
        window.open("https://www.youtube.com/");
    } 
    else if (message.includes("open facebook")) {
        speak("Opening facebook");
        window.open("https://www.facebook.com/");
    }
    else if (message.includes("open google")) {
        speak("Opening google");
        window.open("https://www.google.com/");
    }
    else if (message.includes("open Instagram")) {
        speak("Opening Instagram");
        window.open("https://www.instagram.com/");
        
    }
    else if (message.includes("open twitter")) {
        speak("Opening Twitter");   
        window.open("https://www.twitter.com/");
    }
    else if (message.includes("open calculator")) {
        speak("Opening Calculator");
        window.open("calculator://");   
    }
    else if (message.includes("time")) {
        let time=new Date().toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' });
        let finalText="The current time is"+time
        speak(finalText);
    }
    else if (message.includes("Date")||message.includes("Day")) {
        let date=new Date().toLocaleDateString([], { year: 'numeric', month: 'numeric', day: 'numeric' });
        let finalText="The current date is"+date
        speak(finalText);
    }
    else if (message.includes("open whatsapp")) {
        speak("Opening whatsapp");
        window.open("https://web.whatsapp.com/");  
    }
    else {
        let finalText="this is what I found for your search"+message.replace("bob","")||message.replace("bob","")
        speak(finalText)
        window.open('https://www.google.com/search?q='+message.replace("bob",""));
    }
}
