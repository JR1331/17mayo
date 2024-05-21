import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { SignInRequest } from "../_modelo/singin_request";
import { JwtAuthenticationResponse } from "../_modelo/JwtAuthenticationResponse";
import { entorno } from "../_environment/entorno";

@Injectable({
    providedIn:'root'
})

export class LoginService{
    constructor(private http:HttpClient, private router:Router){}

    autenticar(datos:SignInRequest){
        return this.http.post<JwtAuthenticationResponse>
        (`${entorno.HOSTNAME}/auth/singin`,datos)
    }

    estarlogeado(){
        let token = sessionStorage.getItem(entorno.TOKEN_NAME);
        return token!=null;
    }

    cerrarSesion(){
        sessionStorage.clear();
        this.router.navigate(['login']);
    }
}