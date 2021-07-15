import css from 'styled-jsx/css'

export default css.resolve`
    .landing {
        margin: 0;
        padding: 0;
        position: relative;
        width: 100%;
        color: white;
        height: 100vh;
        overflow: visible;
    }
    .portrait_div {
        position: absolute;
        bottom: 0;
        right: 0;
        opacity: 1;
        z-index: 1;
    }
    .portrait {
        position: relative;
        z-index: 1;
        pointer-events: none;
    }
    .name_div {
        position: absolute;
        top: 200px;
        left: 100px;
        height: 65%;
        width: 600px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        z-index: 1;
    }
    .name_h1 {
        position: relative;
        margin: 0;
        margin-top: 30px;
        margin-left: 10px;
        font-size: 75px;
        letter-spacing: .2em;
        text-shadow: 0px 2px 10px black;
        text-align: center;
    }
    .name_h2 {
        width: 600px;
        letter-spacing: .1em;
    }
    .social_bar {
        height: 5px;
        width: 100px;
        border-radius: 20px;
        background-color: rgb(104, 111, 239);
    }
    .rect {
        position: absolute;
        inset: 0px;
        height: 250px;
        width: 250px;
        border-radius: 20px;
        background-color: gold;
        box-shadow: inset -3px -3px 3px rgba(0, 0, 0, 0.319), inset 3px 3px 3px rgba(0, 0, 0, 0.319);
        animation: spin 20s infinite linear;
        mix-blend-mode:darken;
        z-index: 10;
    }
    @keyframes spin {
        from { 
            transform: rotateZ(0deg) rotate(-45deg); 
        }
        to {
            transform: rotateZ(360deg) rotate(-45deg); 
        }
    }
    .cta_button {
        border: 5px solid white;
        border-radius: 10px;
        background: rgba(0,255,00,0.5);
        padding: 10px 20px;
        font-weight: 'bold';
        font-size: 30px;
        letter-spacing: 10px;
    }
`