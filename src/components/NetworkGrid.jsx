import { motion } from 'motion/react';
import { useMemo } from 'react';

export function NetworkGrid() {
  const nodes = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
    }));
  }, []);

  const connections = useMemo(() => {
    return nodes.slice(0, 15).map((node, i) => {
      const target = nodes[Math.floor(Math.random() * nodes.length)];
      return { from: node, to: target, id: i };
    });
  }, [nodes]);

  const packets = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => {
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const endX = Math.random() * 100;
      const endY = Math.random() * 100;
      return {
        id: i,
        startX,
        startY,
        endX,
        endY,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <svg className="w-full h-full opacity-30" style={{ willChange: 'contents', transform: 'translateZ(0)' }}>
        {/* Connections */}
        {connections.map((conn) => (
          <motion.line
            key={conn.id}
            x1={`${conn.from.x}%`}
            y1={`${conn.from.y}%`}
            x2={`${conn.to.x}%`}
            y2={`${conn.to.y}%`}
            stroke="rgba(10, 188, 249, 0.2)"
            strokeWidth="1"
            style={{ willChange: 'stroke-dasharray, opacity' }}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: conn.from.delay,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="3"
            fill="rgba(10, 188, 249, 0.4)"
            style={{ willChange: 'transform, opacity' }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.2, 1],
              opacity: [0, 0.6, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: node.delay,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Data packets (moving dashes) */}
        {packets.map((packet) => (
          <motion.rect
            key={`packet-${packet.id}`}
            x={`${packet.startX}%`}
            y={`${packet.startY}%`}
            width="20"
            height="2"
            fill={packet.id % 3 === 0 ? 'rgba(10, 188, 249, 0.5)' : 'rgba(255, 0, 0, 0.3)'}
            style={{ willChange: 'transform' }}
            initial={{ x: `${packet.startX}%`, y: `${packet.startY}%` }}
            animate={{ x: `${packet.endX}%`, y: `${packet.endY}%` }}
            transition={{
              duration: packet.duration,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: packet.delay,
              ease: 'linear',
            }}
          />
        ))}
      </svg>
    </div>
  );
}
