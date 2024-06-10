import { ReactNode, useState } from "react";

export const Resizable = ({ children }: { children: ReactNode }) => {
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);

  return (
    <div
      className="container"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {children}
      <button
        className="resizer"
        onMouseDown={(evtDown) => {
          const onMove = (evtMove: MouseEvent) => {
            setWidth(width + evtMove.clientX - evtDown.clientX);
            setHeight(height + evtMove.clientY - evtDown.clientY);
          };
          document.addEventListener("mousemove", onMove);
          document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", onMove);
          });
        }}
      ></button>
    </div>
  );
};
