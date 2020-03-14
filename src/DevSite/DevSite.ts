import { NavigationHandler } from "./NavigationHandler";
import { Home } from "./Home/Home";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";

export class DevSite {

    // var defs
    navigationHandler:NavigationHandler;

    pageHome:Home;
    pageAbout:About;
    pageContact:Contact;

    constructor(){
        // console.log("DevSite.constructor()");

        this.pageHome = new Home();
        this.pageAbout = new About();
        this.pageContact = new Contact();


        // Navigation handles would typically require access to page class instantiations
        // This is if we take this further to dynamic show/hide capabilities
        // Which again is far quicker and simpler than using react, vue or angular
        this.navigationHandler = new NavigationHandler();
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


}