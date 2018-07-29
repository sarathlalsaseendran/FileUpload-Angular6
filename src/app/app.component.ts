import { Component, OnInit } from '@angular/core';
import { FileService } from './services/file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'File Upload - Angular 6 Client';
  errorMessage: string;
  images: Array<any> = [];

  constructor(private fileService: FileService) { }

  ngOnInit() {
  }
  
  refreshImages(status) {
    if (status == true) {
      alert("Uploaded successfully!");
    }



  }
}