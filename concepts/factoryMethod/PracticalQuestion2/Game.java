public class Game{
    public static void main(String[] args)
    {
        // instantising a warrior with warrior factory.
        CharacterFactory warriorFactory= new WarriorFactory();
        Character warrior= warriorFactory.createCharacter();
        warrior.attack();
        warrior.defend();
        // same can be done with other testcase as well.
    }
}