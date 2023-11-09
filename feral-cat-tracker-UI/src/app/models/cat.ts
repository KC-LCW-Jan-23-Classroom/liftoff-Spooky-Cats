export class Cat{
    id: string;
    microchipNumber: string;
    name: string;
    addressLastSeen: string;
    sex: string;
    breed: string;
    color: string;
    furType: string;
    weight: string;
    estimatedAge: string;
    alteredStatus: string;
    rabiesVaccineDate: string;
    distemperVaccineDate: string;
    fhvVaccineDate: string;
    fivVaccineDate: string;
    felvVaccineDate: string;
    bordetellaVaccineDate: string;
    dateCaptured: string;
    notes: string;
    image: string;
    fileName: string;
    data: Blob;
    fileDownloadUri: string;
    lastModifiedUser: string;
    lastModifiedDate: string;
    createdDate: string;
  
    constructor(id: string, microchipNumber:string, name: string, addressLastSeen: string, sex: string, breed: string,
      color:string, furType: string, weight: string, estimatedAge: string, alteredStatus: string, rabiesVaccineDate:string, 
      distemperVaccineDate: string, fhvVaccineDate: string, fivVaccineDate: string, felvVaccineDate: string,  bordetellaVaccineDate: string,
      dateCaptured:string, notes: string, image: string, fileName: string, data: Blob, fileDownloadURI: string, lastModifiedUser: string, lastModifiedDate: string, createdDate: string){
        this.id=id;
        this.microchipNumber=microchipNumber;
        this.name=name;
        this.sex=sex;
        this.addressLastSeen=addressLastSeen;
        this.breed=breed;
        this.color=color;
        this.furType=furType;
        this.weight=weight;
        this.estimatedAge=estimatedAge;
        this.alteredStatus=alteredStatus;
        this.rabiesVaccineDate=rabiesVaccineDate;
        this.distemperVaccineDate=distemperVaccineDate;
        this.fhvVaccineDate=fhvVaccineDate;
        this.fivVaccineDate=fivVaccineDate;
        this.felvVaccineDate=felvVaccineDate;
        this.bordetellaVaccineDate=bordetellaVaccineDate;
        this.dateCaptured=dateCaptured;
        this.notes=notes;
        this.image=image;
        this.fileName=fileName;
        this.data=data;
        this.fileDownloadUri=fileDownloadURI;
        this.lastModifiedUser=lastModifiedUser;
        this.sex=sex;
        this.addressLastSeen=addressLastSeen;
        this.breed=breed;
        this.lastModifiedDate=lastModifiedDate;
        this.createdDate=createdDate;
    }
  }
  