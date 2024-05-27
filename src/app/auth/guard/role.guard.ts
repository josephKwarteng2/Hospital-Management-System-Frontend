import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleService, UserRole } from 'src/app/shared/services/role.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard {
  constructor(private roleService: RoleService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const allowedRoles = next.data['roles'] as UserRole[];
    if (
      allowedRoles &&
      allowedRoles.includes(this.roleService.getCurrentUserRole())
    ) {
      return true;
    } else {
      return this.router.parseUrl('/unauthorized');
    }
  }
}
