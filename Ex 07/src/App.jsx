import {useState, useEffect} from 'react';

const MouseAdjustment = () => {
  const [sides, setSides] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setSides({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h2>Mouse X: {sides.x}</h2>
      <h2>Mouse Y: {sides.y}</h2>
    </div>
  );
}

export default MouseAdjustment;

























// const App = () => {

//   const [width, setWidth] = useState(window.innerWidth);
  
//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     }

//   }, []);

//   return (
//     <div>
//       <h1>Window Width: {width}px</h1>
//     </div>
//   )
// }

// export default App;