import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'qtprofile-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  images: any[] = [];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.images = [
      {
        previewImageSrc: 'https://lh3.googleusercontent.com/kNBKBrPbREgL5Q30WkzIKvX7oM1O2xRpdEHQSkS3ttYioC2RSZXzhdT_1jRxP-RJhGzqWwID-oxRBxw5pOaeigIchAYusBOS-I0iUO1camve33pFE8YcVJ-RrhQ7rbWs3uo2okGZvLGYYbhbXawIr2Ej1O9afpfAaG4H8zLo9goQ8TxlO1INPiHD8RcKMFGO8bv_UalL-ubQCeNQeApvC3EEQizLtHQqIyIcQMMOGnTugCpXIVeso9bpDDHeQjNVgnKgPv40syqwas2-ingQNM95M_rrOYqa5JUw4GbjxPzjtOAfFP_NbyKxfs_dmSegiW8u_Ez-FAfDWucOb5lG8D-j27ndbvkmHk-q9x9sJvtJumTp2WiTU4ROXCDvTKcJZoKS7gzdWSNtJ5a0al17NmRV-w2YCwaR0THYBFOKAFjA1tLmIP2JWhK8jW0L2rUNtG7iavt2q0H-yfS6AltMplPLq-SAqmxl0XdU80_MPyJr1semIcw3AaZSNUFvexYfZA4I4tbURgO0mF76zEEFrG246SlXTJIcPBB7CTsDt7CHpqSNK5R3SO1ZawkT0oRCAuyOAwX_9SIzKAaZ1kfQo9v5OTjgc5CWW0uk2Yr01VtEMSRLVe4Qn_1E2qD1gyW0hSMH-wA7-N4J1cjA8F6Pn_PCPt7xFVQIddwgaDHiijYIiN5X5jgd6QP3L2Ni1vGbW9_Cfc1ZoMsMfYmbWKYw0hVVTu0faekCycIT-auD-MTt3zSDD5XWv3qf__XrjgJ5CbY3XFGvkZPtXXNYGDJ18id4gB7vaTqh-7kJP3hqWZPj2VV21vMfwE97msrfh7RhFGLruFnPkE-tVVTAEP-K40BcpMsTYSHN4kYOEleZF4LssGmq9fimP1wOBr94oCMm-wPVUJzykH89u6L0RYxzDkfoLoZyYKa9Fc5xyBUrdakJ=w2408-h1806-s-no?authuser=0',
        thumbnailImageSrc: 'https://lh3.googleusercontent.com/kNBKBrPbREgL5Q30WkzIKvX7oM1O2xRpdEHQSkS3ttYioC2RSZXzhdT_1jRxP-RJhGzqWwID-oxRBxw5pOaeigIchAYusBOS-I0iUO1camve33pFE8YcVJ-RrhQ7rbWs3uo2okGZvLGYYbhbXawIr2Ej1O9afpfAaG4H8zLo9goQ8TxlO1INPiHD8RcKMFGO8bv_UalL-ubQCeNQeApvC3EEQizLtHQqIyIcQMMOGnTugCpXIVeso9bpDDHeQjNVgnKgPv40syqwas2-ingQNM95M_rrOYqa5JUw4GbjxPzjtOAfFP_NbyKxfs_dmSegiW8u_Ez-FAfDWucOb5lG8D-j27ndbvkmHk-q9x9sJvtJumTp2WiTU4ROXCDvTKcJZoKS7gzdWSNtJ5a0al17NmRV-w2YCwaR0THYBFOKAFjA1tLmIP2JWhK8jW0L2rUNtG7iavt2q0H-yfS6AltMplPLq-SAqmxl0XdU80_MPyJr1semIcw3AaZSNUFvexYfZA4I4tbURgO0mF76zEEFrG246SlXTJIcPBB7CTsDt7CHpqSNK5R3SO1ZawkT0oRCAuyOAwX_9SIzKAaZ1kfQo9v5OTjgc5CWW0uk2Yr01VtEMSRLVe4Qn_1E2qD1gyW0hSMH-wA7-N4J1cjA8F6Pn_PCPt7xFVQIddwgaDHiijYIiN5X5jgd6QP3L2Ni1vGbW9_Cfc1ZoMsMfYmbWKYw0hVVTu0faekCycIT-auD-MTt3zSDD5XWv3qf__XrjgJ5CbY3XFGvkZPtXXNYGDJ18id4gB7vaTqh-7kJP3hqWZPj2VV21vMfwE97msrfh7RhFGLruFnPkE-tVVTAEP-K40BcpMsTYSHN4kYOEleZF4LssGmq9fimP1wOBr94oCMm-wPVUJzykH89u6L0RYxzDkfoLoZyYKa9Fc5xyBUrdakJ=w2408-h1806-s-no?authuser=0'
      }
    ];
  }

}
