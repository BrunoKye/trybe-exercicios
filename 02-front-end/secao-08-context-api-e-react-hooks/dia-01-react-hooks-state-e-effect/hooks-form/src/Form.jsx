import React, { useState } from 'react'
import './index.css';

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [city, setCity] = useState('');
  const [module, setModule] = useState('');

  return (
    <div>
      <form className="form-container">
        <input
          type="text"
          placeholder="Nome Completo"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
        />

        <input
          type="number"
          placeholder="Idade"
          value={ age }
          onChange={ ({ target }) => setAge(target.value) }
        />  

        <input
          type="text"
          placeholder="Cidade"
          value={ city }
          onChange={ ({ target }) => setCity(target.value) }
        />

        <div className="modules-container">
          <label for="fundamentals">
            <input 
              type="radio"
              id="fundamentals"
              name="module"
              value="Fundamentos"
              checked={ module === 'Fundamentos' }
              onChange={ ({ target }) => setModule(target.value) }
            />
            Fundamentos
          </label>

          <label for="front-end">
            <input 
              type="radio"
              id="front-end"
              name="module"
              value="Front-end"
              checked={ module === 'Front-end' }
              onChange={ ({ target }) => setModule(target.value) }
            />
            Front-end
          </label>

          <label for="back-end">
            <input 
              type="radio"
              id="back-end"
              name="module"
              value="Back-end"
              checked={ module === 'Back-end' }
              onChange={ ({ target }) => setModule(target.value) }
            />
            Back-end
          </label>

          <label for="computer-science">
            <input 
              type="radio"
              id="computer-science"
              name="module"
              value="Ciência da Computação"
              checked={ module === 'Ciência da Computação' }
              onChange={ ({ target }) => setModule(target.value) }
            />
            Ciência da Computação
          </label>
        </div>

        <button type="button">
          Enviar
        </button>
      </form>
    </div>
  )
}

export default Form;
