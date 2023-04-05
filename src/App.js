import React from 'react';
import './style.css';
import '@fremtind/jkl-core/core.min.css';
import { MobileLink } from './MobileLink';
import { Link } from 'react-router-dom';

const arr = ['Hello', 'Hello', 'Hello'];

export default function App() {
  return (
    <section className="App">
      <MobileLink>
        <ul>
          {arr.map(el => {
            return <li>{el}</li>;
          })}
        </ul>
      </MobileLink>
    </section>
  );
}

