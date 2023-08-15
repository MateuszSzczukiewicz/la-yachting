declare module 'assets/icons/*.svg' {
  import React from 'react';

  const Component: React.FC<React.SVGProps<SVGSVGElement>>;

  export default Component;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}
