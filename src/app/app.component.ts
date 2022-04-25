import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UsersService } from './shared/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jumiahussein';
  users: any = []
  usersTable: any = []
  displayedColumns: string[] = ['picture', 'name', 'gender', 'age', 'email', 'phone', 'location', 'userSince']

  columns = new FormControl()
  params = {
    page: 1,
    gender: '',
    nationality: '',
    seed: '' //'hussein'
  }

  skeletons
  loading: boolean = true
  freshLoad: boolean = true

  constructor(private usersService: UsersService){
    this.skeletons = Array(20).fill(1)
  }

  ngOnInit(){
    this.usersService.getUsers(this.params.page, this.params.gender, this.params.nationality, this.params.seed).subscribe((res: any)=>{
      this.rawToTable(res['results'])

      this.loading = false
      this.freshLoad = false
    })
  }

  rawToTable(data: any[]){
    for(let x of data){
      let picture = {
        'background': 'url('+x.picture.thumbnail+')', 
        'background-size': 'cover', 
        'background-position': 'center'
      }
      let name = x.name.first + ' ' + x.name.last
      let gender = x.gender[0].toUpperCase()
      let age = x.dob.age
      let email = x.email
      let phone = x.phone
      let location = x.location.city + ', ' + x.location.country
      let userSince = new Date(x.registered.date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
      this.usersTable = this.usersTable.concat({
        picture: picture,
        name: name,
        gender: gender,
        age: age,
        email: email,
        phone: phone,
        location: location,
        userSince: userSince
      })
    }
  }

  addUsers(){
    this.loading = true

    this.params.page++
    this.usersService.getUsers(this.params.page, this.params.gender, this.params.nationality, this.params.seed).subscribe((res: any)=>{
      this.users = res['results']
      this.rawToTable(this.users)

      this.loading = false
    })
  }

  displayColumns(){
    this.displayedColumns = this.columns.value
  }

  filterGender(gender: string){
    this.loading = true
    this.freshLoad = true
    this.usersTable = []

    this.params.page = 1
    this.params.gender = gender
    this.usersService.getUsers(this.params.page, this.params.gender, this.params.nationality, this.params.seed).subscribe((res: any)=>{
      this.users = res['results']
      this.rawToTable(this.users)

      this.loading = false
      this.freshLoad = false
    })
  }

  filterNationality(nationality: string){
    this.loading = true
    this.freshLoad = true
    this.usersTable = []

    this.params.page = 1
    this.params.nationality = nationality
    this.usersService.getUsers(this.params.page, this.params.gender, this.params.nationality, this.params.seed).subscribe((res: any)=>{
      this.users = res['results']
      this.rawToTable(this.users)

      this.loading = false
      this.freshLoad = false
    })
  }

  exportTable(format: string){
    let results = this.params.page * 20
    let queryString = `?results=${results}&format=${format}`

    if(this.params.gender)
        queryString += `&gender=${this.params.gender}`
    if(this.params.nationality)
        queryString += `&nationality=${this.params.nationality}`

    const a = document.createElement('a')
    a.href = `https://randomuser.me/api/${queryString}&seed=${this.params.seed}&exc=login,cell,id&dl&noinfo`
    a.target= '_blank'
    a.download= `USERS.${format}`

    a.click()
    a.remove()
  }
}
