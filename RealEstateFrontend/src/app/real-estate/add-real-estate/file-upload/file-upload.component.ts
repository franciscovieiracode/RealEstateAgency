import { Component, OnInit } from '@angular/core';
import { UploadFileRestService } from 'src/app/services/upload-file-rest.service';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  fileName = '';


  constructor(public uploadFileRest: UploadFileRestService) { }

  ngOnInit(): void {
  }

  onFileSelected(event:any) {

    const file: File = event.target.files[0];

    if (file) {

      this.fileName = file.name;
      this.uploadFileRest.uploadFile(file).subscribe((result:any) => {
        this.fileName = '';
      });
    }
  }
}
