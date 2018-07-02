import * as React from "react";

const FileProtect: React.SFC<object> = (props: object) => (
  <svg
    fill="currentColor"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M550 577v186.7l138 107.9 138-107.9V577l-138-48-138 48zm187.7 33H782c6.5 0 10.3 7.4 6.5 12.7l-114.2 158c-3.2 4.4-9.7 4.4-12.9 0l-73.8-102.1c-3.8-5.3 0-12.7 6.5-12.7h44.3c2.6 0 5 1.2 6.5 3.3l23.1 31.9 63.5-87.8c1.3-2.1 3.7-3.3 6.2-3.3z"
      fill="none"
    />
    <path d="M644.7 669.2c-1.5-2.1-3.9-3.3-6.5-3.3H594c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.8-5.3 0-12.7-6.5-12.7h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8-22.9-31.9zM688 306v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zM296 394c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296z" />
    <path d="M480 852H208V148h560v296c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h312c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" />
    <path d="M882.6 531.2l-192-66.7c-.9-.3-1.7-.4-2.6-.4s-1.8.1-2.6.4l-192 66.7c-3.2 1.1-5.4 4.1-5.4 7.5v251.1c0 2.5 1.1 4.8 3.1 6.3l192 150.2c1.4 1.1 3.2 1.7 4.9 1.7s3.5-.6 4.9-1.7l192-150.2c1.9-1.5 3.1-3.8 3.1-6.3V538.7c0-3.4-2.2-6.4-5.4-7.5zM826 763.7L688 871.6 550 763.7V577l138-48 138 48v186.7z" />
  </svg>
);

FileProtect.displayName = "FileProtect";

export default FileProtect;