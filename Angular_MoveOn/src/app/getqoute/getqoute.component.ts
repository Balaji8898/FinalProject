import { analyzeAndValidateNgModules, Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { NewqouteService } from '../newqoute.service';

@Component({
  selector: 'app-getqoute',
  templateUrl: './getqoute.component.html',
  styleUrls: ['./getqoute.component.css']
})
export class GetqouteComponent implements OnInit {

  qoute: any;
  user:any={};
  submitted=false;
  predata:any;
  previousappnumber:any;
  an:any;
  convertvalue:any;
  prefix:any;
  s:any;
  
  constructor(public fb: FormBuilder, public nq: NewqouteService,public router:Router) { }

  ngOnInit() {

      this.nq.applicationnum().subscribe((data) => {
        console.log(data);
      this.previousappnumber = data;
      this.an = Number(this.previousappnumber.jobnumber)+1;
      const prefix = new String("IN");
      const today=new Date();
      const year = today.getFullYear();
      const month = today.getMonth();
      const full_id = prefix+"-"+year+"-"+(month+1)+"-"+this.an;
      console.log(full_id);  
      console.log(this.previousappnumber);
      console.log(this.previousappnumber.jobnumber);
      });
    // this.qoute = this.fb.group({
    //   movingfrom: ['',Validators.required],
    //   movingfrompincode: ['',Validators.required],
    //   movingto:['',[Validators.required],],
    //   movingtopincode: ['',[Validators.required],],
    //   wheredoyouwanttogo: [''],
    //   whatareyoumoving: ['', [Validators.required],],
    //   whyareyoumoving: ['', [Validators.required],],
    //   additionalservices: ['',[Validators.required]],
    //   movingon: ['',[Validators.required]],
    //   name: ['',[Validators.required]],
    //   phonenumber: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]{10}')]],
    //   emailaddress: ['',[Validators.required, Validators.email]],
    //   currentaddress: ['',[Validators.required]],
    //   anythingyouwantustoknow: ['',[Validators.required]]
    // })
    this.getqoute();
    // console.log(localStorage.getItem('Users'));
    this.predata=localStorage.getItem('Users');
    this.convertvalue=JSON.parse(this.predata);
    this.qoute.get('movingfrom').setValue(this.convertvalue.movingfrom);
    this.qoute.get('movingfrompincode').setValue(this.convertvalue.movingfrompincode);
    this.qoute.get('movingto').setValue(this.convertvalue.movingto);
    this.qoute.get('movingtopincode').setValue(this.convertvalue.movingtopincode);
    this.qoute.get('wheredoyouwanttogo').setValue(this.convertvalue.wheredoyouwanttogo);
    this.qoute.get('whatwouldyouliketomove').setValue(this.convertvalue.whatwouldyouliketomove);
    this.qoute.get('servicequality').setValue(this.convertvalue.servicequality);
    this.qoute.get('whyareyoumoving').setValue(this.convertvalue.whyareyoumoving);
    this.qoute.get('additionalservices').setValue(this.convertvalue.additionalservices);
    this.qoute.get('consultation').setValue(this.convertvalue.consultation);
    this.qoute.get('name').setValue(this.convertvalue.name);
    this.qoute.get('phonenumber').setValue(this.convertvalue.phonenumber);
    this.qoute.get('emailaddress').setValue(this.convertvalue.emailaddress);
    this.qoute.get('currentaddress').setValue(this.convertvalue.currentaddress);
    this.qoute.get('anythingyouwantustoknow').setValue(this.convertvalue.anythingyouwantustoknow);    
    this.qoute.get('movingon').setValue(this.convertvalue.movingon);
  }

onSubmit()
  {
    this.submitted = true;
    if (this.qoute.invalid){

      alert("Kindly fill the form with the mandatory fields!")
      }

      if(!this.qoute.invalid){
        
     
          
  // Generate random numbrs without repetition

  if(this.qoute.get('wheredoyouwanttogo').value=="International"){
    this.prefix = new String("IN");
  }
  else{
    this.prefix = new String("DO");
  }
  const today=new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
        function createArrayOfNumbers(start: number, end: number){
          let myArray = [];
          for(let i = start; i <= end; i++) { 
              myArray.push(i);
          }
          return myArray;
      }

      let numbersArray = createArrayOfNumbers(1,999);
      
      function getRandomNumber(min: number, max: number) {
        let step1 = max - min + 1;
        let step2 = Math.random() * step1;
        let result = Math.floor(step2) + min;
        return result;
    }

    let randomIndex = getRandomNumber(0, numbersArray.length-1);
    let randomNumber = numbersArray[randomIndex];
    numbersArray.splice(randomIndex, 1);

    this.s= new String(randomNumber);
    while(this.s.length<3){
      this.s='0'+this.s;
    }
    const full_id = this.prefix.concat("-").concat(year).concat("-").concat(month+1).concat("-").concat(this.s);
      alert("Thanks!We will get back to you \n Your Job Application Number: "+full_id)
    this.qoute.get('applicationnumber').setValue(full_id);
      this.nq.addqoute(this.qoute.value).subscribe((data)=>{});
      this.nq.addqoute(this.s).subscribe((data)=>{});
      
      this.qoute.reset();
      }
}

getqoute(){
//   this.qoute = this.fb.group({
//       movingfrom: ['',[Validators.required]],
//       movingfrompincode: ['',[Validators.required]],
//       movingto:['',[Validators.required]],
//       movingtopincode: ['',[Validators.required]],
//       wheredoyouwanttogo: ['', [Validators.required]],
//       whatwouldyouliketomove:['', [Validators.required,Validators]],
//       servicequality:['',],
//       whyareyoumoving: ['',],
//       additionalservices: ['',],
//       consultation: ['',[Validators.required]],
//       name: ['',[Validators.required]],
//       phonenumber: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]{10}')]],
//       emailaddress: ['',[Validators.required, Validators.email]],
//       currentaddress: ['',[Validators.required]],
//       anythingyouwantustoknow: ['',],
//       movingon: ['',[Validators.required]]
// });
this.qoute = new FormGroup({
  movingfrom: new FormControl('', [Validators.required]),
  movingfrompincode: new FormControl('',[Validators.required]),
  movingto: new FormControl('',[Validators.required]),
  movingtopincode: new FormControl('',[Validators.required]),
  wheredoyouwanttogo: new FormControl('',[Validators.required]),
  whatwouldyouliketomove: new FormControl('',[Validators.required]),
  servicequality: new FormControl('',[]),
  whyareyoumoving: new FormControl('',[]),
  additionalservices: new FormControl('',[]),
  consultation: new FormControl('',[Validators.required]),
  name: new FormControl('',[Validators.required]),
  phonenumber:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]{10}')]),
  emailaddress:new FormControl('',[Validators.required,Validators.email]),
  currentaddress:new FormControl('',[Validators.required]),
  anythingyouwantustoknow:new FormControl('',[]),
  movingon:new FormControl('',[Validators.required]),
  applicationnumber: new FormControl()
  })
}

onSave(){
  console.log(this.qoute.value);
  this.user=Object.assign(this.user,this.qoute.value);
  localStorage.setItem('Users',JSON.stringify(this.user));
}

goBack(){
  this.router.navigateByUrl("");
}



get mfrom() {
  console.log(this.qoute);
  return this.qoute.controls['movingfrom'];
}
get mfrompincode(){
  return this.qoute.controls['movingfrompincode'];
}
get mto() {
  return this.qoute.controls['movingto'];
}
get mtopincode(){
  return this.qoute.controls['movingtopincode'];
}
get where(){
  return this.qoute.controls['wheredoyouwanttogo'];
}
get what(){
  return this.qoute.controls['whatwouldyouliketomove'];
}
get consult(){
  return this.qoute.controls['consultation'];
}
get namee(){
  return this.qoute.controls['name'];
}
get phone(){
  return this.qoute.controls['phonenumber'];
}
get email(){
  return this.qoute.controls['emailaddress'];
}
get address(){
  return this.qoute.controls['currentaddress'];
}
get date(){
  return this.qoute.controls['movingon'];
}


}
