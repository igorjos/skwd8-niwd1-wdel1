import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FilesService } from 'src/app/service/files.service';

@Component({
  selector: 'app-directory-listing',
  templateUrl: './directory-listing.component.html',
  styleUrls: ['./directory-listing.component.less']
})
export class DirectoryListingComponent implements OnInit {

  directory:Array<string> = [];
  items:Array<any> = [];
  currentDir:string;
  fileContent:any;

  constructor(
    private _fs:FilesService
  ) { }

  ngOnInit() {
    this._loadFilesInDirectory();
  }

  private _loadFilesInDirectory()
  {
    this._fs.getFolderFiles(this.directory.join("/")).subscribe((items:any) => {
      this.items = ['../'].concat(items).filter(item => item != '/').map(item => {
        return item.replace(/^\//, "").replace(/\/$/, "");
      });
    })
  }

  findItemType(item:string)
  {
    return item.match(/\/[a-zA-Z0-9]+\.[a-zA-Z0-9]{1,4}/ig);
  }

  loadFile(filePath:string)
  {
    this._fs.loadFileContents(filePath).subscribe((data) => {
      console.log(data);
      this.fileContent = data[0].mediaLink
    })
  }

  changePath(item:string)
  {
    let type = this.findItemType(item);

    if(type)
    {
      this.loadFile(item);
      return;
    }

    if(item == '..')//one dir back (parent)
    {
      if( ! this.currentDir )
      this.directory = [];
      else
      {
        let path = this.currentDir.split("/"); console.log('Split', path)
        path.pop(); console.log('Remove last', path);
        this.currentDir = path.join("/"); console.log(this.currentDir);
        this.directory = path; console.log(this.currentDir);
      }

      this._loadFilesInDirectory();
    }
    else
    {
      this.currentDir = item;
      this.directory = [item];
      this._loadFilesInDirectory();
    }
  }

  createNewFolder(formData:NgForm)
  {
    if(formData.valid)
    {
      let data = formData.value;
      data.currentDir = this.currentDir && this.currentDir.length ? this.currentDir : "/";
      this._fs.createNewDir(data).subscribe((response) => {
        console.log(response);
      })
    }
  }

}
