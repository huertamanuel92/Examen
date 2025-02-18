import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import 'material-icons/iconfont/material-icons.css';
import { FileUploadService } from '../../services/file-upload.service';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.css'
})
export class ImageUploadComponent implements OnInit {

  currentFile?: File;
  message = '';
  preview = '';

  @Output() onSelectedFile = new EventEmitter<File>();
  @Output() voted = new EventEmitter<boolean>();
  imageInfos?: Observable<any>;

  constructor(private uploadService: FileUploadService) {}
  ngOnInit(): void {
    this.imageInfos = this.uploadService.getFiles();
  }

  selectFile(event: any): void {

   
    this.voted.emit(true);
    this.message = '';
    this.preview = '';
    const selectedFiles = event.target.files;
  
    if (selectedFiles) {
      const file: File | null = selectedFiles.item(0);
  
      if (file) {
        this.preview = '';
        this.currentFile = file;
        this.onSelectedFile.emit(file);
        const reader = new FileReader();
  
        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.preview = e.target.result;
        };
        
        reader.readAsDataURL(this.currentFile);
        
      }
    }
  }
  upload(): void {
    if (this.currentFile) {
      this.uploadService.upload(this.currentFile).subscribe({
        next: (event: any) => {
          if (event instanceof HttpResponse) {
            this.message = event.body.message;
            this.imageInfos = this.uploadService.getFiles();
          }
        },
        error: (err: any) => {
          console.log(err);
  
          if (err.error && err.error.message) {
            this.message = err.error.message;
          } else {
            this.message = 'Could not upload the image!';
          }
        },
        complete: () => {
          this.currentFile = undefined;
        }
      });
    }
  }
}
