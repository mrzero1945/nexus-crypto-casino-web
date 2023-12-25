import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HarmBlockThreshold, HarmCategory, GoogleGenerativeAI, ModelParams} from "@google/generative-ai";

// api
const genAI = new GoogleGenerativeAI("AIzaSyAuO775Pfw5Mtqb9dF6Y--_0clihZzZDOI");
interface mySafety {
  category: HarmCategory;
  threshold: HarmBlockThreshold;
}

const safetySettings:mySafety[] = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  }, 
];
const model = genAI.getGenerativeModel({ model: "gemini-pro", safetySettings });

type ChatHistoryItem = {
  role: "user" | "model";
  parts: string;
};


interface ChatOptions {
  history: {
    role: "user" | "model";
    parts: string;
  }[];
  generationConfig: {
    maxOutputTokens:number, 
    temperature: number
  };
  safetySettings: mySafety[]
}


interface NexusChatBotState {

  newMessage: string;
  combinedArray: string[];
  chatOptions: ChatOptions;
}

class NexusChatBot extends Component<{}, NexusChatBotState> {
  constructor(props: any) {
    super(props);
    this.state = {
      newMessage: "",
      combinedArray: [],
      chatOptions : { history: [
        {role: "user", parts: "jika ada yang menanyakan, namamu, jawab bahwa kau 'Nexus Bot' dan aku dikembangkan oleh 'Dani Hermawan'"},
        {role: "model", parts: "ok, boss"}
      ],
      safetySettings:safetySettings ,
      generationConfig: {maxOutputTokens: 2048, temperature: 0.9,} 
    }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async chatBot(prompt: string){
    
    const chat = model.startChat(this.state.chatOptions);
    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  }

  render() {
    return (
      <div className="mt-md-3 mt-2  container text-white">
        <h3 className="text-center">Nexus ChatBot Beta</h3>
        <div className="row d-flex justify-content-center ">
          <div className="col-md-12">
          <ul className="col-10 col-md-auto list-group mx-auto" style={{ width: "500px", height: "400px", overflowY: "scroll", backgroundColor: "#191F2D" }}>
            {this.state.combinedArray.map((message, index) => (
                <div className={`row d-flex ${(index + 1) % 2 === 0 ? "justify-content-end" : "justify-content-start"}`}>
                  <div className={`col-8`}>
                      <li key={index} className={`list-group-item mx-md-3 my-md-2`} style={{ maxWidth: "wrap-content", maxHeight: "wrap-content", borderRadius: "15px" }}>
                      {message}
                      </li>
                  </div>
                </div>
            ))}
          </ul>

          </div>
          <div className="col-md-4 col-10 mt-2 mt-md-2">
            <form onSubmit={this.handleSubmit}>
              <div className="mb-md-2 form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ketik pesan..."
                  value={this.state.newMessage}
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="px-md-5 mt-md-0 mt-2 btn btn-primary">
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  handleChange(event: any) {
    this.setState({ newMessage: event.target.value });
  }

  async handleSubmit(event: any) {
    event.preventDefault();

    // Kirim pesan baru ke server di sini.

    // Setelah pesan berhasil dikirim, tambahkan ke daftar pesan.
    if (this.state.newMessage !== "" && this.state.newMessage.replace(/^\s+/, "").length !== 0 && this.state.newMessage.length !== 300) {
        const botResponse = await this.chatBot(this.state.newMessage);
        const newHistory:ChatHistoryItem[] = [
          { role: "user", parts:  this.state.newMessage.replace(/^\s+/, "")},
          { role: "model", parts: botResponse}
          ]
        ;
        this.setState({
          newMessage: "",
          combinedArray: [...this.state.combinedArray, this.state.newMessage.replace(/^\s+/, ""), botResponse],
           // Update chatOptions with the merged history
          chatOptions: {
            ...this.state.chatOptions,
            history: [...this.state.chatOptions.history, ...newHistory],
          }
        });
      }
      
    
  }
}

export { NexusChatBot };