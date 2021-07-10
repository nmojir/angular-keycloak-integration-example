import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myuploader',
  templateUrl: './myuploader.component.html',
  styleUrls: ['./myuploader.component.css']
})
export class MyuploaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  config = {
    uploadAPI: {
      url:"http://localhost:8081/upload"
    },
    theme: 'dragNDrop',
    formatsAllowed: 'jpg,jpeg',    
    hideResetBtn: true,
    fileNameIndex: false,
    replaceTexts: {
      selectFileBtn: 'انتخاب فایل',
      resetBtn: 'ریست',
      uploadBtn: 'بارگذاری',
      dragNDropBox: 'Drag & Drop',
      attachPinBtn: 'ضمیمه کردن فایل ها',
      afterUploadMsg_success: 'فایل با موفقیت بارگذاری شد',
      afterUploadMsg_error: 'بارگذاری فایل با خطا مواجه شد',
      sizeLimit: 'محدودیت سایز'
    }
  }

  docUpload(ev) {
    console.log(ev);
  }

}
