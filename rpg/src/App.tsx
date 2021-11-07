import { useEffect } from 'react';
import * as C from './App.styles';
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

const App = () => {
  const char = useCharacter('Aubrey');
  const char2 = useCharacter('Beca');
  const char3 = useCharacter('Chloe');
  const char4 = useCharacter('Emily');
  const char5 = useCharacter('Stacie');

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.code) {
      case 'ArrowLeft':
        char.moveLeft();
      break;
      case 'ArrowUp':
        char.moveUp();
      break;
      case 'ArrowRight':
        char.moveRight();
      break;
      case 'ArrowDown':
        char.moveDown();
      break;
      case 'KeyA':
        char2.moveLeft();
      break;
      case 'KeyW':
        char2.moveUp();
      break;
      case 'KeyD':
        char2.moveRight();
      break;
      case 'KeyS':
        char2.moveDown();
      break;
      case 'KeyF':
        char3.moveLeft();
      break;
      case 'KeyT':
        char3.moveUp();
      break;
      case 'KeyH':
        char3.moveRight();
      break;
      case 'KeyG':
        char3.moveDown();
      break;
      case 'KeyJ':
        char4.moveLeft();
      break;
      case 'KeyI':
        char4.moveUp();
      break;
      case 'KeyL':
        char4.moveRight();
      break;
      case 'KeyK':
        char4.moveDown();
      break;
      case 'Digit1':
      case 'Numpad1':
        char5.moveLeft();
      break;
      case 'Digit5':
      case 'Numpad5':
        char5.moveUp();
      break;
      case 'Digit3':
      case 'Numpad3':
        char5.moveRight();
      break;
      case 'Digit2':
      case 'Numpad2':
        char5.moveDown();
      break;
    }
  }

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side} name={char.name} />
        <Character x={char2.x} y={char2.y} side={char2.side} name={char2.name} />
        <Character x={char3.x} y={char3.y} side={char3.side} name={char3.name} />
        <Character x={char4.x} y={char4.y} side={char4.side} name={char4.name} />
        <Character x={char5.x} y={char5.y} side={char5.side} name={char5.name} />
      </C.Map>       
    </C.Container>
  );
}

export default App;