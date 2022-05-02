function getAdmins(map){
    let admins = [];

    for([key, value] of map){
        if(value == 'Admin')
        {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Admin1', 'Admin');
usuarios.set('Admin2', 'Admin');
usuarios.set('user1', 'User');
usuarios.set('Admin3', 'Admin');

console.log(getAdmins(usuarios));