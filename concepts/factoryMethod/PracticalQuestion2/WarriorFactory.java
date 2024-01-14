class WarriorFactory implements CharacterFactory{

    @Override
    public Character createFactory(){
        return new Warrior();
    }
}