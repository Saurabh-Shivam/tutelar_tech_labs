import React, { useState } from 'react';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHZpZXdCb3g9IjAgMCA4OCA4OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9Ijg4IiBoZWlnaHQ9Ijg4IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik00NCAyNEMzNi4yNjggMjQgMzAgMzAuMjY4IDMwIDM4VjUwQzMwIDU3LjczMiAzNi4yNjggNjQgNDQgNjRDNTEuNzMyIDY0IDU4IDU3LjczMiA1OCA1MFYzOEM1OCAzMC4yNjggNTEuNzMyIDI0IDQ0IDI0WiIgZmlsbD0iIzlDQTNBRiIvPgo8Y2lyY2xlIGN4PSI0NCIgY3k9IjM4IiByPSI0IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yNCA0OEwyNCA2MEgyOEwyOCA0OEgyNFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTYwIDQ4TDYwIDYwSDY0TDY0IDQ4SDYwWiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMzIgMzJMMzIgNDBIMzZMMzYgMzJIMzJaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik01MiAzMkw1MiA0MEg1Nkw1NiAzMkg1MloiIGZpbGw9IiM5Q0EzQUYiLz4KPGNpcmNsZSBjeD0iNTMiIGN5PSIzNSIgcj0iNyIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4KCg==';

export function ImageWithFallback(props) {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  const { src, alt, style, className, ...rest } = props;

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  );
}

