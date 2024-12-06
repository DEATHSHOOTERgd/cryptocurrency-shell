import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class NavigationService{
    private urlSubject = new BehaviorSubject<string>("");
    url$=this.urlSubject.asObservable();

    private isSidebarOpenSubject = new BehaviorSubject<boolean>(true);
    isSidebarOpen$=this.isSidebarOpenSubject.asObservable();

    setUrl(url:string){
        this.urlSubject.next(url);
    }

    setIsSidebarOpen(){
        this.isSidebarOpenSubject.next(!this.isSidebarOpenSubject.value);
    }
}