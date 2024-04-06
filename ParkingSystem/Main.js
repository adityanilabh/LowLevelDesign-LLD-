import java.util.ArrayList;
import java.util.Stack;
import java.util.Scanner;
// hard coding is allowed
class Vehicle {
    String typeOfVehicle;
    String id;

    public Vehicle(String typeOfVehicle, String id) {
        this.typeOfVehicle = typeOfVehicle;
        this.id = id;
    }
}

class ParkingSpot {
    Vehicle vehicleType;
    boolean isAvailable;
    String spotType;

    public ParkingSpot(String type) {
        vehicleType = null;
        this.spotType = type;
        isAvailable = true;
    }

    public void insertVehicle(Vehicle vehicleType, boolean isStatus) {
        this.vehicleType = vehicleType;
        this.isAvailable = isStatus;
    }

    public void removeVehicle(Vehicle vehicleType) {
        this.vehicleType = null;
        isAvailable = true;
    }
}

class ParkingLot {
    ArrayList<ParkingSpot> parkingspot;
    int capacity;
    int currentSize;

    public ParkingLot() {
        parkingspot = new ArrayList<>(20);
        capacity = 20;
        currentSize = 0;
        for (int i = 0; i < 20; i++) {
            if (i % 6 == 0 && i % 4 != 0) {
                parkingspot.add(new ParkingSpot("Large"));
            } else if (i % 7 == 0) {
                parkingspot.add(new ParkingSpot("Bicycle"));
            } else if (i % 4 == 0 && i % 6 != 0) {
                parkingspot.add(new ParkingSpot("Compact"));
            } else {
                parkingspot.add(new ParkingSpot("Regular"));
            }
        }
    }

    public boolean insert(Vehicle vehicleType) {
        if (currentSize >= capacity) {
            return false;
        }
        int index = checkIfAvailable(vehicleType, true);
        if (index == -1) {
            return false;
        }
        parkingspot.get(index).insertVehicle(vehicleType, false);
        currentSize++;
        return true;
    }

    public int checkIfAvailable(Vehicle vehicleType, boolean isStatus) {
        for (int i = 0; i < 20; i++) {
            ParkingSpot vehicleSpot = parkingspot.get(i);
            if (vehicleSpot.isAvailable && vehicleSpot.spotType.equals(vehicleType.typeOfVehicle)) {
                return i;
            }
        }
        return -1;
    }

    public boolean remove(Vehicle vehicleType) {
        if (currentSize == 0) {
            return false;
        }
        int index = checkIfAvailable(vehicleType, false);
        if (index == -1) {
            return false;
        }
        parkingspot.get(index).removeVehicle(vehicleType);
        currentSize--;
        return true;
    }

    public void getStatus() {
        for (int i = 0; i < 20; i++) {
            ParkingSpot spot = parkingspot.get(i);
            System.out.println(spot.spotType + " is " + (spot.isAvailable ? "Available" : "Occupied"));
        }
        System.out.println(currentSize + " is the current size of parking spot!");
    }
}

public class Main {
    public static void main(String[] args) {
        ParkingLot newParkingLot = new ParkingLot();
        System.out.println("Enter the options from following menu, if you want to end the menu, type -1 : ");
        int index=0;
        int id = 1;
        Scanner sc = new Scanner(System.in);
        do {
            System.out.println("1. Enter the vehicle 2. remove a vehicle 3. checkParkingStatus");
            try {
                index = sc.nextInt();
                sc.nextLine(); // Consume newline character
            }catch(Exception e)
            {
                System.out.println("error Occured!: "+ e);
                continue;
            }
                if (index == 1) {
                    System.out.print("Enter vehicle type: ");
                    String vehicleTypeName = sc.nextLine();
                    Vehicle vehicleType = new Vehicle(vehicleTypeName, Integer.toString(id));
                    id++;
                    boolean isSuccessfull = newParkingLot.insert(vehicleType);
                    if (isSuccessfull) {
                        System.out.println("Successfully inserted!");
                    } else {
                        System.out.println("Lot is full!");
                    }
                    continue;
                } else if (index == 2) {
                    System.out.print("Enter vehicle type: ");
                    String vehicleTypeName = sc.nextLine();
                    Vehicle vehicleType = new Vehicle(vehicleTypeName, Integer.toString(id));
                    id++;
                    boolean isSuccessfull = newParkingLot.remove(vehicleType);
                    if (isSuccessfull) {
                        System.out.println("Successfully removed!");
                    } else {
                        System.out.println("Lot is already empty!");
                    }
                    continue;
                } else if (index == 3) {
                    newParkingLot.getStatus();
                    continue;
                }
        } while (index != -1);
    }
}
