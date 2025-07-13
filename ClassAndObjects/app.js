class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log(this.name);
        console.log(this.email);
    }
}

class Admin extends User{
    constructor(name, email){
        super(name, email);
    }

    editData(newName, newEmail){
        this.name = newName;
        this.email = newEmail;
    }
}

const user1 = new User("Shaurya", "abc@gmail.com");
user1.viewData();

const user2 = new Admin("Abhishek","def@gmail.com");
user2.viewData();

user2.editData("Vishal","vish@gmail.com");
user2.viewData();