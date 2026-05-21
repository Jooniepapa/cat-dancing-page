import './styles/global.css';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';
import './App.css';

export default function App() {
  const { isPlaying, speed, toggle, changeSpeed } = useAnimation();

  return (
    <main className="app">
      <h1 className="title">🐱 댄싱 캣</h1>
      <p className="subtitle">{isPlaying ? '신나게 춤추는 중!' : '쉬는 중...'}</p>
      <DancingCat isPlaying={isPlaying} speed={speed} />
      <AnimationControls
        isPlaying={isPlaying}
        speed={speed}
        onToggle={toggle}
        onSpeedChange={changeSpeed}
      />
    </main>
  );
}
