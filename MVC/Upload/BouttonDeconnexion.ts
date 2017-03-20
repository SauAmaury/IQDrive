/// <reference path="Boutton.ts"/>
/// <reference path="../../lib/jquery.d.ts"/>

class BouttonDeconnexion
{

  constructor(private id: string)
  {
    this.id = id;
    this.attacherEvenement();
  }

  attacherEvenement() : void
  {
    $(this.id).click(()=>{
      console.log('Deconnexion !');
      window.location.href="https://www.jeuxvideo.com";
    });
  }


}