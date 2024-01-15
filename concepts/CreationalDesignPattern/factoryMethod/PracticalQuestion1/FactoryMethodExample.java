public class FactoryMethodExample {
    public static void main(String[] args) {
        // Creating a car using the CarFactory
        VehicleFactory carFactory = new CarFactory();
        Vehicle car = carFactory.createVehicle();
        car.start();
        car.stop();

        // Creating a bicycle using the BicycleFactory
        VehicleFactory bicycleFactory = new BicycleFactory();
        Vehicle bicycle = bicycleFactory.createVehicle();
        bicycle.start();
        bicycle.stop();
    }
}