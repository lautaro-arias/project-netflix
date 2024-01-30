import  { useEffect, useState } from 'react'

const useCountdownTimer = () => {
//CountdownTimer
    const initialDays = 100;
    const initialHours = 8;
    const initialMinutes = 30;
    const initialSeconds = 5;

    const [days, setDays] = useState<number>(initialDays);
    const [hours, setHours] = useState<number>(initialHours);
    const [minutes, setMinutes] = useState<number>(initialMinutes);
    const [seconds, setSeconds] = useState<number>(initialSeconds);

    //Calcular la fecha futura sumando los milisegundos correspondientes a días, horas, minutos y segundos
    useEffect(() => {
    const future = Date.now() + (initialDays * 24 * 60 * 60 * 1000) +
                                (initialHours * 60 * 60 * 1000) +
                                (initialMinutes * 60 * 1000) +
                                (initialSeconds * 1000);

    const updateTimer = () => {
     // Obtener la fecha y hora actuales
        const now = new Date();

    // Calcular la diferencia entre la fecha futura y la fecha actual
        const diff = future - now.getTime();

    // Calcular días, horas, minutos y segundos restantes
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor(diff / (1000 * 60 * 60));
        const m = Math.floor(diff / (1000 * 60));
        const s = Math.floor(diff / 1000);

        setDays(d);
        setHours(h - d * 24);
        setMinutes(m - h * 60);
        setSeconds(s - m * 60);
    };
    // Llamarlo inicialmente para evitar un segundo de retraso
    updateTimer(); 
    
    // Configurar un intervalo que llame a la función updateTimer cada segundo
    const interval = setInterval(updateTimer, 1000);

    // Limpieza del intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
    }, []);
////    

    return{
        days,
        hours,
        minutes,
        seconds,
    }
    //
}

export default useCountdownTimer