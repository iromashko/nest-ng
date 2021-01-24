import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Permission } from 'src/app/interfaces/permission';
import { PermissionService } from 'src/app/services/permission.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.scss'],
})
export class RoleCreateComponent implements OnInit {
  form: FormGroup;
  permissions: Permission[] = [];

  constructor(
    private fb: FormBuilder,
    private permissionService: PermissionService,
    private roleService: RoleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      permissions: this.fb.array([]),
    });

    this.permissionService.all().subscribe((permissions) => {
      this.permissions = permissions;
      this.permissions.forEach((p) => {
        this.permissionArray.push(
          this.fb.group({
            value: false,
            id: p.id,
          })
        );
      });
    });
  }

  get permissionArray(): FormArray {
    return this.form.get('permissions') as FormArray;
  }

  submit(): void {
    const formData = this.form.getRawValue();

    const data = {
      name: formData.name,
      permissions: formData.permissions
        .filter((p) => p.value === true)
        .map((p) => p.id),
    };

    this.roleService
      .create(data)
      .subscribe(() => this.router.navigate(['/roles']));
  }
}
