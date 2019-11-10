import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <img src="https://i.imgur.com/KDIDiSE.png" alt="Facebook" />
            <div>
              <span>Meu Perfil</span>
              <i className="material-icons">account_circle</i>
            </div>          
          </nav>
        </header>
      </div>
    )
  }
}
