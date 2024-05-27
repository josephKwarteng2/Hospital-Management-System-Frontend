// import { map } from 'rxjs/operators';
// import { Role } from 'src/app/shared/models/auth.types';
// import { RoleService } from 'src/app/shared/services/role.service';
// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   UrlTree,
//   Router,
// } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class AdminGuard {
//   constructor(private userRolesService: RoleService, private router: Router) {}

//   canActivate(): (
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ) => Observable<boolean | UrlTree> | boolean | UrlTree {
//     return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
//       return this.userRolesService
//         .hasRole(Role.administrator)
//         .pipe(
//           map((hasRole) =>
//             hasRole ? true : this.router.createUrlTree(['/unauthorized'])
//           )
//         );
//     };
//   }
// }

// @Injectable({ providedIn: 'root' })
// export class PatientGuard {
//   constructor(private userRolesService: RoleService, private router: Router) {}

//   canActivate(): (
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ) => Observable<boolean | UrlTree> | boolean | UrlTree {
//     return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
//       return this.userRolesService
//         .hasRole(Role.patient)
//         .pipe(
//           map((hasRole) =>
//             hasRole ? true : this.router.createUrlTree(['/unauthorized'])
//           )
//         );
//     };
//   }
// }

// @Injectable({ providedIn: 'root' })
// export class DoctorGuard {
//   constructor(private userRolesService: RoleService, private router: Router) {}

//   canActivate(): (
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ) => Observable<boolean | UrlTree> | boolean | UrlTree {
//     return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
//       return this.userRolesService
//         .hasRole(Role.doctor)
//         .pipe(
//           map((hasRole) =>
//             hasRole ? true : this.router.createUrlTree(['/unauthorized'])
//           )
//         );
//     };
//   }
// }
