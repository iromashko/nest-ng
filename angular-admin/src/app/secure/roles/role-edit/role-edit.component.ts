import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Permission } from 'src/app/interfaces/permission';
import { PermissionService } from 'src/app/services/permission.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.scss'],
})
export class RoleEditComponent implements OnInit {
  form: FormGroup;
  permissions: Permission[] = [];
  id: number;

  constructor(
    private fb: FormBuilder,
    private permissionService: PermissionService,
    private roleService: RoleService,
    private router: Router,
    private route: ActivatedRoute
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

    this.id = this.route.snapshot.params.id;
    this.roleService.get(this.id).subscribe((role) => {
      this.form.patchValue({
        name: role.name,
      });
    });
  }

  get permissionArray(): FormArray {
    return this.form.get('permissions') as FormArray;
  }

  submit(): void {
    //
  }
}
