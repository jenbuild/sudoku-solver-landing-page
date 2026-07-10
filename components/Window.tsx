"use client";

import { useState } from "react";

const Window = () => {
    const [clickSolve, setClickSolve] = useState(false);

    return (
        <>
            {/* Window Top Bar */}
            <div id="window-header">
                <div id="window-controls">
                    <span className="close"></span>
                    <span className="minimize"></span>
                    <span className="maximize"></span>
                </div>
                <h2>Sudoku</h2>
                <div className="w-8"></div>
            </div>

            <div className="p-5 bg-white flex items-center gap-8 rounded-b-lg">
                {clickSolve ? (
                    <div className="p-4 md:py-8 md:px-12">
                        <img src="/game-end.jpg" alt="Sudoku Solved Image" />
                    </div>
                ) : (
                    <div className="p-4 md:py-8 md:px-12">
                        <img src="/game-start.jpg" alt="Sudoku Unsolved Image" />
                    </div>
                )}
                <div className="">
                    <button className="liquid-button py-4 px-6" onClick={() => setClickSolve(true)}>Solve</button>
                </div>
            </div>
        </>
    )
}

export default Window