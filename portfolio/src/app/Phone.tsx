"use client"
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, ThreeEvent, useLoader } from '@react-three/fiber';
import { PerspectiveCamera, Environment, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

interface DeviceCardProps {
  title: string;
  description: string;
  websiteTexture: THREE.Texture;
  isTablet?: boolean;
}

interface Rotation {
  x: number;
  y: number;
}

interface Velocity {
  x: number;
  y: number;
}

interface MousePosition {
  x: number;
  y: number;
  timestamp: number;
}

function Device({ websiteTexture, isTablet = false }: { websiteTexture: THREE.Texture; isTablet?: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState<Rotation>({ x: 0.2, y: 0.3 });
  const [velocity, setVelocity] = useState<Velocity>({ x: 0, y: 0 });
  const mouseHistory = useRef<MousePosition[]>([]);
  const animationRef = useRef<number>(0);

  const dimensions = isTablet 
    ? { width: 2.4, height: 3.2, depth: 0.08, screenWidth: 2.32, screenHeight: 3.1 }
    : { width: 1.5, height: 3.2, depth: 0.08, screenWidth: 1.42, screenHeight: 3.1 };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging && Math.abs(velocity.x) < 0.001 && Math.abs(velocity.y) < 0.001) {
        animationRef.current += 0.004;
      }
    }, 16);
    return () => clearInterval(interval);
  }, [isDragging, velocity]);

  useFrame(() => {
    if (!isDragging && (Math.abs(velocity.x) > 0.0001 || Math.abs(velocity.y) > 0.0001)) {
      setRotation(prev => ({
        x: prev.x + velocity.x,
        y: prev.y + velocity.y
      }));

      setVelocity(prev => ({
        x: prev.x * 0.92,
        y: prev.y * 0.92
      }));
    } else if (!isDragging) {
      const idleY = Math.sin(animationRef.current) * -0.0008;
      
      setRotation(prev => ({
        x: prev.x,
        y: prev.y + idleY
      }));
    }

    if (groupRef.current) {
      groupRef.current.rotation.x = rotation.x;
      groupRef.current.rotation.y = rotation.y;
    }
  });

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setIsDragging(true);
    mouseHistory.current = [{
      x: e.clientX,
      y: e.clientY,
      timestamp: Date.now()
    }];
    setVelocity({ x: 0, y: 0 });
  };

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (isDragging) {
      const now = Date.now();
      const currentPos = { x: e.clientX, y: e.clientY, timestamp: now };
      
      mouseHistory.current.push(currentPos);
      if (mouseHistory.current.length > 5) {
        mouseHistory.current.shift();
      }

      const lastHistoryPos = mouseHistory.current[mouseHistory.current.length - 2];
      if (lastHistoryPos) {
        const deltaX = e.clientX - lastHistoryPos.x;
        const deltaY = e.clientY - lastHistoryPos.y;

        setRotation(prev => ({
          x: prev.x + deltaY * 0.008,
          y: prev.y + deltaX * 0.008
        }));
      }
    }
  };

  const handlePointerUp = () => {
    if (isDragging && mouseHistory.current.length >= 2) {
      const recentMoves = mouseHistory.current.slice(-3);
      let totalDeltaX = 0;
      let totalDeltaY = 0;
      let totalTime = 0;

      for (let i = 1; i < recentMoves.length; i++) {
        totalDeltaX += recentMoves[i].x - recentMoves[i - 1].x;
        totalDeltaY += recentMoves[i].y - recentMoves[i - 1].y;
        totalTime += recentMoves[i].timestamp - recentMoves[i - 1].timestamp;
      }

      if (totalTime > 0) {
        const avgDeltaX = totalDeltaX / recentMoves.length;
        const avgDeltaY = totalDeltaY / recentMoves.length;
        
        setVelocity({
          x: avgDeltaY * 0.012,
          y: avgDeltaX * 0.012
        });
      }
    }
    
    setIsDragging(false);
    mouseHistory.current = [];
  };

  return (
    <group 
      ref={groupRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <RoundedBox 
        args={[dimensions.width, dimensions.height, dimensions.depth]} 
        radius={0.08}
        smoothness={4}
        position={[0, 0, 0]}
        castShadow 
        receiveShadow
      >
        <meshStandardMaterial 
          color="#1a1a4d"
          metalness={0.95}
          roughness={0.05}
          envMapIntensity={2}
        />
      </RoundedBox>

      <RoundedBox
        args={[dimensions.screenWidth, dimensions.screenHeight, 0.001]}
        radius={0.06}
        smoothness={4}
        position={[0, 0, dimensions.depth / 2 + 0.001]}
      >
        <meshStandardMaterial 
          map={websiteTexture}
          emissive="#667eea"
          emissiveIntensity={0.15}
          metalness={0.02}
          roughness={0.02}
        />
      </RoundedBox>

      {!isTablet && (
        <>
          <RoundedBox
            args={[0.25, 0.08, 0.015]}
            radius={0.04}
            smoothness={4}
            position={[0, 1.4, dimensions.depth / 2 + 0.002]}
          >
            <meshStandardMaterial color="#000000" metalness={0.5} roughness={0.3} />
          </RoundedBox>

          <RoundedBox
            args={[0.025, 0.35, 0.06]}
            radius={0.012}
            smoothness={4}
            position={[-dimensions.width / 2 - 0.0125, 0.5, 0]}
          >
            <meshStandardMaterial color="#0f0f3d" metalness={0.98} roughness={0.05} />
          </RoundedBox>

          <RoundedBox
            args={[0.025, 0.2, 0.06]}
            radius={0.012}
            smoothness={4}
            position={[-dimensions.width / 2 - 0.0125, -0.3, 0]}
          >
            <meshStandardMaterial color="#0f0f3d" metalness={0.98} roughness={0.05} />
          </RoundedBox>

          <RoundedBox
            args={[0.025, 0.2, 0.06]}
            radius={0.012}
            smoothness={4}
            position={[-dimensions.width / 2 - 0.0125, -0.6, 0]}
          >
            <meshStandardMaterial color="#0f0f3d" metalness={0.98} roughness={0.05} />
          </RoundedBox>
        </>
      )}

      <pointLight position={[0, 0, 1]} intensity={0.3} color="#667eea" distance={3} />
    </group>
  );
}

