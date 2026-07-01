enum Role {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer"
}
interface User {
    username: string;
    email: string;
    role: Role;
}
function checkAccess(user: User){
    if (user.role === Role.Admin) {
        console.log(`${user.username} ได้สิทธิการเข้าถึงทั้งหมด`);
    } else if (user.role === Role.Editor) {
        console.log(`${user.username} ได้สิทธิแก้ไขข้อมูล`);
    } else if (user.role === Role.Viewer) {
        console.log(`${user.username} ได้สิทธิเยี่ยมชมหรือผู้ใช้งาน`);
    }
}
const user1:User = {username:"Salawin",email:"x@gmail.com",role:Role.Admin};
checkAccess(user1);