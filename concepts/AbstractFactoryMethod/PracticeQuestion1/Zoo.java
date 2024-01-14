public class Zoo{
    public static void main(String[] args)
    {
        ZooFactory savannahFactory = new SavannahFactory();
        Carnivorous lion= savannahFactory.createCarnivorous();
        Herbivorous cow= savannahFactory.createHerbivorous();
        cow.eat();
        // similarly solve for other cases.
    }
}