class Bicycle implements Vehicle{

    @Override
    public void start(){
        System.out.println("Now you can ride Bicycle!");
    }

    @Override
    public void stop(){
        System.out.println("Now you can stop the car!");
    }
}