function Scene({ websiteTexture, isTablet }: { websiteTexture: THREE.Texture; isTablet: boolean }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
      <Environment preset="city" />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} />
      <spotLight position={[0, 10, 0]} intensity={0.5} angle={0.3} penumbra={1} color="#a78bfa" />
      
      <Device websiteTexture={websiteTexture} isTablet={isTablet} />
    </>
  );
}

function DeviceCard({ title, description, websiteTexture, isTablet = false }: DeviceCardProps) {
  return (
    <div className="relative group">
      <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl shadow-xl overflow-hidden border border-purple-500/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/40">
        <div className="relative z-10 pt-4 px-5 pb-3">
          <h3 className="text-xl font-bold text-white mb-1">
            {title}
          </h3>
          <p className="text-sm text-purple-200/80">
            {description}
          </p>
        </div>
        
        <div className="relative h-[400px] cursor-grab active:cursor-grabbing">
          <Canvas shadows>
            <Scene websiteTexture={websiteTexture} isTablet={isTablet} />
          </Canvas>
          
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
        </div>
        
        <div className="relative z-10 px-5 pb-4 pt-2">
          <div className="flex items-center justify-between text-xs text-purple-300/70">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Interactive
            </span>
            <span className="opacity-60">
              Drag to rotate
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InteractiveDeviceShowcase() {
  const createPlaceholderTexture = (isTablet: boolean): THREE.CanvasTexture => {
    const canvas = document.createElement('canvas');
    canvas.width = isTablet ? 768 : 512;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      throw new Error('Could not get 2D context');
    }
    
    const gradient = ctx.createLinearGradient(0, 0, 0, 1024);
    if (isTablet) {
      gradient.addColorStop(0, '#f093fb');
      gradient.addColorStop(0.5, '#f5576c');
      gradient.addColorStop(1, '#4facfe');
    } else {
      gradient.addColorStop(0, '#667eea');
      gradient.addColorStop(0.5, '#764ba2');
      gradient.addColorStop(1, '#f093fb');
    }
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, 1024);
    
    ctx.fillStyle = 'rgba(255,255,255,0.95)';
    ctx.font = `bold ${isTablet ? 64 : 56}px -apple-system, BlinkMacSystemFont, Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(isTablet ? 'Tablet View' : 'Mobile View', canvas.width / 2, 200);
    
    ctx.font = `${isTablet ? 36 : 32}px -apple-system, BlinkMacSystemFont, Arial`;
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.fillText('Your Website', canvas.width / 2, 270);
    
    ctx.fillStyle = 'rgba(255,255,255,0.15)';
    ctx.shadowColor = 'rgba(0,0,0,0.2)';
    ctx.shadowBlur = 20;
    
    const margin = isTablet ? 60 : 40;
    ctx.fillRect(margin, 350, canvas.width - margin * 2, 180);
    ctx.fillRect(margin, 560, (canvas.width - margin * 3) / 2, 200);
    ctx.fillRect(canvas.width / 2 + margin / 2, 560, (canvas.width - margin * 3) / 2, 200);
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  };

  const phoneTexture = createPlaceholderTexture(false);
  const tabletTexture = createPlaceholderTexture(true);

  // Optional: Eigene Screenshots laden
  // const phoneTexture = useLoader(THREE.TextureLoader, '/phone-screenshot.png');
  // const tabletTexture = useLoader(THREE.TextureLoader, '/tablet-screenshot.png');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
      <DeviceCard
        title="Mobile Experience"
        description="Responsive design for smartphones"
        websiteTexture={phoneTexture}
        isTablet={false}
      />
      
      <DeviceCard
        title="Tablet Experience"
        description="Optimized for larger screens"
        websiteTexture={tabletTexture}
        isTablet={true}
      />
    </div>
  );
}