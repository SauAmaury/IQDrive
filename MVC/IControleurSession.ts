interface IControleurSession {

    verifier(): JQueryXHR
    setEtat(b: boolean): void
    login() : void
    dashboard() : void
    finSession() : void
    
}
