import {Component, ElementRef, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataService} from "../data.service";
import {Observable} from "rxjs/Rx";
import {FileuploadService} from "../fileupload.service";

@Component({
  selector: 'app-assetrvw',
  templateUrl: './assetrvw.component.html',
  styleUrls: ['./assetrvw.component.css']
})
export class AssetrvwComponent implements OnInit {


  //xyz = false;sampleFile;
  notes;unallocated;Costsheet;Assetstatus;CAPEX;Materialdetails;
  DBORS;Activitytype;Transferdetails;ItemMapping;Missinginformation;
  NDPM;LIC;PropertyLease;Login;IPaCassetmodule;
  IPaCordersummary;Reviewprojectbrief;Portfolio;
  equipmentcodes;UpdateActivity;Disposalmethod;
  FIMValue;Transfer;assetclass;physicalquantity;RFUdate;sampleFile;


  constructor(private getdata:DataService,private http:HttpClient,private fileuploader:FileuploadService,private elem:ElementRef) {
    this.getdata.getData().subscribe(
      (data) => {
        console.log(data);
        if(data[0].notes=="No")
        {
          this.notes=false;
        }else {
          this.notes=true;
        }
        if(data[0].unallocated=="No")
        {
          this.unallocated=false;
        }else{
          this.unallocated=true;
        }
        if(data[0].Costsheet=="No")
        {
          this.Costsheet=false;
        }else{
          this.Costsheet=true;
        }
        if(data[0].Assetstatus=="No")
        {
          this.Assetstatus=false;
        }else{
          this.Assetstatus=true;
        }
        if(data[0].CAPEX=="No")
        {
          this.CAPEX=false;
        }else{
          this.CAPEX=true;
        }
        if(data[0].Materialdetails=="No")
        {
          this.Materialdetails=false;
        }else {
          this.Materialdetails=true;
        }
        if(data[0].DBORS=="No")
        {
          this.DBORS=false;
        }else{
          this.DBORS=true;
        }
        if(data[0].Activitytype=="No")
        {
          this.Activitytype=false;
        }else{
          this.Activitytype=true;
        }
        if(data[0].Transferdetails=="No")
        {
          this.Transferdetails=false;
        }else {
          this.Transferdetails=true;
        }
        if(data[0].ItemMapping=="No")
        {

          this.ItemMapping=false;
        }else {
          this.ItemMapping=true;
        }
        if(data[0].Missinginformation=="No")
        {
          console.log("Missing Info is NO")
          this.Missinginformation=false;
        }else {
          this.Missinginformation=true;
        }
        if(data[0].NDPM=="No")
        {
          this.NDPM=false;
        }else{
          this.NDPM=true;
        }
        if(data[0].LIC=="No")
        {
          this.LIC=false;
        }else {
          this.LIC=true;
        }
        if(data[0].PropertyLease=="No")
        {
          this.PropertyLease=false;
        }else {
          this.PropertyLease=true;
        }
        if(data[0].Login=="No")
        {
          this.Login=false;
        }else {
          this.Login=true;
        }
        if(data[0].IPaCassetmodule=="No")
        {
          this.IPaCassetmodule=false;
        }else {
          this.IPaCassetmodule=true;
        }
        if(data[0].IPaCordersummary=="No")
        {
          this.IPaCordersummary=false;
        }else {
          this.IPaCordersummary=true
        }
        if(data[0].Reviewprojectbrief=="No")
        {
          this.Reviewprojectbrief=false;
        }else {
          this.Reviewprojectbrief=true;
        }
        if(data[0].Portfolio=="No")
        {
          this.Portfolio=false;
        }else {
          this.Portfolio=true;
        }
        if(data[0].equipmentcodes=="No")
        {
          this.equipmentcodes=false;
        }else {
          this.equipmentcodes=true;
        }
        if(data[0].UpdateActivity=="No")
        {
          this.UpdateActivity=false;
        }else {
          this.UpdateActivity=true;
        }
        if(data[0].Disposalmethod=="No")
        {
          this.Disposalmethod=false;
        }else {
          this.Disposalmethod=true;
        }
        if(data[0].FIMValue=="No")
        {
          this.FIMValue=false;
        }else {
          this.FIMValue=true;
        }
        if(data[0].Transfer=="No")
        {
          this.Transfer=false;
        }else {
          this.Transfer=true;
        }
        if(data[0].assetclass=="No")
        {
          this.assetclass=false;
        }else {
          this.assetclass=true;
        }
        if(data[0].physicalquantity=="No")
        {
          this.physicalquantity=false;
        }else {
          this.physicalquantity=true;
        }
        if(data[0].RFUdate=="No")
        {
          this.RFUdate=false;
        }else {
          this.RFUdate=true;
        }
      }
    );


  }

  uploadFiles(){
    console.log('in uploadFiles');
    let files = this.elem.nativeElement.querySelector('#selectFile').files;
    let formData = new FormData();
    let file = files[0];
    console.log('file name in ui:',file.name);
    formData.append('selectFile',file,file.name);
    console.log('FormData:',formData);
    this.fileuploader.uploadFile(formData)
      .subscribe(res=>console.log(res));
  }

  // upload() {
  //
  //   this.http.post("http://localhost:8080/upload/", "")
  //     .subscribe(
  //       (err) => {
  //         if(err) console.log(err);
  //         console.log("Success");
  //       });
  // }

//   diff()
//   {
// alert("hitting diff")
//     this.http.post('http://localhost:8080/compare',"").subscribe(
//       (err) => {
//         if(err) console.log(err);
//         console.log("Success");
//       });
//     //alert("Find the difference in diff folder");
//
//   }

//   triggerClick(){
//     document.getElementById('my_file_input').click();
//   }
//   filePicked(oEvent: any){
//     if (oEvent.target.files.length !== 1) throw new Error('Cannot use multiple files');
//     this.onFileChange(oEvent.target.files);
//   }
// filename;filedata;
//   onFileChange(file) {
//     this.filename = file[0].name;
//     /* wire up file reader */
//     const reader: FileReader = new FileReader();
//     reader.onload = (e: any) => {
//       /* read workbook */
//       const bstr: string = e.target.result;
//       const wb= XLSX.read(bstr, {type: 'binary'});
//       var oJS = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
//       this.filedata=oJS;
//       console.log(this.filedata);
//     };
//     reader.readAsBinaryString(file[0]);
//   }

  ngOnInit() {
  }
  // fileName;size;
  // changeListener($event) : void {
  //   //this.readThis($event.target);
  //   let file = $event.target.files[0];
  //   console.log(file)
  //   this.fileName = $event.target.files[0].name;
  //   this.size=$event.target.files[0].size;
  //   console.log(this.size);
  //   console.log(this.fileName);
  // }
}
