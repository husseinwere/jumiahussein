import { of } from 'rxjs';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let appComponent: AppComponent, mockUsersService: any
    beforeEach(() => {
        mockUsersService = jasmine.createSpyObj('mockUsersService', ['getUsers'])
        mockUsersService.getUsers.and.returnValue(of([
            {
                "gender": "female",
                "name": {
                    "title": "Mrs",
                    "first": "Celeste",
                    "last": "das Neves"
                },
                "location": {
                    "street": {
                        "number": 2119,
                        "name": "Rua Sete de Setembro "
                    },
                    "city": "Maranguape",
                    "state": "Mato Grosso",
                    "country": "Brazil",
                    "postcode": 48432,
                    "coordinates": {
                        "latitude": "-72.6102",
                        "longitude": "28.7632"
                    },
                    "timezone": {
                        "offset": "-8:00",
                        "description": "Pacific Time (US & Canada)"
                    }
                },
                "email": "celeste.dasneves@example.com",
                "dob": {
                    "date": "1970-12-23T01:40:15.570Z",
                    "age": 52
                },
                "registered": {
                    "date": "2017-09-04T09:04:14.625Z",
                    "age": 5
                },
                "phone": "(39) 2996-0216",
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/19.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/19.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/19.jpg"
                },
                "nat": "BR"
            },
            {
                "gender": "male",
                "name": {
                    "title": "Mr",
                    "first": "Theodore",
                    "last": "Lauten"
                },
                "location": {
                    "street": {
                        "number": 5749,
                        "name": "Nordhagaveien"
                    },
                    "city": "Heggedal",
                    "state": "Nordland",
                    "country": "Norway",
                    "postcode": "2401",
                    "coordinates": {
                        "latitude": "-46.7730",
                        "longitude": "78.4593"
                    },
                    "timezone": {
                        "offset": "+3:00",
                        "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
                    }
                },
                "email": "theodore.lauten@example.com",
                "dob": {
                    "date": "1954-05-26T07:18:14.733Z",
                    "age": 68
                },
                "registered": {
                    "date": "2004-07-24T05:15:18.502Z",
                    "age": 18
                },
                "phone": "70392921",
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/55.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/55.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/55.jpg"
                },
                "nat": "NO"
            }
        ]))
        appComponent = new AppComponent(mockUsersService)
        appComponent.usersTable = []
    })

    describe('filterGender', ()=>{
        it('should set gender parameter in params object', () => {
            appComponent.params.gender = ""
            appComponent.filterGender("male")
            expect(appComponent.params.gender).toEqual("male");
        })
    })

    describe('filterNationality', ()=>{
        it('should set nationality parameter in params object', () => {
            appComponent.params.nationality = ""
            appComponent.filterNationality("ca")
            expect(appComponent.params.nationality).toEqual("ca");
        })
    })

    /*
    describe('rawToTable', ()=>{
        it('should convert raw API data to Angular material table data', () => {
            appComponent.users = [
                {
                    "gender": "female",
                    "name": {
                        "title": "Mrs",
                        "first": "Celeste",
                        "last": "das Neves"
                    },
                    "location": {
                        "street": {
                            "number": 2119,
                            "name": "Rua Sete de Setembro "
                        },
                        "city": "Maranguape",
                        "state": "Mato Grosso",
                        "country": "Brazil",
                        "postcode": 48432,
                        "coordinates": {
                            "latitude": "-72.6102",
                            "longitude": "28.7632"
                        },
                        "timezone": {
                            "offset": "-8:00",
                            "description": "Pacific Time (US & Canada)"
                        }
                    },
                    "email": "celeste.dasneves@example.com",
                    "dob": {
                        "date": "1970-12-23T01:40:15.570Z",
                        "age": 52
                    },
                    "registered": {
                        "date": "2017-09-04T09:04:14.625Z",
                        "age": 5
                    },
                    "phone": "(39) 2996-0216",
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/women/19.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/women/19.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/19.jpg"
                    },
                    "nat": "BR"
                },
                {
                    "gender": "male",
                    "name": {
                        "title": "Mr",
                        "first": "Karl",
                        "last": "Szymanski"
                    },
                    "location": {
                        "street": {
                            "number": 2819,
                            "name": "Mozartstraße"
                        },
                        "city": "Garding",
                        "state": "Nordrhein-Westfalen",
                        "country": "Germany",
                        "postcode": 11983,
                        "coordinates": {
                            "latitude": "-2.9993",
                            "longitude": "-16.8903"
                        },
                        "timezone": {
                            "offset": "+3:00",
                            "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
                        }
                    },
                    "email": "karl.szymanski@example.com",
                    "dob": {
                        "date": "1963-06-02T01:12:16.453Z",
                        "age": 59
                    },
                    "registered": {
                        "date": "2002-07-01T15:27:53.135Z",
                        "age": 20
                    },
                    "phone": "0243-6002174",
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/men/4.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/men/4.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/4.jpg"
                    },
                    "nat": "DE"
                }
            ]
            appComponent.rawToTable(appComponent.users)
            expect(appComponent.usersTable).toEqual([
                {
                    picture: { 'background': 'url(https://randomuser.me/api/portraits/thumb/women/19.jpg)', 'background-size': 'cover', 'background-position': 'center' },
                    name: "Celeste das Neves",
                    gender: "F",
                    age: 52,
                    email: "celeste.dasneves@example.com",
                    phone: "(39) 2996-0216",
                    location: "Maranguape, Brazil",
                    userSince: "Monday, Sep 4, 2017"
                },
                {
                    picture: { 'background': 'url(https://randomuser.me/api/portraits/thumb/men/4.jpg)', 'background-size': 'cover', 'background-position': 'center' },
                    name: "Karl Szymanski",
                    gender: "M",
                    age: 59,
                    email: "karl.szymanski@example.com",
                    phone: "0243-6002174",
                    location: "Garding, Germany",
                    userSince: "Monday, Jul 1, 2002"
                }
            ]);
        })
    })
    */
})