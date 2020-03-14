import {log,onReady} from "aftc-modules";
import { DevSite } from "./DevSite/DevSite";

onReady(function(){
    new DevSite();
});
