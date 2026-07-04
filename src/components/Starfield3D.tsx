import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Starfield3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create Scene, Camera, and WebGL Renderer
    const scene = new THREE.Scene();
    
    // Add space fog to create deep atmospheric density
    scene.fog = new THREE.FogExp2(0x03050c, 0.0015);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 150;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Track mouse coordinates for dampening 3D parallax
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    
    // Create Stars Particle System
    const starsCount = 2800;
    const starsGeometry = new THREE.BufferGeometry();
    const starsPositions = new Float32Array(starsCount * 3);
    const starsColors = new Float32Array(starsCount * 3);
    const starsSizes = new Float32Array(starsCount);

    // Celestial color palettes (white-blue, deep indigo, neon cyan, warm gold)
    const colors = [
      new THREE.Color(0xffffff), // White
      new THREE.Color(0xa5f3fc), // Cyan light
      new THREE.Color(0x38bdf8), // Sky blue
      new THREE.Color(0x818cf8), // Indigo light
      new THREE.Color(0xfef08a)  // Gold light
    ];

    for (let i = 0; i < starsCount; i++) {
      // Spread stars in a wide spherical shell or deep volume
      const distance = 100 + Math.random() * 600;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      starsPositions[i * 3] = distance * Math.sin(phi) * Math.cos(theta);
      starsPositions[i * 3 + 1] = distance * Math.sin(phi) * Math.sin(theta);
      starsPositions[i * 3 + 2] = distance * Math.cos(phi);

      // Distribute colors randomly with bias towards cool white/blue
      const colorIndex = Math.random() < 0.6 ? 0 : Math.floor(Math.random() * colors.length);
      const chosenColor = colors[colorIndex];
      starsColors[i * 3] = chosenColor.r;
      starsColors[i * 3 + 1] = chosenColor.g;
      starsColors[i * 3 + 2] = chosenColor.b;

      // Random stellar sizes
      starsSizes[i] = 1.0 + Math.random() * 3.5;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(starsColors, 3));

    // Custom Canvas round particle shader map
    const starCanvas = document.createElement('canvas');
    starCanvas.width = 16;
    starCanvas.height = 16;
    const ctx = starCanvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.2, 'rgba(230,245,255,1)');
      gradient.addColorStop(0.5, 'rgba(100,200,255,0.4)');
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 16, 16);
    }
    const starTexture = new THREE.CanvasTexture(starCanvas);

    const starsMaterial = new THREE.PointsMaterial({
      size: 1.8,
      vertexColors: true,
      map: starTexture,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    // Create a rotating dust cluster nebula at the core (giving beautiful 3D structure)
    const nebulaCount = 1200;
    const nebulaGeometry = new THREE.BufferGeometry();
    const nebulaPositions = new Float32Array(nebulaCount * 3);
    const nebulaColors = new Float32Array(nebulaCount * 3);

    const nebColors = [
      new THREE.Color(0x06b6d4), // Cyan
      new THREE.Color(0x6366f1), // Indigo
      new THREE.Color(0xec4899), // Pink/Magenta
    ];

    for (let i = 0; i < nebulaCount; i++) {
      // Create a flat spiral/ring structure
      const r = 20 + Math.random() * 120;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 20 * (1.2 - r / 120); // dense center

      nebulaPositions[i * 3] = r * Math.cos(angle);
      nebulaPositions[i * 3 + 1] = height;
      nebulaPositions[i * 3 + 2] = r * Math.sin(angle);

      // Interpolate colors for a beautiful radial gradient
      const factor = r / 120;
      const col = nebColors[0].clone().lerp(nebColors[Math.floor(factor * (nebColors.length - 1)) + 1] || nebColors[1], factor);
      
      nebulaColors[i * 3] = col.r;
      nebulaColors[i * 3 + 1] = col.g;
      nebulaColors[i * 3 + 2] = col.b;
    }

    nebulaGeometry.setAttribute('position', new THREE.BufferAttribute(nebulaPositions, 3));
    nebulaGeometry.setAttribute('color', new THREE.BufferAttribute(nebulaColors, 3));

    // Glow texture for nebulae
    const nebulaCanvas = document.createElement('canvas');
    nebulaCanvas.width = 62;
    nebulaCanvas.height = 62;
    const nebCtx = nebulaCanvas.getContext('2d');
    if (nebCtx) {
      const gradient = nebCtx.createRadialGradient(31, 31, 0, 31, 31, 31);
      gradient.addColorStop(0, 'rgba(255,255,255,0.7)');
      gradient.addColorStop(0.2, 'rgba(150,180,255,0.35)');
      gradient.addColorStop(0.6, 'rgba(50,100,255,0.08)');
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      nebCtx.fillStyle = gradient;
      nebCtx.fillRect(0, 0, 62, 62);
    }
    const nebulaTexture = new THREE.CanvasTexture(nebulaCanvas);

    const nebulaMaterial = new THREE.PointsMaterial({
      size: 5.5,
      vertexColors: true,
      map: nebulaTexture,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const nebula = new THREE.Points(nebulaGeometry, nebulaMaterial);
    // Rotate nebula slightly to sit as an elegant background angle
    nebula.rotation.x = Math.PI / 5;
    scene.add(nebula);

    // Mouse tracker event listener on window
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize coordinates to [-1, 1] range
      mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Slow constant rotations
      starField.rotation.y = elapsedTime * 0.015;
      starField.rotation.x = elapsedTime * 0.005;

      nebula.rotation.y = elapsedTime * 0.022;

      // Smooth mouse tracking interpolation (Damping)
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Adjust camera coordinates for subtle 3D parallax depth
      camera.position.x = mouse.x * 25;
      camera.position.y = mouse.y * 25;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Clean up to prevent memory leaks or context duplication on hot-reloading
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      
      // Dispose Geometries, Materials & Textures
      starsGeometry.dispose();
      starsMaterial.dispose();
      starTexture.dispose();
      
      nebulaGeometry.dispose();
      nebulaMaterial.dispose();
      nebulaTexture.dispose();

      renderer.dispose();
      
      if (containerRef.current && renderer.domElement.parentNode) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#03050c]"
      style={{ mixBlendingMode: 'screen' }}
      id="3d-interactive-starfield"
    />
  );
}
