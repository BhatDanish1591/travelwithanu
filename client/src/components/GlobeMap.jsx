import React, { useRef, useEffect, useState, useMemo } from 'react';
import Globe from 'react-globe.gl';

const LOCATIONS = [
  { name: 'Srinagar', lat: 34.0837, lng: 74.7973, color: '#0ea5e9', desc: 'Dal Lake · Houseboats' },
  { name: 'Gulmarg', lat: 34.0494, lng: 74.3800, color: '#3b82f6', desc: 'Skiing · Gondola' },
  { name: 'Pahalgam', lat: 34.0150, lng: 75.3150, color: '#22c55e', desc: 'Betab Valley · Rivers' },
  { name: 'Sonamarg', lat: 34.3000, lng: 75.3000, color: '#eab308', desc: 'Glaciers · Meadows' },
  { name: 'Doodhpathri', lat: 33.8667, lng: 74.5500, color: '#64748b', desc: 'Milky Streams' },
  { name: 'Yusmarg', lat: 33.8291, lng: 74.6644, color: '#a855f7', desc: 'Pine Forests' },
  { name: 'Gurez', lat: 34.6333, lng: 74.8333, color: '#ef4444', desc: 'Remote Valley' }
];

const GlobeMap = () => {
  const globeRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 800, height: 500 });
  const containerRef = useRef();

  useEffect(() => {
    // Zoom in to Kashmir on load
    if (globeRef.current) {
      globeRef.current.pointOfView({ lat: 32.5, lng: 75.0, altitude: 0.5 }, 2000);
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight || 500
        });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const htmlElementsData = useMemo(() => LOCATIONS, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '500px', borderRadius: '1.5rem', overflow: 'hidden', background: '#e0f2fe', position: 'relative', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
      <Globe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundColor="#f0fdf4"
        htmlElementsData={htmlElementsData}
        htmlElement={(d) => {
          const el = document.createElement('div');
          el.innerHTML = `
            <div style="background: rgba(255,255,255,0.95); padding: 8px 16px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); cursor: pointer; transform: translate(-50%, -120%); display: flex; flex-direction: column; align-items: center; border: 2px solid ${d.color}; pointer-events: auto;">
              <div style="color: ${d.color}; font-weight: 800; font-size: 15px; margin-bottom: 2px;">${d.name}</div>
              <div style="color: #64748b; font-size: 12px; font-weight: 500;">${d.desc}</div>
            </div>
          `;
          el.style.pointerEvents = 'none';
          
          const dot = document.createElement('div');
          dot.style.position = 'absolute';
          dot.style.width = '16px';
          dot.style.height = '16px';
          dot.style.borderRadius = '50%';
          dot.style.background = d.color;
          dot.style.border = '3px solid white';
          dot.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
          dot.style.transform = 'translate(-50%, -50%)';
          el.appendChild(dot);
          
          return el;
        }}
      />
      
      {/* Overlay controls or title could go here */}
      <div style={{ position: 'absolute', top: '24px', left: '24px', pointerEvents: 'none' }}>
        <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#1e293b', background: 'rgba(255,255,255,0.8)', padding: '8px 16px', borderRadius: '8px', backdropFilter: 'blur(4px)' }}>
          🌍 Interactive 3D Globe
        </h3>
      </div>
    </div>
  );
};

export default GlobeMap;
