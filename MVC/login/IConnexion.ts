interface IConnexion 
{
  initialiser(c: Controleur): void;
  request(): void;
  isConnected(): boolean;
  close(): void;
}