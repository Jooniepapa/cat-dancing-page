import catSvg from '../assets/images/cat.svg';
import './DancingCat.css';

export default function DancingCat({ isPlaying, speed }) {
  const duration = (1 / speed).toFixed(2);

  return (
    <div className="dancing-cat-wrapper">
      <div
        className={`dancing-cat ${isPlaying ? 'dancing' : 'paused'}`}
        style={{ '--dance-duration': `${duration}s` }}
        role="img"
        aria-label="춤추는 고양이"
      >
        <img src={catSvg} alt="고양이" className="cat-image" />
        {isPlaying && (
          <div className="music-notes" aria-hidden="true">
            <span className="note n1">♪</span>
            <span className="note n2">♫</span>
            <span className="note n3">♩</span>
            <span className="note n4">♬</span>
          </div>
        )}
      </div>
      <div className="stage-floor" />
    </div>
  );
}
