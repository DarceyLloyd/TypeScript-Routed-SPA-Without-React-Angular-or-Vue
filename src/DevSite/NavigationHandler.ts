import { UcFirst } from "aftc-modules";

export class NavigationHandler {

    // var defs
    private domHome: HTMLElement;
    private domAbout: HTMLElement;
    private domContact: HTMLElement;

    private domNav: HTMLElement;
    private navItems: HTMLCollection;

    private siteName: string = "dev1.com";
    private browserTitle: string = "DEV1";
    public activePage: string = "";

    constructor() {
        // console.log("NavigationHandler.constructor()");

        this.domHome = document.getElementById("home");
        this.domAbout = document.getElementById("about");
        this.domContact = document.getElementById("contact");

        this.domNav = document.getElementById("nav");
        this.navItems = this.domNav.getElementsByTagName("a");
        // console.log(this.domNav);
        // console.log(this.navItems);

        // We want to prevent default on link click to stop page reloads
        for (let i = 0; i < this.navItems.length; i++) {
            // console.log(this.navItems[i]);
            let link: HTMLElement = this.navItems[i] as HTMLElement;

            link.addEventListener("click", (e) => {
                e.preventDefault();
                this.navClickHandler(e);
            })
        }

        // Watch for for browser back and forward
        window.onpopstate = (e) => {
            e.preventDefault();
            console.log(e);
        }

        // Show page start page the browser enters on
        let route: string = this.getRoute();
        this.showPage(route);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    navClickHandler(e) {
        // target page name is from link click which we
        // get from the event (e) currentTarget or target
        // console.log("e.currentTarget.href = " + e.currentTarget.href);

        // Get the route
        let route: string = this.getRoute(e.currentTarget.href);

        // show page
        this.showPage(route);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    showPage(route: string) {
        // console.log("navigationHandler.showPage(route:"+ route + ")");

        let page: string = "";

        switch (route) {
            case "":
                this.domHome.style.display = "block";
                this.domAbout.style.display = "none";
                this.domContact.style.display = "none";
                break;
            case "about":
                this.domHome.style.display = "none";
                this.domAbout.style.display = "block";
                this.domContact.style.display = "none";
                break;
            case "contact":
                this.domHome.style.display = "none";
                this.domAbout.style.display = "none";
                this.domContact.style.display = "block";
                break;
            default:
                this.domHome.style.display = "block";
                this.domAbout.style.display = "none";
                this.domContact.style.display = "none";
                break;
        }

        let title: string = "";

        if (route == "") {
            title = this.browserTitle;
        } else {
            title = this.browserTitle + " > " + UcFirst(route);
        }

        let state = {
            "pageTitle": title
        }

        // Set url via history
        history.pushState(state, title, route);

        // Set document title
        document.title = title;
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    getRoute(url: string = "") {
        // console.log("getRoute(url:"+url+")");

        if (url === "") {
            url = self.location.href;
        }

        // console.log("this.url = " + url);

        let page: string = "";
        page = url.replace("https://", "");
        page = page.replace("http://", "");
        page = page.replace("www.", "");
        page = page.replace(this.siteName + "/", "");

        // console.log("getRoute(): page = " + page);

        return page;

    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


}