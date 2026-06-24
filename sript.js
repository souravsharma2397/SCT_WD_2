* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #121216;
    color: #ffffff;
}
.stopwatch-container {
    background: #1e1e26;
    padding: 35px;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
    text-align: center;
    width: 380px;
    border: 1px solid #2d2d3a;
}
h1 {
    font-size: 1.6rem;
    margin-bottom: 25px;
    color: #00f2fe;
    letter-spacing: 2px;
    text-transform: uppercase;
}
.time-display {
    font-size: 3.2rem;
    font-weight: 700;
    margin-bottom: 35px;
    font-variant-numeric: tabular-nums;
    font-family: monospace;
    color: #e0e0e0;
}
.controls {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 25px;
}
.btn {
    flex: 1;
    padding: 14px 0;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease;
}
.btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}
.start { background-color: #00b0ff; color: white; }
.pause { background-color: #ff9100; color: white; }
.lap { background-color: #00e676; color: white; }
.reset { background-color: #ff1744; color: white; }

.btn:hover:not(:disabled) {
    filter: brightness(1.2);
    transform: translateY(-1px);
}
.btn:active:not(:disabled) {
    transform: translateY(1px);
}
.laps-container {
    max-height: 180px;
    overflow-y: auto;
    border-top: 1px solid #2d2d3a;
    padding-top: 20px;
    text-align: left;
}
.laps-container h3 {
    font-size: 0.9rem;
    margin-bottom: 12px;
    color: #88889b;
    text-transform: uppercase;
    letter-spacing: 1px;
}
#lapsList {
    list-style: none;
}
#lapsList li {
    display: flex;
    justify-content: space-between;
    padding: 10px 5px;
    border-bottom: 1px solid #252533;
    font-size: 1rem;
    color: #b0b0bc;
}
#lapsList li span:last-child {
    font-variant-numeric: tabular-nums;
    font-family: monospace;
    color: #ffffff;
}