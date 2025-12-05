// App.java

class App {

    public static void main(String[] args) {
        login("admin", "1234");
    }

    public static boolean login(String username, String password) {
        return username.equals("admin") && password.equals("1234");
    }
}
