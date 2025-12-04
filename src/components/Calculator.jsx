import { useState } from "react";
import { evaluate } from "mathjs";

export function Calculator() {
    const buttonClassName = "justify-center items-center";
    const HoverClassName = "hover:opacity-75 transition ease-in-out duration-300 hover:text-gray-400"

    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleClick = (value) => {
        setInput(input + value);
    };

    const handleCalculate = () => {
        try {
            if (!input) return;
            setResult(evaluate(input).toString());
        } catch (error) {
            setResult("error");
            console.error(error);
        }
    }

    const handleClear = () => {
        setInput("");
        setResult("");
    }

    const handleDelete = () => setInput((prev) => prev.slice(0, -1));

    return (
        <div className="grid shadow-md w-[360px] text-2xl font-bold">
            <div className="bg-gray-800 text-white 100 min-h-[180px] grow flex flex-col justify-end items-end p-8 gap-4">
                <span className="flex w-fit justify-self-end text-x1">{input}</span>
                <div className="flex justify-between w-full items-center text-5xl">
                    <span>=</span>
                    <span className="flex h-fit">{result}</span>

                </div>
            </div>
            <div className="bg-black grow h-[480px] grid grid-cols-4">
                <button className={`${buttonClassName} ${HoverClassName} bg-black text-white`} onClick={handleClear}>
                    C
                </button>

                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-gray-400 bg-blend-color-dodge text-white" onClick={() => handleClick("+")}>
                    +
                </button>

                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-gray-400 bg-blend-color-dodge text-white" onClick={() => handleClick("-")}>
                    -
                </button>

                <div className={`${buttonClassName} bg-black`}>

                </div>

                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-gray-400 text-white " onClick={() => handleClick("7")}>
                    7
                </button>

                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-gray-400 text-white " onClick={() => handleClick("8")}>
                    8
                </button>

                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-gray-400 text-white " onClick={() => handleClick("9")}>
                    9
                </button>

                <div className={`${buttonClassName} bg-black`}>

                </div>

                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-gray-400 text-white " onClick={() => handleClick("4")}>
                    4
                </button>

                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-gray-400 text-white " onClick={() => handleClick("5")}>
                    5
                </button>

                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-gray-400 text-white " onClick={() => handleClick("6")}>
                    6
                </button>

                <div className={`${buttonClassName} bg-black`}>

                </div>

                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-gray-400 text-white " onClick={() => handleClick("1")}>
                    1
                </button>


                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-gray-400 text-white " onClick={() => handleClick("2")}>
                    2
                </button>

                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-gray-400 text-white " onClick={() => handleClick("3")}>
                    3
                </button>

                <div className={`${buttonClassName} bg-black`}>

                </div>

                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-gray-400 text-white " onClick={() => handleClick(".")}>
                    .
                </button>

                 <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-gray-400 text-white " onClick={() => handleClick("0")}>
                    0
                </button>

                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-gray-400 text-white " onClick={handleDelete}>
                    DEL
                </button>

                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-gray-400 text-white " onClick={handleCalculate}>
                    =
                </button>

            </div>
        </div>
    );
}