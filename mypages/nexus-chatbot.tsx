import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const {GoogleGenerativeAI} = require("@google/generative-ai");
// api
const genAI = new GoogleGenerativeAI("AIzaSyAuO775Pfw5Mtqb9dF6Y--_0clihZzZDOI");


interface NexusChatBotState {

  newMessage: string;
  combinedArray: string[];
}

class NexusChatBot extends Component<{}, NexusChatBotState> {
  constructor(props: any) {
    super(props);
    this.state = {
      newMessage: "",
      combinedArray: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async chatBot(prompt: string){
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
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
          <ul className="col-10 col-md-auto list-group mx-auto" style={{ maxWidth: "400px", height: "400px", overflowY: "scroll", backgroundColor: "#191F2D" }}>
            {this.state.combinedArray.map((message, index) => (
                <div className={`${index % 2 ? "d-flex justify-content-end" : "d-flex justify-content-start"} row`}>
                <div className={`col-auto`}>
                    <li key={index} className={`px-md-3 my-3 mx-3 mx-md-3 my-md-3 list-group-item`} style={{ maxWidth: "wrap-content", maxHeight: "wrap-content", borderRadius: "15px" }}>
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
        this.setState({
          newMessage: "",
          combinedArray: [...this.state.combinedArray, this.state.newMessage.replace(/^\s+/, ""), botResponse]
        });
      }
      
    
  }
}

export { NexusChatBot };