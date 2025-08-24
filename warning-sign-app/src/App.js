import React, { useState, useEffect } from 'react';
import './App.css';
import WarningSignModal from './components/WarningSignModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 마우스 위치 추적
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="App">
      {/* 동적 배경 그라데이션 */}
      <div 
        className="dynamic-bg"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(102, 126, 234, 0.8) 0%, 
            rgba(118, 75, 162, 0.6) 50%, 
            rgba(102, 126, 234, 0.4) 100%)`
        }}
      />

      <header className="App-header">
        <h1>경고문 제보 시스템</h1>
        <p>골목의 다양한 경고문을 수집하는 플랫폼입니다.</p>
        <button 
          className="open-modal-btn"
          onClick={() => setIsModalOpen(true)}
        >
          경고문 제보하기
        </button>
      </header>

      <WarningSignModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

export default App;
