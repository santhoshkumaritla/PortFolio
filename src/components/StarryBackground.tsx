import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  brightness: number;
}

const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size to window size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Create stars with more professional distribution
    const stars: Star[] = Array.from({ length: 150 }, () => {
      const size = Math.random();
      return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
        size: size < 0.8 ? Math.random() * 1 + 0.2 : Math.random() * 2 + 1, // More small stars, few larger ones
        speed: size < 0.8 ? Math.random() * 0.2 + 0.05 : Math.random() * 0.3 + 0.1, // Slower movement
        brightness: Math.random(),
      };
    });

    // Animation function
    const animate = () => {
      ctx.fillStyle = 'rgba(8, 8, 20, 0.08)'; // Reduced opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach((star) => {
        // Update star position with subtle movement
        star.y = (star.y + star.speed) % canvas.height;
        
        // Draw star with reduced opacity
        const opacity = 0.2 + Math.sin(Date.now() * 0.001 + star.brightness * 5) * 0.15;
        
        // Add glow effect for larger stars with reduced opacity
        if (star.size > 1) {
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 2
        );
          gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.8})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Draw star core with reduced opacity
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'linear-gradient(to bottom, #040714, #0A0A1B, #111123)', // Darker, more professional gradient
      }}
    />
  );
};

export default StarryBackground;