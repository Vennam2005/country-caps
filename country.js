import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class CountryCapitals {
    public static void main(String[] args) {
        Map<String, String> countries = new HashMap<>();
        countries.put("India", "New Delhi");
        countries.put("USA", "Washington, D.C.");
        countries.put("France", "Paris");
        countries.put("Japan", "Tokyo");
        countries.put("Australia", "Canberra");
        countries.put("Brazil", "Brasília");
        countries.put("Germany", "Berlin");

        System.out.println("Country & Capitals App");
        System.out.println("======================");
        System.out.println("Countries available:");
        for (String country : countries.keySet()) {
            System.out.println("- " + country);
        }

        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.print("\nEnter a country name (or 'exit' to quit): ");
            String input = scanner.nextLine();
            if (input.equalsIgnoreCase("exit")) {
                System.out.println("Goodbye!");
                break;
            }
            String capital = countries.get(input);
            if (capital != null) {
                System.out.println("The capital of " + input + " is " + capital + ".");
            } else {
                System.out.println("Country not found. Please try again.");
            }
        }
        scanner.close();
    }
}