import React from 'react'
import { useCounter } from './counterContext';

export default function Counter() {

    const {
		count,
		incrementBy,
		intervalTime,
		isRunning,
		handleIncrement,
		handleDecrement,
		toggleAutoIncrement,
		setIncrementBy,
		setIntervalTime,
	} = useCounter();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <h1 className="text-9xl m-4">{count}</h1>
            <div>
                <div className="flex gap-8 mt-4">
                    <button onClick={handleIncrement} className="normal px-8 py-2 bg-neutral-800 text-white rounded-xl">
                        Increment
                    </button>
                    <button onClick={handleDecrement} className="normal px-8 py-2 bg-neutral-800 text-white rounded-xl">
                        Decrement
                    </button>
                </div>
                <div className="mt-4 flex items-center text-right border-2 border-neutral-500 px-3 py-2 w-full rounded-xl bg-[#d5f22f]">
                    <input
                        type="number"
                        value={incrementBy}
                        onChange={(e) => setIncrementBy(Number(e.target.value))}
                        className="outline-none bg-transparent"
                    />
                    <span className='normal text-neutral-500'>increment by</span>
                </div>
                <div className="normal mt-6 text-lg text-neutral-500">Auto increment</div>
                <button
                    onClick={toggleAutoIncrement}
                    className="mt-2 px-4 py-2 bg-neutral-800 text-white rounded-xl flex items-center"
                >
                    {
                        isRunning
                            ?
                            <div className='flex items-center gap-2 px-3'>
                                <svg className='w-4' viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1_136)">
                                        <path d="M6.5 0C4.77594 0 3.1226 0.685035 1.90385 1.90385C0.6851 3.12267 0 4.77607 0 6.5C0 8.22393 0.685035 9.8774 1.90385 11.0962C3.12267 12.3149 4.77607 13 6.5 13C8.22393 13 9.8774 12.315 11.0962 11.0962C12.3149 9.87734 13 8.22393 13 6.5C13 4.77607 12.315 3.1226 11.0962 1.90385C9.87734 0.6851 8.22393 0 6.5 0ZM6.5 12.0002C5.04153 12.0002 3.6426 11.4208 2.61066 10.3893C1.57929 9.35747 0.99983 7.95847 0.99983 6.5C0.99983 5.04153 1.57924 3.6426 2.61066 2.61066C3.64254 1.57929 5.04153 0.99983 6.5 0.99983C7.95847 0.99983 9.3574 1.57924 10.3893 2.61066C11.4207 3.64254 12.0002 5.04153 12.0002 6.5C12.0002 7.95847 11.4208 9.3574 10.3893 10.3893C9.35747 11.4207 7.95847 12.0002 6.5 12.0002ZM5.9998 4.50034V8.49992C5.9998 8.56645 5.9739 8.62992 5.92668 8.67715C5.87996 8.72387 5.81648 8.75028 5.74995 8.75028H4.75007C4.61195 8.75028 4.50022 8.63805 4.50022 8.49992V4.50034C4.50022 4.36222 4.61194 4.24999 4.75007 4.24999H5.74995C5.81648 4.24999 5.87995 4.27639 5.92668 4.32311C5.9739 4.37034 5.9998 4.43381 5.9998 4.50034ZM8.4997 4.50034V8.49992C8.4997 8.56645 8.4738 8.62992 8.42658 8.67715C8.37986 8.72387 8.31638 8.75028 8.24985 8.75028H7.24997C7.11185 8.75028 7.00012 8.63805 7.00012 8.49992V4.50034C7.00012 4.36222 7.11184 4.24999 7.24997 4.24999H8.24985C8.31638 4.24999 8.37985 4.27639 8.42658 4.32311C8.4738 4.37034 8.4997 4.43381 8.4997 4.50034Z" fill="white" />
                                    </g>
                                    <defs><clipPath id="clip0_1_163"><rect width={13} height={13} fill="white" /></clipPath></defs>
                                </svg>
                                <h1>Stop</h1>
                            </div>
                            :
                            <div className='flex items-center gap-2 px-3'>
                                <svg className='w-4' viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1_136)">
                                        <path d="M6.5 0C4.77594 0 3.1226 0.685035 1.90385 1.90385C0.6851 3.12267 0 4.77607 0 6.5C0 8.22393 0.685035 9.8774 1.90385 11.0962C3.12267 12.3149 4.77607 13 6.5 13C8.22393 13 9.8774 12.315 11.0962 11.0962C12.3149 9.87734 13 8.22393 13 6.5C13 4.77607 12.315 3.1226 11.0962 1.90385C9.87734 0.6851 8.22393 0 6.5 0ZM6.5 12.0002C5.04153 12.0002 3.6426 11.4208 2.61066 10.3893C1.57929 9.35747 0.99983 7.95847 0.99983 6.5C0.99983 5.04153 1.57924 3.6426 2.61066 2.61066C3.64254 1.57929 5.04153 0.99983 6.5 0.99983C7.95847 0.99983 9.3574 1.57924 10.3893 2.61066C11.4207 3.64254 12.0002 5.04153 12.0002 6.5C12.0002 7.95847 11.4208 9.3574 10.3893 10.3893C9.35747 11.4207 7.95847 12.0002 6.5 12.0002Z" fill="white" /><path d="M8.86632 5.98652L5.7123 3.94534C5.32421 3.69181 4.81482 3.98347 4.81482 4.46528V8.53472C4.81482 9.01653 5.31237 9.30819 5.7123 9.05466L8.86632 7.01348C9.24209 6.7852 9.24209 6.22768 8.86632 5.98652Z" fill="white" />
                                    </g>
                                    <defs><clipPath id="clip0_1_136"><rect width={13} height={13} fill="white" /></clipPath></defs>
                                </svg>
                                <h1>Start</h1>
                            </div>
                    }
                </button>
                <div className="flex-row items-center mt-4 w-full">
                    <input
                        type="range"
                        min="50"
                        max="4000"
                        step="10"
                        value={intervalTime}
                        onChange={(e) => setIntervalTime(Number(e.target.value))}
                        className="w-full "
                    />
                    <span className="ml-4">{intervalTime / 1000} seconds</span>
                </div>
            </div>
        </div>
    )
}
