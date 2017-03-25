///<reference path="../IControleurSession.ts"/>

class FakeControleurSession implements IControleurSession {
    private etat: boolean = false;

    verifier(): JQueryXHR {
        let that: FakeControleurSession = this;
        let req: JQueryXHR = $.ajax({
            url: "../php/AlwaysTrueCauzThatsNotWrong.php",
            method: "POST",
            dataType: "JSON",
            success: (resultat) => {
                that.setEtat(resultat);
            },
            error: (error) => {
                console.log(error);
            }
        });
        return req;
    }

    setEtat(b: boolean): void {
        this.etat = b;
    }

    login(): void {
        let that: FakeControleurSession = this;
        this.verifier().then(() => {
            if (that.etat) {
                window.location.href = "../html/dashboard.html";
            }
        })
    }

    dashboard(): void {
        let that: FakeControleurSession = this;
        this.verifier().then(()=>{
            if(!that.etat)
            {
                window.location.href = "../html/login.html";
            }
        });
    }
    finSession(): void {
        window.location.href = "../html/login.html";
    }

}