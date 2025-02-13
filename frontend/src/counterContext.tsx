import { createContext, useState, useRef, useEffect, useContext, SetStateAction } from "react";

interface CounterType {
    count: number,
    incrementBy: number,
    intervalTime: number,
    isRunning: boolean
    handleIncrement:  () => void,
    handleDecrement:  () => void,
    toggleAutoIncrement: () => void,
    setIncrementBy: React.Dispatch<React.SetStateAction<number>>,
    setIntervalTime: React.Dispatch<React.SetStateAction<number>>
}

const emptyCounterObj: CounterType = {
    count: 0,
    incrementBy: 0,
    intervalTime: 0,
    isRunning: false,
    handleIncrement: function (): void {
        throw new Error("Function not implemented.");
    },
    handleDecrement: function (): void {
        throw new Error("Function not implemented.");
    },
    toggleAutoIncrement: function (): void {
        throw new Error("Function not implemented.");
    },
    setIncrementBy: function (value: SetStateAction<number>): void {
        throw new Error("Function not implemented.");
    },
    setIntervalTime: function (value: SetStateAction<number>): void {
        throw new Error("Function not implemented.");
    }
}

const CounterContext = createContext<CounterType>(emptyCounterObj);

export const useCounter = () => useContext(CounterContext);

export const CounterProvider = ({ children }: { children: React.ReactNode }) => {
    
    const [count, setCount] = useState(1);
	const [incrementBy, setIncrementBy] = useState(3);
	const [intervalTime, setIntervalTime] = useState(2000);
	const [isRunning, setIsRunning] = useState(false);
	
	const intervalRef = useRef<number | null>(null);

	const handleIncrement = () => setCount((prev) => prev + incrementBy);
	const handleDecrement = () => setCount((prev) => prev - incrementBy <= 0 ? 0 : prev - incrementBy);

	const toggleAutoIncrement = () => {
		setIsRunning((prev) => !prev);
	};

	useEffect(() => {
		if (isRunning) {
			intervalRef.current = setInterval(() => {
				setCount((prev) => prev + incrementBy);
			}, intervalTime);
		} else {
			if (intervalRef.current) clearInterval(intervalRef.current);
		}

		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [isRunning, intervalTime, incrementBy]);

    return (
        <CounterContext.Provider
          value={{
            count,
            incrementBy,
            intervalTime,
            isRunning,
            handleIncrement,
            handleDecrement,
            toggleAutoIncrement,
            setIncrementBy,
            setIntervalTime,
          }}
        >
          {children}
        </CounterContext.Provider>
    );
}


