export default class Auth {
    static isAuthorized(): boolean{
        return localStorage.getItem("loggedIn")?.toLocaleLowerCase() === "true";
    }
}