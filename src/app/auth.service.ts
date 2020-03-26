import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
    private isAuth = false;

    public login() {
        this.isAuth = true;
    }

    public logout() {
        this.isAuth = false;
    }

    public isAuthenticated(): Promise<boolean> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.isAuth);
            }, 1000);
        });
    }
}
