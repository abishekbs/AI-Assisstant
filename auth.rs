// auth.rs

fn login(username: &str, password: &str) -> bool {
    username == "admin" && password == "1234"
}

fn logout(user: &str) {
    println!("{} logged out", user);
}

fn main() {
    let status = login("admin", "1234");
    println!("Login status: {}", status);
}
