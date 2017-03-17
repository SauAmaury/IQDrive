///<reference path="../MVC/IConnexion.ts"/>
///<reference path="../MVC/controleur.ts"/>

class FakeBDD implements IConnexion {
  private ctrl: Controleur;

  constructor(fakeLogin: string, fakePassword: string) {}

  initialiser(c: Controleur): void { this.ctrl = c; }

  request(): void { this.ctrl.sendRes(true); }

  isConnected(): boolean { return true; }
  close(): void {}
}