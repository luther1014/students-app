export class MessageService {
    messages = []

    addMessage(msg) {
        this.messages.push(msg)
    }

    getAllMessages() {
        return this.messages.slice();
    }
}