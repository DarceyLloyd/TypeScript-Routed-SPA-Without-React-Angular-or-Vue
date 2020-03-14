import {log,AttachDebug,DebugTo} from "aftc-modules";

export class TestApp {

    private t:number = 0;
    private domOut:HTMLElement;

    constructor(){
        log("TestApp.constructor()");

        this.domOut = document.getElementById("out");
        log(this.domOut);

        this.render();
    }


    render(){
        this.t += 0.1;

        this.domOut.innerHTML = "t = " + this.t.toFixed(3);


        requestAnimationFrame(()=>{
            this.render();
        });
    }
}