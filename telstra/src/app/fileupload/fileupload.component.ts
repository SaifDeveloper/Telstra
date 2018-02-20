import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { FileUploader } from 'ng2-file-upload';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url:'http://localhost:3001/uploads'});

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }


}
