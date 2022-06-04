import React, { Component } from 'react'
import logo from './logo.png'
import './App.css'

class Chats extends Component<any> {
  render () {
    return (
      <React.Fragment>
        {this.props.chatList.map((chat: any, i: any) => {
          if (i === 4) {
            // Simulate an error
            throw new Error('I crashed!')
          }

          return (
            <li key={i} className='chat-bubble'>
              {chat}
            </li>
          )
        })}
      </React.Fragment>
    )
  }
}

class App extends Component {
  chatThreadRef = React.createRef<any>()

  state = {
    points: 10,
    chatList: ['Hey', 'Hello', 'Hi']
  }

  _handleAddChat = () => {
    this.setState((prevState: any) => ({
      chatList: [...prevState.chatList, 'Hello!!!']
    }))
  }

  getSnapshotBeforeUpdate (prevProps: any, prevState: any) {
    if (this.state.chatList > prevState.chatList) {
      const chatThreadRef = this.chatThreadRef.current as any
      return chatThreadRef.scrollHeight - chatThreadRef.scrollTop
    }
    return null
  }

  componentDidUpdate (prevProps: any, prevState: any, snapshot: any) {
    if (snapshot !== null) {
      const chatThreadRef = this.chatThreadRef.current as any

      console.log({
        snapshot,
        scrollTop: chatThreadRef.scrollTop,
        scrollHeight: chatThreadRef.scrollHeight
      })

      chatThreadRef.scrollTop = chatThreadRef.scrollHeight - snapshot

      console.log({
        snapshot,
        scrollTop: chatThreadRef.scrollTop,
        scrollHeight: chatThreadRef.scrollHeight
      })
    }
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>You've scored {this.state.points} points.</p>
        </header>
        <section className='App-chat'>
          <p className='chat-header'>
            Football Chat{' '}
            <button className='chat-btn' onClick={this._handleAddChat}>
              Add Chat
            </button>
          </p>
          <ul className='chat-thread' ref={this.chatThreadRef}>
            <Chats chatList={this.state.chatList} />
          </ul>
        </section>
      </div>
    )
  }
}

export default App
