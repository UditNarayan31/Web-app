export class FileUpload{
   key:string;
   file:File;
   url:string;
   name:string;
   price:number;
   card:string;
   description:string;

   constructor(file:File){
       this.file = file;
   }
}