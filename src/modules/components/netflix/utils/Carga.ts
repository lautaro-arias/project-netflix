import  { useEffect, useState } from 'react'

const useCarga = () => {

    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500); // Cambia el valor 3000 a la cantidad de milisegundos que desees para el tiempo de carga
      return () => clearTimeout(timer);
    }, []);
  
  return {
    isLoading
  }
    
}

export default useCarga