export  interface AppRoute{
    displayedName:string;
    appUrl:string;
    iconUri?:string;
    isDefault?:boolean;
}
export const routes: AppRoute[] = [
    {
        displayedName:"Inicio",
        appUrl:"/assets/bg-fondo.png"
    },
    {
        displayedName:"Criptomonedas",
        appUrl:"http://localhost:4200/"
    },
];