import './AnimationControls.css';

const SPEED_OPTIONS = [
  { label: '느리게', value: 0.5 },
  { label: '보통', value: 1 },
  { label: '빠르게', value: 2 },
];

export default function AnimationControls({ isPlaying, speed, onToggle, onSpeedChange }) {
  return (
    <div className="controls" role="group" aria-label="애니메이션 제어">
      <button
        className={`btn-toggle ${isPlaying ? 'playing' : 'paused'}`}
        onClick={onToggle}
        aria-pressed={isPlaying}
      >
        {isPlaying ? '⏸ 멈추기' : '▶ 춤추기'}
      </button>

      <div className="speed-controls" role="group" aria-label="속도 선택">
        {SPEED_OPTIONS.map(({ label, value }) => (
          <button
            key={value}
            className={`btn-speed ${speed === value ? 'active' : ''}`}
            onClick={() => onSpeedChange(value)}
            aria-pressed={speed === value}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
