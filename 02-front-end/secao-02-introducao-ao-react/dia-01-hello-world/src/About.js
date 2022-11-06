import React from 'react';

class About extends React.Component {
  render() {
    return (
        <div>
            <h1>{'Bruno Ferreira'}</h1>
            <p>{'Opa, eu gosto de jogar no PC e no Celular, nos tempos livres também assisto animes.'}</p>

            <h2>{'Minhas Habilidades'}</h2>
            <ul>
                <li>{'HTML'}</li>
                <li>{'CSS'}</li>
                <li>{'JavaScript'}</li>
            </ul>
        </div>
    )
  }
}

export default About;